<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Conversation extends Model
{
    use SoftDeletes;
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'manager_title', 'client_title', 'creator_id'
    ];
    public function participants()
    {
        return $this->hasMany(Participant::class);
    }
    public function messages()
    {
        return $this->hasMany(\App\ChatMessage::class, 'conversation_id', 'id');
    }
    public function creator()
    {
        return $this->hasOne(\App\UserInfo::class, 'UserId', 'creator_id');
    }
    protected $casts = [
        'id' => 'integer',
        'creator_id' => 'integer',
    ];
}
