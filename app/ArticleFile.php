<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\URL;

class ArticleFile extends Model
{
    protected $table = 'article_files';

    protected $fillable = [
//        'url',
        'type',
        'manager_id',
        'article_id',
        'storage_link',
        'path',
        'preview',
        'preview_path',
    ];

    protected $casts = [
        'manager_id' => 'integer',
        'article_id' => 'integer',
    ];


    public function article()
    {
        return $this->belongsTo(Article::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class);
    }

    public function getUrlAttribute($value)
    {
        $urls = json_decode($value, true);
        if (gettype($urls) == 'array') {
            $result = [];
            foreach ($urls as $url) {
                $result[] = URL::to('/') . '/' . $url;
            }
            return $result;
        } else {
            $val = json_decode($value);
            if ($val) {
                return URL::to('/') . '/' . $val;
            } else {
                return URL::to('/') . '/' . $value;
            }
        }
    }
}
