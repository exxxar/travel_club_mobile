<?php

namespace App\Http\Resources;

use App\Enums\UserTourStatusEnum;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserTour extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $tourData =  [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'manager_id' => $this->manager_id,
            'title' => $this->title,
            'country' => $this->country,
            'city' => $this->city,
            'description' => $this->description,
            'type' => $this->type,
            'status' => $this->status,
            'status_name' => UserTourStatusEnum::getValue($this->status),
            'documents' => $this->documents,
            'review' => $this->review
            /*'UserId' => $this->UserId,*/
//            'TourInfo' => $this->TourInfo,
//            'StartAt' => $this->StartAt,
//            'EndAt' => $this->EndAt,
//            'Comment' => $this->Comment,
        ];
        $user = Auth::user();
        if($user->hasRole(['user'])) {
            $tourData['manager'] = $this->shortManager;
        }
        else if ($user->hasRole(['admin'])) {
            $tourData['user'] = $this->shortUser;
            $tourData['manager'] = $this->shortManager;
            $tourData['created_at'] = $this->created_at;
        }
        else {
            $tourData['user'] = $this->shortUser;
            $tourData['created_at'] = $this->created_at;
        }
        return $tourData;
    }
}
