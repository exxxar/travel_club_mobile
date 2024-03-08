<?php

namespace App;

use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\CanResetPassword;
use Spatie\Permission\Traits\HasRoles;


class User extends Authenticatable implements JWTSubject
{
    use Notifiable;
    use HasRoles;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        /*  $table->string('first_name', 250)->nullable()->comment('имя');
            $table->string('middle_name', 250)->nullable()->comment('отчество');
            $table->string('last_name', 250)->nullable()->comment('фамилия');
            $table->string('phone')->unique()->comment('телефон');
            $table->string('email')->unique()->nullable();*/
         'password', 'first_name', 'middle_name', 'last_name', 'email', 'phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'email_verified_at'
    ];


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'created_at' => 'datetime:d.m.Y H:i',
        'updated_at' => 'datetime:d.m.Y H:i',
    ];
//    protected $appends = ['isManagerFor', 'isManagerForCount'];

    protected $appends = ['full_name'];

    public function info()
    {
        return $this->hasOne(\App\UserInfo::class, 'user_id','id');
    }

    public function tours()
    {
        $key = Auth::user()->hasRole('manager') ? 'manager_id' : 'user_id';
        return $this->hasMany(UserTour::class, $key,'id');
    }

    public function documents()
    {
        $key = Auth::user()->hasRole('manager') ? 'manager_id' : 'user_id';
        return $this->hasMany(UserDocument::class, $key,'id');
    }

    public function getFullNameAttribute()
    {
        return implode(' ', array_filter([$this->last_name, $this->first_name, $this->middle_name]));
    }
//    public function archive()
//    {
//        return $this->hasMany(\App\UserTour::class,'UserId','id')->where('Archive', true);
//    }
//    public function isManagerFor()
//    {
//        return $this->hasMany(\App\UserInfo::class, 'ManagerId','id');
//    }
//
//    public function messages()
//    {
//        return $this->hasMany(\App\ChatMessage::class, 'sender_id', 'id');
//    }
//
//    public function conversations()
//    {
//        return $this->hasMany(\App\Conversation::class, 'creator_id', 'id');
//    }
//
//    public function isParticipant()
//    {
//        return $this->hasMany(\App\Participant::class, 'user_id', 'id');
//    }
//    public function getIsManagerForAttribute()
//    {
//        if($this->role == 'manager' || $this->role == 'admin')
//        {
//            return $this->isManagerFor()->get();
//        }
//        return null;
//    }
//    public function getIsManagerForCountAttribute()
//    {
//        if($this->role == 'manager' || $this->role == 'admin')
//        {
//            $clients = $this->isManagerFor()->get();
//            return  $clients->count();
//        }
//        return null;
//    }

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
        //$this->notify(new MailResetPasswordNotification($token));
    }
}
