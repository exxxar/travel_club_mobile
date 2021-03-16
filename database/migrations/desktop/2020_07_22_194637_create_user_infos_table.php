<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('user_infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('UserId')->nullable();
            $table->string('Phone')->unique();
            $table->string('Email')->nullable();
            $table->string('FullName')->default('');
            $table->string('FirstName', 100)->default('');
            $table->string('MiddleName', 100)->default('')->nullable();
            $table->string('LastName', 100)->default('');
            $table->integer('Age')->default(18);
            $table->tinyInteger('Sex')->default(0);
            $table->string('Birthday', 100)->default('')->nullable();
            $table->string('Passport', 100)->default('')->nullable();
            $table->text('Address')->nullable();
            $table->json('City')->nullable();
            $table->json('Department')->nullable();
            $table->text('About')->nullable();
            $table->unsignedInteger('ManagerId')->nullable();
            $table->boolean('Promocode')->default(false)->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_infos');
    }
}
