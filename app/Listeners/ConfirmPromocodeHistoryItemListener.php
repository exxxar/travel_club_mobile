<?php

namespace App\Listeners;

use App\Events\ConfirmPromocodeHistoryItemEvent;
use App\PromocodeHistory;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ConfirmPromocodeHistoryItemListener
{
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
     * @param  object  $event
     * @return void
     */
    public function handle(ConfirmPromocodeHistoryItemEvent $event)
    {
        //

        if (is_null($event))
            return;

        $hi = PromocodeHistory::where("id",$event->history_id)->first();
        $hi->is_confirm = true;
        $hi->save();
    }
}
