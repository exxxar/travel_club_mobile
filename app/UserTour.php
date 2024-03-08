<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserTour extends Model
{
//    use SoftDeletes;
    protected $table = 'user_tours';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'manager_id',
        'title',
        'country',
        'city',
        'description',
        'type',
        'status',
        'is_archived',
        'params',
        'start_at',
        'end_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
//        'TourId' => 'integer',
        'params' => 'array',
        'is_archived' => 'boolean'
//        'Comment' => 'array',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
//    protected $dates = [
//        'StartAt',
//        'EndAt',
//    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function documents()
    {
        return $this->hasMany(UserDocument::class,'user_tour_id','id');
    }

    public function review()
    {
//        return $this->hasMany(Review::class,'user_tour_id','id')->first();
        return $this->hasOne(Review::class, 'user_tour_id');
    }

    public function shortUser()
    {
        return $this->belongsTo(User::class, 'user_id')->select(['id', 'first_name', 'middle_name', 'last_name']);
    }

    public function shortManager()
    {
        return $this->belongsTo(User::class, 'manager_id')->select(['id', 'first_name', 'middle_name', 'last_name']);
    }

}
