<?php


namespace App\Traits;

use Telegram\Bot\FileUpload\InputFile;
use \Telegram\Bot\Laravel\Facades\Telegram as TG;

trait TelegramTrait
{

    public function sendMessage($text,$parse_mode='HTML',$disable_notification='false')
    {
        TG::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'parse_mode' => $parse_mode,
            'text' => sprintf($text),
            'disable_notification' => $disable_notification
        ]);
    }

    public function sendAudio($caption, $audioName)
    {
        TG::sendAudio([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            "caption" => sprintf($caption),
            'parse_mode' => 'HTML',
            'audio' => InputFile::create(storage_path('app/public') . "/uploads/$audioName"),
        ]);
    }
}
