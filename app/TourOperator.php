<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TourOperator extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
//        'Id',
        'Name',
        'Enabled',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
//        'Id' => 'integer',
        'Enabled' => 'boolean',
    ];
}
