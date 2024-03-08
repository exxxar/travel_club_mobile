<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    protected $fillable = [
        'content',
        'title',
        'subtitle',
        'author',
        'publish_at',
    ];

    protected $casts = [
        "publish_at"=>"'datetime:d.m.Y H:i",
        'created_at' => 'datetime:d.m.Y H:i',
        'updated_at' => 'datetime:d.m.Y H:i',
    ];


    public function files()
    {
        return $this->hasMany(ArticleFile::class);
    }

    public function images()
    {
        return $this->hasMany(ArticleFile::class, 'article_id', 'id')->select(['id', 'storage_link', 'preview']);
    }

}
