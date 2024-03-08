<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Review extends Model
{
    protected $table = 'reviews';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'manager_id',
        'user_tour_id',
        'topic',
        'message',
        'rate',
        'is_approved',
        'published_at',
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
        'user_tour_id' => 'integer',
        'is_approved' => 'boolean',
        'published_at' => 'datetime:d.m.Y H:i',
        'created_at' => 'datetime:d.m.Y H:i',
        'updated_at' => 'datetime:d.m.Y H:i',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }

    public function shortUser()
    {
        return $this->belongsTo(User::class, 'user_id')
            ->select([
                'id', 'first_name', 'middle_name', 'last_name',
                DB::raw('CONCAT_WS(" ",last_name,first_name,middle_name) as full_name')
            ]);
    }

    public function shortManager()
    {
        return $this->belongsTo(User::class, 'manager_id')
            ->select([
                'id', 'first_name', 'middle_name', 'last_name',
                DB::raw('CONCAT_WS(" ",last_name,first_name,middle_name) as full_name')
            ]);
    }

    public function tour()
    {
        return $this->belongsTo(UserTour::class, 'user_tour_id');
    }
}
