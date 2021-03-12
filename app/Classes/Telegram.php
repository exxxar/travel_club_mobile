<?php


namespace App\Classes;


use Telegram\Bot\FileUpload\InputFile;

trait Telegram
{

    public function sendMessage($text)
    {
        \Telegram\Bot\Laravel\Facades\Telegram::sendMessage([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            'parse_mode' => 'HTML',
            'text' => sprintf($text),
            'disable_notification' => 'false'
        ]);
    }

    public function sendAudio($caption, $audioName)
    {
        \Telegram\Bot\Laravel\Facades\Telegram::sendAudio([
            'chat_id' => env("TELEGRAM_CHANNEL_MAIN"),
            "caption" => sprintf($caption),
            'parse_mode' => 'HTML',
            'audio' => InputFile::create(storage_path('app/public') . "/uploads/$audioName"),
        ]);
    }
}
