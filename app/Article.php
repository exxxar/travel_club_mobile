<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //

    protected $fillable = [
        'content',
        'title',
        'subtitle',
        'author',
        'publish_at',
    ];

    protected $casts = [
        "publish_at"=>"datetime"
    ];
}
