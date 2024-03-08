<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticleFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article_files', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('article_id')->index()->nullable()->comment('id статьи');
            $table->foreign('article_id')->references('id')
                ->on('articles')->nullOnDelete();
            $table->unsignedBigInteger('manager_id')->index()->nullable()->comment('кто добавил');
            $table->foreign('manager_id')->references('id')
                ->on('users')->nullOnDelete();
            $table->string('storage_link')->nullable()->comment('ссылка на файл');
            $table->string('path')->nullable()->comment('путь к файлу');
            $table->string('preview')->nullable()->comment('ссылка на превью');
            $table->string('preview_path')->nullable()->comment('путь к превью');
//            $table->mediumText('url')->comment('ссылка на файл');
            $table->enum('type', ['file', 'image'])->default('file')->comment('тип файла');
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
        Schema::dropIfExists('article_file');
    }
}
