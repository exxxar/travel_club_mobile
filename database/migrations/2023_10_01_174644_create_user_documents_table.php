<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_documents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index()->nullable()->comment('кому добавили');
            $table->foreign('user_id')->references('id')
                ->on('users')->cascadeOnDelete();
            $table->unsignedBigInteger('manager_id')->index()->nullable()->comment('кто добавил');
            $table->foreign('manager_id')->references('id')
                ->on('users')->nullOnDelete();
            $table->unsignedBigInteger('user_tour_id')->index()->nullable()->comment('к какому туру добавили');
            $table->foreign('user_tour_id')->references('id')
                ->on('user_tours');
            $table->string('title')->nullable()->comment('название документа');
            $table->string('type')->nullable()->comment('тип документа');
            $table->string('storage_link')->nullable()->comment('ссылка на документ');
            $table->string('path')->nullable()->comment('путь к документу');
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
        Schema::dropIfExists('user_documents');
    }
}
