<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Schema;

class CreateIndexTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {


        Artisan::call('migrate', [
            '--path' => "/database/migrations/pwa",
        ]);

        Artisan::call('migrate', [
            '--path' => "/database/migrations/desktop",
        ]);


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Artisan::call('migrate:reset', [
            '--path' => "/database/migrations/pwa",
        ]);

        Artisan::call('migrate:reset', [
            '--path' => "/database/migrations/desktop",
        ]);

    }
}
