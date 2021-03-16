<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tour extends Model
{
    protected $fillable = [
    	'title', 'description', 'rating', 'price','is_hot', 'src'
	];
}
