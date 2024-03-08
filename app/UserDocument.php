<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDocument extends Model
{

    protected $fillable = [
        'user_id', 'manager_id', 'user_tour_id', 'title', 'type', 'storage_link', 'path'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
        'manager_id' => 'integer',
        'created_at' => 'datetime:d.m.Y H:i',
        'updated_at' => 'datetime:d.m.Y H:i',
    ];

    public function shortUser()
    {
        return $this->belongsTo(User::class, 'user_id')->select(['id', 'first_name', 'middle_name', 'last_name']);
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function shortManager()
    {
        return $this->belongsTo(User::class, 'manager_id')->select(['id', 'first_name', 'middle_name', 'last_name']);
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }


    public function shortTour()
    {
        return $this->belongsTo(UserTour::class, 'user_tour_id')->select(['id', 'title']);
    }

    public function tour()
    {
        return $this->belongsTo(UserTour::class, 'user_tour_id');
    }
}
