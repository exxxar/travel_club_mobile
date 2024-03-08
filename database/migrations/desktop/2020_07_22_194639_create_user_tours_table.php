<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserToursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::disableForeignKeyConstraints();
        Schema::create('user_tours', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index()->nullable();
            $table->foreign('user_id')->references('id')
                ->on('users')->cascadeOnDelete();
            $table->unsignedBigInteger('manager_id')->index()->nullable();
            $table->foreign('manager_id')->references('id')
                ->on('users')->nullOnDelete();
            $table->string('title')->nullable()->comment('название');
            $table->string('country')->nullable()->comment('страна');
            $table->string('city')->nullable()->comment('город');
            $table->text('description')->nullable()->comment('описание');
            $table->string('type')->nullable()->comment('тип'); //
            $table->string('status')->nullable()->comment('статус'); //
            $table->boolean('is_archived')->default(false)->nullable()->comment('тур в архиве');
            $table->json('params')->nullable()->comment('доп.параметры');
            $table->date('start_at')->nullable()->comment('начинается');
            $table->date('end_at')->nullable()->comment('заканчивается');
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
        Schema::dropIfExists('user_tours');
    }
}
