<?php

namespace App\Listeners;

use App\Events\PromocodeEvent;
use App\Promocode;
use App\PromocodeHistory;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Telegram\Bot\Laravel\Facades\Telegram;

class PromocodeListener
{
    use \App\Classes\Telegram;

    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     */
    public function handle(PromocodeEvent $event)
    {
        //

        if (is_null($event))
            return;


        $promocode = Promocode::where("code", $event->code)
            ->first();


        if (is_null($promocode))
            return;

        $promocode->activate_but_not_lead_count = $promocode->activate_but_not_lead_count + 1;

        PromocodeHistory::create([
            "promocode_id" => $promocode->id,
            "tour_description" => $event->tour_description ?? '',
            "tour_price" => $event->tour_price ?? 0.0,
            "user_name" => $event->user_name,
            "user_phone" => $event->user_phone,
        ]);

        $this->sendMessage(sprintf("Активирован промокод %s пользвателем %s (%s) для тура %s",
            $event->code,
            $event->user_name,
            $event->user_phone,
            $event->tour_description
        ));


    }
}
