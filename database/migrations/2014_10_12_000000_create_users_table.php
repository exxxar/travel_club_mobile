<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('first_name', 250)->nullable()->comment('имя');
            $table->string('middle_name', 250)->nullable()->comment('отчество');
            $table->string('last_name', 250)->nullable()->comment('фамилия');
            $table->string('phone')->unique()->nullable()->comment('телефон');
            $table->string('email')->unique()->comment('email/логин');
            $table->timestamp('email_verified_at')->nullable();
//            $table->string('login')->unique()->nullable();
            $table->string('password');
//            $table->boolean('is_admin')->default(false);
//            $table->boolean('is_manager')->default(false);
//            $table->string('role')->default('client');
            $table->rememberToken();
            $table->timestamps();
//            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
