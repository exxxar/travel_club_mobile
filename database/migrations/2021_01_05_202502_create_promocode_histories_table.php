<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePromocodeHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promocode_histories', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger("promocode_id");
            $table->string("tour_description");
            $table->double("tour_price");
            $table->string("user_name");
            $table->string("user_phone");
            $table->boolean("is_confirm")->default(false);
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
        Schema::dropIfExists('promocode_histories');
    }
}
