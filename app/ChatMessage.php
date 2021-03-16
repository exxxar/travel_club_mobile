<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\SoftDeletes;


class ChatMessage extends Model
{
    use SoftDeletes;
    //
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'conversation_id', 'sender_id', 'message_text', 'files', 'date', 'type'
    ];
    protected $appends = ['selfMessage', 'senderInfo'];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'conversation_id' => 'integer',
        'sender_id' => 'integer',
        'files' => 'array',
        'date' => 'datetime'
    ];
    /**
     * A message belong to a user
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function senderInfo()
    {
        return $this->hasOne(\App\UserInfo::class, 'UserId', 'sender_id');
    }
    public function getSelfMessageAttribute()
    {
        return $this->sender_id === Auth::user()->id;
    }
    public function getSenderInfoAttribute()
    {
        return \App\UserInfo::where('UserId', $this->sender_id)->first();
    }
}
