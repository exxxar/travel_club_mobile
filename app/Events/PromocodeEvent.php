<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class PromocodeEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $code;
    public $tour_description;
    public $tour_price;
    public $user_name;
    public $user_phone;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($code,$tour_description,$tour_price,$user_name,$user_phone)
    {
        //
        $this->code = $code;
        $this->tour_description = $tour_description;
        $this->tour_price = $tour_price;
        $this->user_name = $user_name;
        $this->user_phone = $user_phone;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new PrivateChannel('channel-name');
    }
}
