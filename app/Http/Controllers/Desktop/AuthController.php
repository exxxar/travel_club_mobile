<?php

namespace App\Http\Controllers\Desktop;

use App\ChatMessage;
use App\Conversation;
use App\Participant;
use App\UserInfo;
use App\UserTour;
use DateTime;
use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
//use Auth;
use Telegram\Bot\Laravel\Facades\Telegram;
use Validator;
use App\User;
//use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
//use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
//    use SendsPasswordResetEmails;

    public function __construct()
    {
        $this->middleware('auth:api', ['only' => ['user', 'logout' ]]);
//         ['except' => ['login', 'register','checkAuth', 'sendPasswordResetLink','callResetPassword' ]
    }
     public function login(Request $request)
    {
//        $credentials = $request->only('login', 'password');
        $credentials = $request->only('email', 'password');

        if ($token = $this->guard()->attempt($credentials)) {
//            $user = User::find(Auth::user()->id);
//            if(Auth::user()->role == 'client')
//            {
//                $user = User::where('role', 'client')->whereId(Auth::user()->id)->with(['info', 'tours', 'archive'])->first();
//                if($user->info['ManagerId'] != null)
//                {
//                    $manager = User::where('role', 'manager')->whereId($user->info['ManagerId'])->with(['info'])->first();
//                    $user->info['ManagerName'] = $manager->info['FullName'];
//                    $user->info['ManagerPhone'] = $manager->info['Phone'];
//                }
//            }
//            if(Auth::user()->role == 'manager')
//            {
//                $user = User::where('role', 'manager')->whereId(Auth::user()->id)->with(['info', 'isManagerFor'])->first();
//                $user->isManagerForCount = $user->isManagerFor->count();
//            }

            $user = Auth::user();
            $info = UserInfo::where('UserId', $user->id)->first();
            $user->info = $info;
            if($user->role=='client')
            {
                $tours = UserTour::where('UserId', $user->id)->get();
                $tours_count = UserTour::where('UserId', $user->id)->count();
                $user->tours = $tours;
                $user->tours_count = $tours_count;
                $archive = UserTour::where('UserId', $user->id)->where('Archive', true)->get();
                $user->archive = $archive;
//                if($user->info['ManagerId'] != null)
//                {
//                    $manager = User::where('role', 'manager')->whereId($user->info['ManagerId'])->with(['info'])->first();
//                    $user->info['ManagerName'] = $manager->info['FullName'];
//                    $user->info['ManagerPhone'] = $manager->info['Phone'];
//                }
            }
//            if($user->role=='manager')
//            {
//                $user->isManagerFor = $user->isManagerFor()->get();
//                $user->isManagerForCount = $user->isManagerFor->count();
//            }

//             $user->remember_token = $token;
//             $user->save();
            // $t = auth()->login($user);
            // $test = Auth::check();'test'=>$test
            return response()->json(['status' => 'success', 'token'=> $token, 'user'=>$user ], 200)->header('Authorization', "Bearer ".$token);
        }
        return response()->json([ 'status' => 'error', 'error' => 'Invalid Credentials'], 405);
    }

    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
//            'name' => 'required',
//            'login' => 'required|unique:users|min:3',
            'email' => 'required|unique:users|email',
            'password'  => 'required|min:6',
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }

        $user = new User();
//        $user->name = $request->name;
//        $user->login = $request->login;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        $userInfo = UserInfo::create([
            'UserId' => $user->id,
            'FullName' => $request->FullName,
            'FirstName' => $request->FirstName,
            'MiddleName' => $request->MiddleName,
            'LastName' => $request->LastName,
            'Phone' => $request->Phone,
            'Promocode' => $request->Promocode=='true' ? 1 : 0
        ]);
        $userInfo->save();
        $conversation = Conversation::create([
            'manager_title' => 'Клиент '.$request->FullName,
            'client_title' => 'Администратор сайта',
            'creator_id' => 1
        ]);
        $paticipant_manager = Participant::create([
            'conversation_id'=>$conversation->id,
            'user_id'=> 1,
            'status'=>''
        ]);
        $paticipant_client = Participant::create([
            'conversation_id'=>$conversation->id,
            'user_id'=>$user->id,
            'status'=>''
        ]);
        $objDateTime = new DateTime('NOW');
        $first_message =  ChatMessage::create([
            'conversation_id' => $conversation->id,
            'sender_id' => 1,
            'date' => $objDateTime,
            'message_text' => 'Здравствуйте, Вас приветствует турагенство TravelClub! Эта беседа с администратором сайта, здесь Вы сможете задать любые интересующие Вас вопросы.'
        ]);
        $text = "*Зарегистрирован новый пользователь*\n";
        $text .= "*ID:* ".$user->id."\n"
            ."*Имя:* ".$request->FullName."\n"
            ."*Email:* ".$request->email."\n"
            ."*Телефон:* ".$request->Phone."\n";
