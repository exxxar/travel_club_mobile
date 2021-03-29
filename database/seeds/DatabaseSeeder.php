<?php

use App\Promocode;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        \App\Bot::truncate();


        \App\Bot::create([
            'bot_url' => "travel_clubbot",
            'token_prod' => "1262415897:AAE35n6senRfTVevyyuQ6eArLEyeyzquR3c",
            'token_dev' => "1262415897:AAE35n6senRfTVevyyuQ6eArLEyeyzquR3c",
            'description' => "Бот TravelClub",
            'bot_pic' => "",
            'is_active' => true,
            'money' => 310,
            'money_per_day' => 10,
        ]);

        Promocode::truncate();

        Promocode::create([
            "code" => "#алешалюбава2021",
            "password" => bcrypt("password"),
            "self_percent" => 4,
            "cashback_percent" => 4,
            "buyer_percent" => 2,
            "self_description" => "Блогеры Алеша и Любава"
        ]);

    }
}
