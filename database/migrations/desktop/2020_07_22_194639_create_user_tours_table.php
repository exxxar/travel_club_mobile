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
            $table->unsignedInteger('UserId')->nullable();
            $table->json('TourInfo');
            $table->timestamp('StartAt')->nullable();
            $table->timestamp('EndAt')->nullable();
            $table->json('Comment')->nullable();
            $table->boolean('Archive')->default(false)->nullable();
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
        Schema::dropIfExists('user_tours');
    }
}
