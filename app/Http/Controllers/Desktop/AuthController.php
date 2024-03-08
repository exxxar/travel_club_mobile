<?php

namespace App\Http\Controllers\Desktop;

use App\ChatMessage;
use App\Conversation;
use App\Participant;
use App\UserInfo;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;
 use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
//use Auth;
use Telegram\Bot\Laravel\Facades\Telegram;
use Illuminate\Support\Facades\Validator;
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
        $this->middleware('jwt.auth', ['only' => ['user', 'logout' ]]);
//        $this->middleware('auth:api', ['only' => ['user', 'logout' ]]);

//         ['except' => ['login', 'register','checkAuth', 'sendPasswordResetLink','callResetPassword' ]
    }
     public function login(Request $request)
    {
        try {
            $credentials = $request->only('email', 'password');
//            $token = $this->guard()->attempt($credentials);
            $token = null;
            $token = auth()->attempt($credentials);
//            $newToken = auth()->refresh();
//            $token = $this->guard()->tokenById(1);
            if ($token) {

//                $user = User::with(['info', 'documents'])->whereId(Auth::id())->first();
                $user = User::find(Auth::id())->load('roles');
//                $info = UserInfo::where('user_id', $user->id)->first();
//                $user->info = $info;
//                if($user->role=='client')
//                {
//                    $tours = UserTour::where('UserId', $user->id)->get();
//                    $tours_count = UserTour::where('UserId', $user->id)->count();
//                    $user->tours = $tours;
//                    $user->tours_count = $tours_count;
//                    $archive = UserTour::where('UserId', $user->id)->where('Archive', true)->get();
//                    $user->archive = $archive;
//                }
                return response()->json(['status' => 'success', 'token'=> $token, 'user'=>$user ], 200)
                    ->header('Authorization', "Bearer ".$token);
            }
            return response()->json([ 'status' => 'error', 'error' => 'Invalid Credentials'], 405);
        }
        catch (\Exception $e)
        {
            return response()->json([ 'status' => 'error', 'error' => $e->getMessage()], 500);
        }
        /*
//        $credentials = $request->only('login', 'password');
        $credentials = $request->only('email', 'password');
         try {
             $token = $this->guard()->attempt($credentials);
             if ($token) {
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
            if($user->hasRole('user'))
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
         catch (\Exception $e) {
             return response()->json([ 'status' => 'error', 'error' => $e->getMessage()], 500);
         }*/
    }

    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|unique:users|email',
            'password'  => 'required|min:8',
        ]);
        if ($v->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $v->errors()
            ], 422);
        }

        $user = new User();
        foreach (request()->all() as $key => $value) {
            if (in_array($key, $user->getFillable())) {
                $user->$key = $value;
            }
        }
        $user->password = bcrypt($request->password);
        $user->save();
        $user->assignRole('user');
//        $userInfo = UserInfo::create([
//            'UserId' => $user->id,
//            'FullName' => $request->FullName,
//            'FirstName' => $request->FirstName,
//            'MiddleName' => $request->MiddleName,
//            'LastName' => $request->LastName,
//            'Phone' => $request->Phone,
////            'Promocode' => $request->Promocode=='true' ? 1 : 0
//        ]);
//        $userInfo->save();
//        $conversation = Conversation::create([
//            'manager_title' => 'Клиент '.$request->FullName,
//            'client_title' => 'Администратор сайта',
//            'creator_id' => 1
//        ]);
//        $paticipant_manager = Participant::create([
//            'conversation_id'=>$conversation->id,
//            'user_id'=> 1,
//            'status'=>''
//        ]);
//        $paticipant_client = Participant::create([
//            'conversation_id'=>$conversation->id,
//            'user_id'=>$user->id,
//            'status'=>''
//        ]);
//        $objDateTime = new DateTime('NOW');
//        $first_message =  ChatMessage::create([
//            'conversation_id' => $conversation->id,
//            'sender_id' => 1,
//            'date' => $objDateTime,
//            'message_text' => 'Здравствуйте, Вас приветствует турагенство TravelClub! Эта беседа с администратором сайта, здесь Вы сможете задать любые интересующие Вас вопросы.'
//        ]);
        $manager = $request->get('manager', false);
        if($manager) {
            $user->assignRole('manager');
        }
        $whom = $manager ? 'менеджер' : 'пользователь';
        $text = "*Зарегистрирован новый ".$whom."*\n";
        $text .= "*ID:* ".$user->id."\n"
            ."*Имя:* ".$user->full_name."\n"
            ."*Email:* ".$request->email."\n"
            ."*Телефон:* ".$request->phone."\n";
//        if($request->Promocode == true)
//        {
//            $text .= "*Промокод: * Да\n";
//        }
//        else {
//            $text .= "*Промокод: * Нет\n";
//        }

//        Telegram::sendMessage([
////            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
//            'chat_id' => '-1001370191765',
//            'parse_mode' => 'Markdown',
//            'text' => sprintf($text),
//            'disable_notification' => 'false'
//        ]);
//        $params = array(
//            'name' => $request->FullName,
//            'phone' => $request->Phone,
//            'email' => '',
//            'source' => 'Зарегистрирован новый пользователь на сайте',
//            'fields' => array(
//                array(
//                    'name' => 'Параметры',
//                    'values' => array($text)
//                ),
//            )
//        );
//        $api_key = '3Dd6Nag08Plq74HKzYqE80xCrf1QE8nfxoQF6rKh9em7ke902sk0W0YM2UtkIpOb';
//        $url = "https://travel-club.moidokumenti.ru/api/add-lead";
//        $request1 = array(
//            'params' => json_encode($params),
//            'key' => $api_key
//        );

//        $ch = curl_init($url);
//        curl_setopt($ch, CURLOPT_URL, $url);
//        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
//        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//        curl_setopt($ch, CURLOPT_TIMEOUT, 600);
//        curl_setopt($ch, CURLOPT_POST, 1);
//        curl_setopt($ch, CURLOPT_POSTFIELDS, $request1);
//        $result = curl_exec($ch);
//        curl_close($ch);

        $this->login($request);

       return response()->json([
            'status' => 'success',
            'message' => 'Регистрация прошла успешно',
            'user'=> $user->load('roles')
           ], 201);
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
    public function user()
    {
//        if(Auth::check()) {
//            $user = Auth::user();
//            $user->info = $user->info()->first();
//
//            if($user->role=='client')
//            {
//                $tours = UserTour::where('UserId', $user->id)->get();
//                $tours_count = UserTour::where('UserId', $user->id)->count();
//                //                $info = UserInfo::where('UserId', $user->id)->first();
//                $user->tours = $tours;
//                $user->tours_count = $tours_count;
//                $archive = UserTour::where('UserId', $user->id)->where('Archive', true)->get();
//                $user->archive = $archive;
//            }
            return response()->json([
                'status' => 'success',
                'user' => User::find(Auth::id())->load('roles'),
//                'info' => $user->info
            ]);
//        }
//        return response()->json(['error' => 'Unauthorized'], 401);
        /*
        // $us = auth()->user();
         if(Auth::check()) {
            $user = Auth::user();

//            $info = UserInfo::where('UserId', $user->id)->first();
            $user->info = $user->info()->first();
    //        $user->archive = $user->archive();

            if($user->hasRole('user'))
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
*/
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
        if ($token = auth()->refresh()) {
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
