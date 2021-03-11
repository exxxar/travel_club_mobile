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

        Promocode::truncate();

        Promocode::create([
            "code"=>"#алешалюбава2021",
            "password"=>bcrypt("password"),
            "self_percent"=>4,
            "cashback_percent"=>4,
            "buyer_percent"=>2,
            "self_description"=>"Блогеры Алеша и Любава"
        ]);

    }
}
