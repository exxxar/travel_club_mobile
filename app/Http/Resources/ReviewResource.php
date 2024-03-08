<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'manager_id' => $this->manager_id,
            'user_tour_id' => $this->user_tour_id,
            'topic' => $this->topic,
            'message' => $this->message,
            'rate' => $this->rate,
            'is_approved' => $this->is_approved,
            'published_at' => $this->published_at,
            $this->mergeWhen(Auth::user()->hasRole(['admin', 'manager']), [
                'user' => $this->shortUser,
                'manager' => $this->shortManager,
            ]),
        ];
    }
}
