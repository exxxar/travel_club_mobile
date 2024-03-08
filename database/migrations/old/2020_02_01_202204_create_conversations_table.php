<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConversationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('manager_title')->nullable();
            $table->string( 'client_title')->nullable();
            $table->unsignedBigInteger('creator_id'); // = user_id, manager_id or admin_id
            //$table->unsignedBigInteger('user_id');
            $table->foreign('creator_id')->references('id')->on('users');
//            $table->string('type'); // group or private
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('conversations');
    }
}
