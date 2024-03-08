<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('conversation_id');
            $table->foreign('conversation_id')->references('id')->on('conversations');
            $table->unsignedBigInteger('sender_id'); //== user_id, from
            $table->foreign('sender_id')->references('id')->on('users');
            $table->text('message_text')->nullable();
            $table->string('type')->default('text');
//            $table->json('content')->nullable();
            $table->json('files')->nullable();
            $table->dateTime('date')->nullable();
            //$table->json('participants')->nullable();
//            $table->unsignedBigInteger('participant_id');//recipient, to
//            $table->foreign('participant_id')->references('id')->on('participants');
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
        Schema::dropIfExists('chat_messages');
    }
}
