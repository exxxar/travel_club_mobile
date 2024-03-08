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
            $table->unsignedBigInteger('user_id')->index()->nullable();
            $table->foreign('user_id')->references('id')
                ->on('users')->cascadeOnDelete();
            $table->unsignedBigInteger('branch_id')->index()->nullable();
            $table->foreign('branch_id')->references('id')
                ->on('branches')->nullOnDelete();
            $table->string('full_name')->nullable();
            $table->tinyInteger('sex')->default(0)->comment('пол');
            $table->date('birthday')->nullable()->comment('дата рождения');
            $table->unsignedBigInteger('passport_id')->index()->nullable()->comment('id паспорта');
            $table->unsignedBigInteger('international_passport_id')->index()->nullable()->comment('id загранпаспорт');
            $table->text('comment')->nullable()->comment('комментарий'); //видит только менеджер
            $table->json('params')->nullable();
//            $table->string('Passport', 100)->default('')->nullable();
//            $table->text('Address')->nullable();
//            $table->json('City')->nullable();
//            $table->json('Department')->nullable();
//            $table->unsignedInteger('ManagerId')->nullable();
//            $table->boolean('Promocode')->default(false)->nullable();
            $table->timestamps();
//            $table->softDeletes();
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
