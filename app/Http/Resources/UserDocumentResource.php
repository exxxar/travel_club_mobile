<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserDocumentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//         'user_id', 'manager_id', 'user_tour_id', 'title', 'type', 'storage_link', 'path'
        $data =  [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'manager_id' => $this->manager_id,
            'user_tour_id' => $this->user_tour_id,
            'title' => $this->title,
            'storage_link' => $this->storage_link,
            'type' => $this->type,
            'path' => $this->path,
            'tour' => $this->whenLoaded('shortTour'),
            'created_at' => $this->created_at,
        ];
        $user = Auth::user();
        if($user->hasRole(['user'])) {
            $data['manager'] = $this->shortManager;
        }
        else if ($user->hasRole(['admin'])) {
            $data['user'] = $this->shortUser;
            $data['manager'] = $this->shortManager;
        }
        else {
            $data['user'] = $this->shortUser;
        }

        return $data;
    }
}
