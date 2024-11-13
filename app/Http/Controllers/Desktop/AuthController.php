<?php

namespace App\Http\Controllers\Desktop;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\User;

//use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
//use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Password;
use App\Traits\TelegramTrait;

class AuthController extends Controller
{
//    use SendsPasswordResetEmails;
    use TelegramTrait;

    public function __construct()
    {
        $this->middleware('jwt.auth', ['only' => ['user', 'logout']]);
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
                $user = User::find(Auth::id())->load('roles');
                return response()->json(['status' => 'success', 'token' => $token, 'user' => $user], 200)
                    ->header('Authorization', "Bearer " . $token);
            }
            return response()->json(['status' => 'error', 'error' => 'Invalid Credentials'], 405);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'error' => $e->getMessage()], 500);
        }
    }

    public function register(Request $request)
    {
        $v = Validator::make($request->all(), [
            'email' => 'required|unique:users|email',
            'password' => 'required|min:8',
        ]);
        if ($v->fails()) {
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

        $manager = $request->get('manager', false);
        if ($manager) {
            $user->assignRole('manager');
        }

        $whom = $manager ? 'менеджер' : 'пользователь';
        $text = "*Зарегистрирован новый " . $whom . "*\n";
        $text .= "*ID:* " . $user->id . "\n"
            . "*Имя:* " . $user->full_name . "\n"
            . "*Email:* " . $request->email . "\n"
            . "*Телефон:* " . $request->phone . "\n"
            . "\n"
            . "\n"
            . "#регистрация" . "\n";
        $this->sendMessage($text, 'Markdown');
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
            'user' => $user->load('roles')
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
            if ($this->guard()->check()) {
//                $this->refresh();
                return response()->json([
                    'status' => true,
                ], 200);
            }
            return response()->json([
                'status' => false,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
            ], 500);
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
                ->json(['status' => 'success', 'token' => $token], 200)
                ->header('Authorization', "Bearer " . $token);
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
        if ($status === Password::RESET_LINK_SENT) {
            return response()->json(["message" => 'Ссылка для сброса пароля отправлена на Ваш электронный адрес.', 'status' => $status]);
        }
        return response()->json(['message' => 'Email не может быть отправлен на этот адрес электронной почты.', 'status' => $status]);

    }

    /**
     * Handle reset password
     */
    public function callResetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
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

        return response()->json(["message" => "Пароль успешно изменен", 'token' => $request->token,
            'email' => $request->email]);
    }

    /**
     * Handle change of password of auth user
     */
    public function changePassword(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'password' => 'required|min:8|confirmed',
            ]);
            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }
            $user = Auth::user()->hasRole('admin') ? User::find($request->id) : Auth::user();
            if ($user) {
                $user->forceFill([
                    'password' => Hash::make($request->password)
                ])->save();

                return response()->json(["message" => "Пароль успешно изменен", 'user' => $user->load('roles')], 201);
            }
            return response()->json(['message' => 'Такого пользователя не существует'], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * Handle change of email or phone
     */
    public function changeContact(Request $request)
    {
        try {
            $validator = Validator::make(request()->all(), [
                'contact' => 'required', //'phone' or 'email'
                'email' => 'required_if:contact,email|email|unique:users,email',
                'phone' => 'required_if:contact,phone|unique:users,phone',
            ]);

            if ($validator->fails()) {
                return response()->json(['message' => $validator->messages()], 501);
            }
            $user = Auth::user()->hasRole('admin') ? User::find($request->id) : Auth::user();
            if ($user) {
                $user->{$request->contact} = $request->{$request->contact};
                $user->save();
                return response()->json(["message" => "Контакт успешно изменен", 'user' => $user->load('roles')], 201);
            }
            return response()->json(['message' => 'Такого пользователя не существует'], 500);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

}
