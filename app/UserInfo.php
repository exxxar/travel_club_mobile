<?php

namespace App;

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class UserInfo extends Model
{
//    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
//        'UserId',
//        'Phone',
//        'Email',
//        'FullName',
//        'FirstName',
//        'MiddleName',
//        'LastName',
//        'Age',
//        'Sex',
//        'Birthday',
//        'Passport',
//        'Address',
//        'City',
//        'Department',
//        'About',
//        'ManagerId',
//        'Promocode'
    /* $table->unsignedInteger('user_id')->index()->nullable();
            $table->foreign('user_id')->references('id')
                ->on('users')->cascadeOnDelete();
            $table->unsignedInteger('branch_id')->index()->nullable();
            $table->foreign('branch_id')->references('id')
                ->on('branches')->nullOnDelete();
            $table->string('full_name')->nullable();
            $table->tinyInteger('sex')->default(0)->comment('пол');
            $table->date('birthday')->nullable()->comment('дата рождения');
            $table->unsignedBigInteger('passport_id')->index()->nullable()->comment('id паспорта');
            $table->unsignedBigInteger('international_passport_id')->index()->nullable()->comment('id загранпаспорт');
            $table->text('comment')->nullable()->comment('комментарий'); //видит только менеджер
            $table->json('params')->nullable();*/
        'user_id',
        'branch_id',
        'full_name',
        'sex',
        'birthday',
        'passport_id',
        'international_passport_id',
        'params',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'user_id' => 'integer',
//        'City' => 'object',
//        'Department' => 'object'
    ];

//    protected $attributes = [
//        'City' => '{
//            "departments": []
//        }',
//        'Department' => '{
//            "address": ""
//        }',
//    ];

//    protected $appends = ['ManagerName', 'ManagerPhone'];

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }

    public function tours()
    {
        return $this->hasMany(UserTour::class,'user_id','user_id');
    }

//    public function tickets()
//    {
//        return $this->hasMany(\App\UserTicket::class,'UserId','UserId');
//    }
//    public function getManagerNameAttribute()
//    {
//        if($this->ManagerId != null)
//        {
//            $manager = UserInfo::where('UserId', $this->ManagerId)->first();
//            return $manager->FullName;
//        }
//        return null;
//    }
//    public function getManagerPhoneAttribute()
//    {
//        if($this->ManagerId != null)
//        {
//            $manager = UserInfo::where('UserId', $this->ManagerId)->first();
//            return $manager->Phone;
//        }
//        return null;
//    }
}
