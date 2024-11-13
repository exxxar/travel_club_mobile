<?php

namespace App\Http\Services;

use App\Exceptions\CustomExceptions\BaseException;
use Carbon\Carbon;
use CodersStudio\SmsRu\Facades\SmsRu;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\RequestOptions;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

trait SendCodeTrait
{
    public function sendEmail($message, $toEmail, $subject = 'Сообщение от TravelClub')
    {
        try {
            Mail::mailer('user_smtp')->send([], [], function ($message) use ($toEmail, $message, $subject) {
                $message->from(config('mail.from.user_address'), config('mail.from.name'));
                $message->to($toEmail);
                $message->subject($subject);
                $message->setBody($message, 'text/html');
            });
        } catch (Exception $e) {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
    }

    public function sendSms($message, $toPhone)
    {
        try {
            $isSent = SmsRu::send($toPhone, $message);
            if (!$isSent) {
                //            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
            }
        } catch (Exception $e) {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
    }

    public function sendEmailCode($toEmail, $code)
    {
        try {
            $html = "Здравствуйте, подтвердите Ваш адрес электронной почты для TravelClub с помощью кода проверки из данного сообщения
            <strong> $code </strong>
            <p>Если Вы не запрашивали код подтверждения для выполнения операции в TravelClub, проигнорируйте данное сообщение.</p>";
            Mail::mailer('user_smtp')->send([], [], function ($message) use ($toEmail, $html) {
                $message->from(config('mail.from.user_address'), config('mail.from.name'));
                $message->to($toEmail);
                $message->subject('Подтверждение электронной почты');
                $message->setBody($html, 'text/html');
            });
        } catch (Exception $e) {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
    }

    public function sendEmailWarning($toEmail, $newEmail)
    {
        try {
            $html = "Здравствуйте, уведомляем Вас, что ваша электронная почта в аккаунте TravelClub через 14 дней будет изменена на
            <strong> $newEmail</strong>
            <p>Если Вы не запрашивали выполнение данной операции в TravelClub, отмените запрос на смену почты в личном кабинете.</p>";
            Mail::mailer('user_smtp')->send([], [], function ($message) use ($toEmail, $html) {
                $message->from(config('mail.from.user_address'), config('mail.from.name'));
                $message->to($toEmail);
                $message->subject('Уведомление о смене электронной почты');
                $message->setBody($html, 'text/html');
            });
        } catch (Exception $e) {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
    }

    public function sendPhoneCode($toPhone, $code)
    {
        $isSent = SmsRu::send($toPhone, 'Ваш код подтверждения в TravelClub: ' . $code . ' Если Вы не запрашивали код подтверждения, проигнорируйте данное сообщение.');
        if (!$isSent) {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
    }

    public function sendPhoneCall($toPhone)
    {
        $client = new Client();
        $response = $client->request('GET', 'https://sms.ru/code/call',
            [
                RequestOptions::QUERY => [
                    "phone" => $toPhone, // номер телефона пользователя
                    "ip" => request()->getClientIp(), // ip адрес пользователя
                    "api_id" => config("sms-ru.api_key")
                ]
            ]);
        $result = json_decode($response->getBody(), true);
        if ($result['status'] != 'OK') {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
        return $result['code'];
    }

    public function sendPhoneWarning($toPhone, $newPhone)
    {
        $isSent = SmsRu::send($toPhone, 'Здравствуйте, уведомляем Вас, что ваш номер телефона в аккаунте TravelClub через 14 дней будет изменен на ' . $newPhone);
        if (!$isSent) {
//            throw new BaseException("ERR_SEND_MESSAGE_FAILED", 550, __('validation.message_err'));
        }
    }
}
