<?php

namespace App;

use App\Notifications\MailResetPasswordNotification;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\CanResetPassword;



class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'login', 'password', 'is_admin', 'is_manager', 'role', 'email'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $appends = ['isManagerFor', 'isManagerForCount'];

    public function info()
    {
        return $this->hasOne(\App\UserInfo::class, 'UserId','id');
    }

    public function tours()
    {
        return $this->hasMany(\App\UserTour::class,'UserId','id');
    }
    public function archive()
    {
        return $this->hasMany(\App\UserTour::class,'UserId','id')->where('Archive', true);
    }
    public function isManagerFor()
    {
        return $this->hasMany(\App\UserInfo::class, 'ManagerId','id');
    }

    public function messages()
    {
        return $this->hasMany(\App\ChatMessage::class, 'sender_id', 'id');
    }

    public function conversations()
    {
        return $this->hasMany(\App\Conversation::class, 'creator_id', 'id');
    }

    public function isParticipant()
    {
        return $this->hasMany(\App\Participant::class, 'user_id', 'id');
    }
    public function getIsManagerForAttribute()
    {
        if($this->role == 'manager' || $this->role == 'admin')
        {
            return $this->isManagerFor()->get();
        }
        return null;
    }
    public function getIsManagerForCountAttribute()
    {
        if($this->role == 'manager' || $this->role == 'admin')
        {
            $clients = $this->isManagerFor()->get();
            return  $clients->count();
        }
        return null;
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
    /**
     * Override the mail body for reset password notification mail.
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new MailResetPasswordNotification($token));
    }
}
