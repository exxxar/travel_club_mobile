<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index()->nullable()->comment('кто написал');
            $table->foreign('user_id')->references('id')
                ->on('users')->cascadeOnDelete();
            $table->unsignedBigInteger('manager_id')->index()->nullable()->comment('кем опубликован');
            $table->foreign('manager_id')->references('id')
                ->on('users')->nullOnDelete();
            $table->unsignedBigInteger('user_tour_id')->index()->nullable()->comment('к какому туру добавили');
            $table->foreign('user_tour_id')->references('id')
                ->on('user_tours');
            $table->string('topic', 250)->nullable()->comment('тема отзыва');
            $table->longText('message')->nullable()->comment('текст отзыва');
            $table->integer('rate')->nullable()->comment('оценка');
            $table->boolean('is_approved')->nullable()->comment('отзыв одобрен');
            $table->timestamp('published_at')->nullable()->comment('дата опубликования');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