//        if($request->Promocode == true)
//        {
//            $text .= "*Промокод: * Да\n";
//        }
//        else {
//            $text .= "*Промокод: * Нет\n";
//        }

        Telegram::sendMessage([
//            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'chat_id' => '-1001370191765',
            'parse_mode' => 'Markdown',
            'text' => sprintf($text),
            'disable_notification' => 'false'
        ]);
        $params = array(
            'name' => $request->FullName,
            'phone' => $request->Phone,
            'email' => '',
            'source' => 'Зарегистрирован новый пользователь на сайте',
            'fields' => array(
                array(
                    'name' => 'Параметры',
                    'values' => array($text)
                ),
            )
        );
        $api_key = '3Dd6Nag08Plq74HKzYqE80xCrf1QE8nfxoQF6rKh9em7ke902sk0W0YM2UtkIpOb';
        $url = "https://travel-club.moidokumenti.ru/api/add-lead";
        $request1 = array(
            'params' => json_encode($params),
            'key' => $api_key
        );

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_TIMEOUT, 600);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $request1);
        $result = curl_exec($ch);
        curl_close($ch);

        $this->login($request);

       return response()->json([
            'status' => 'success',
            'user'=>$user
           ], 200);
   }

    /**
     * Logout User
     */
    public function logout()
    {
        $this->guard()->logout();
        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }
    /**
     * Get authenticated user
     */
    public function user(Request $request)
    {
        // $us = auth()->user();
         if(Auth::check()) {
            $user = Auth::user();

//            $info = UserInfo::where('UserId', $user->id)->first();
            $user->info = $user->info()->first();
    //        $user->archive = $user->archive();

            if($user->role=='client')
            {
                $tours = UserTour::where('UserId', $user->id)->get();
                $tours_count = UserTour::where('UserId', $user->id)->count();
    //                $info = UserInfo::where('UserId', $user->id)->first();
                $user->tours = $tours;
                $user->tours_count = $tours_count;
                $archive = UserTour::where('UserId', $user->id)->where('Archive', true)->get();
                $user->archive = $archive;
    //            $user->info = $info;
//                if($user->info['ManagerId'] != null)
//                {
//                    $manager = User::where('role', 'manager')->whereId($user->info['ManagerId'])->with(['info'])->first();
//                    $user->info['ManagerName'] = $manager->info['FullName'];
//                    $user->info['ManagerPhone'] = $manager->info['Phone'];
//                }
            }
//            if($user->role=='manager')
//            {
//    //                $isManagerFor = User::where('role', 'client')->with(['info', 'tours'])->get();
//    //            $user = User::where('role', 'client')->with(['info', 'isManagerFor'])->get();
//                $user->isManagerFor = $user->isManagerFor()->get();
//                $user->isManagerForCount = $user->isManagerFor->count();
//    //                $user->isManagerFor = $user->isManagerFor();
//            }

            return response()->json([
                'status' => 'success',
                'user' => $user,
                'info' => $user->info
            ]);
             }
         return response()->json(['error' => 'Unauthorized'], 401);

        // return response()->json([
        //     'status' => 'error',
        //     'user' => $us
        // ]);

    }
    public function checkAuth(Request $request)
    {
        try {
            if($this->guard()->check())
            {
//                $this->refresh();
                return response()->json([
                    'status' => true,
                ], 200);
            }
            return response()->json([
                'status' => false,
            ], 200);
        }
        catch (Exception $e)
        {
            return response()->json([
                'status' => false,
            ], 200);
        }


//        $check = $this->guard()->check();
//        return response()->json([
//                'status' => $check,
//            ], 200);

//        if(Auth::check()) {
//            return response()->json([
//                'status' => 'success',
//            ], 200);
//        }
//        return response()->json(['status' => 'Unauthorized'], 200);
    }
     /**
     * Refresh JWT token
     */
    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()
                ->json(['status' => 'success','token'=> $token], 200)
                ->header('Authorization',  "Bearer ".$token);
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }
    /**
     * Return auth guard
     */
    private function guard()
    {
        return Auth::guard();
    }
    /**
     * Send password reset link.
     */
    public function sendPasswordResetLink(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );
        if($status === Password::RESET_LINK_SENT){
            return response()->json(["message" => 'Ссылка для сброса пароля отправлена на Ваш электронный адрес.', 'status'=> $status]);
        }
        return response()->json(['message' => 'Email не может быть отправлен на этот адрес электронной почты.', 'status'=> $status]);

    }
    /**
     * Handle reset password
     */
    public function callResetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->save();

//                $user->setRememberToken(Str::random(60));

                event(new PasswordReset($user));
            }
        );
        if ($status == Password::INVALID_TOKEN) {
            return response()->json(["message" => "Предоставлен недействительный токен"], 400);
        }

        return response()->json(["message" => "Пароль успешно изменен",'token' => $request->token,
            'email' =>  $request->email]);
    }

}
