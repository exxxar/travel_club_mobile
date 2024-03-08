<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
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

                "id" => $this->id,
    "content" => $this->content,
    "title" => $this->title,
    "subtitle" => $this->subtitle,
    "author" => $this->author,
    "publish_at" => $this->publish_at,
//    "header_image" => $this->header_image,
    "files" => $this->images,
    "created_at" => $this->created_at

        ];
    }
}
