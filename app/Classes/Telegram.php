<?php


namespace App\Classes;


use Telegram\Bot\FileUpload\InputFile;
use \Telegram\Bot\Laravel\Facades\Telegram as TG;

trait Telegram
{

    public function sendMessage($text)
    {
        TG::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'parse_mode' => 'HTML',
            'text' => sprintf($text),
            'disable_notification' => 'false'
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
