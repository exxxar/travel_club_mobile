<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promocode extends Model
{
    protected $fillable = [
        "code",
        "password",
        "self_percent",
        "seller_percent",
        "cashback_percent",
        "self_description",
        "is_active"
    ];
}
