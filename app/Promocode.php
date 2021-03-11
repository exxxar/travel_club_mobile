<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promocode extends Model
{
    //

    protected $fillable = [
        "code",
        "password",
        "activate_but_not_lead_count",
        "activate_lead_count",
        "self_percent",
        "seller_percent",
        "cashback_percent",
        "self_description",
        "is_active"
    ];

}
