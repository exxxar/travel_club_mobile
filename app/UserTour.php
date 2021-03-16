<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserTour extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'UserId',
        'TourId',
        'TourInfo',
        'StartAt',
        'EndAt',
        'Comment',
        'Archive'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'UserId' => 'integer',
//        'TourId' => 'integer',
        'TourInfo' => 'array',
        'Comment' => 'array',
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'StartAt',
        'EndAt',
    ];



}
