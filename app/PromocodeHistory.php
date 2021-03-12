<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class PromocodeHistory extends Model
{


    protected $fillable = [
        "promocode_id",
        "tour_description",
        "tour_price",
        "user_name",
        "user_phone",
        "is_confirm",
        "created_at",
        "updated_at",
    ];
}
