<?php

namespace App;

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserInfo extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'UserId',
        'Phone',
        'Email',
        'FullName',
        'FirstName',
        'MiddleName',
        'LastName',
        'Age',
        'Sex',
        'Birthday',
        'Passport',
        'Address',
        'City',
        'Department',
        'About',
        'ManagerId',
        'Promocode'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'UserId' => 'integer',
        'City' => 'object',
        'Department' => 'object'
    ];

    protected $attributes = [
        'City' => '{
            "departments": []
        }',
        'Department' => '{
            "address": ""
        }',
    ];

    protected $appends = ['ManagerName', 'ManagerPhone'];

    public function user()
    {
        return $this->hasOne(\App\User::class,'id','UserId');
    }

    public function tours()
    {
        return $this->hasMany(\App\UserTour::class,'UserId','UserId');
    }

    public function tickets()
    {
        return $this->hasMany(\App\UserTicket::class,'UserId','UserId');
    }
    public function getManagerNameAttribute()
    {
        if($this->ManagerId != null)
        {
            $manager = UserInfo::where('UserId', $this->ManagerId)->first();
            return $manager->FullName;
        }
        return null;
    }
    public function getManagerPhoneAttribute()
    {
        if($this->ManagerId != null)
        {
            $manager = UserInfo::where('UserId', $this->ManagerId)->first();
            return $manager->Phone;
        }
        return null;
    }
}
