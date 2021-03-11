<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePromocodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('promocodes', function (Blueprint $table) {
            $table->id();
            $table->string("code")->unique();
            $table->string("password");
            $table->string("self_description")->default("");
            $table->integer("activate_but_not_lead_count")->default(0);
            $table->integer("activate_lead_count")->default(0);
            $table->integer("self_percent")->default(0);
            $table->integer("cashback_percent")->default(0);
            $table->integer("buyer_percent")->default(0);
            $table->boolean("is_active")->default(true);
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
        Schema::dropIfExists('promocodes');
    }
}
