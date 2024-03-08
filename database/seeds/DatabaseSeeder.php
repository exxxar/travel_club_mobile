<?php

use Illuminate\Database\Seeder;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        User::create([
            'first_name' => 'infinitySoul13',
            'email' => 'infinitySoul13@gmail.com',
            "password" => bcrypt("password"),
        ]);
//        $2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
//        $2y$10$mp5waw5bm5/6NQ2FrTZ41uCZYnYk7lRci1/pFvsxLWsSDmu4SklpS
//        $2y$10$ahyrARRAP3FQk1a4d/zREeY/gJY0sazOdHBXoAcJUeYZuKi0midVi
        // $this->call(UsersTableSeeder::class);
        $this->call([RoleSeeder::class, PermissionSeeder::class]);
        $user = User::find(1);
        if($user) {
            $user->assignRole('admin');
        }
        $user = User::create([
            'first_name' => 'client',
            'email' => 'client@gmail.com',
            "password" => bcrypt("password"),
        ]);
        $user->assignRole('user');
        $user = User::create([
            'first_name' => 'manager',
            'email' => 'manager@gmail.com',
            "password" => bcrypt("password"),
        ]);
        $user->assignRole('manager');
//        \App\Bot::truncate();
//
//
//        \App\Bot::create([
//            'bot_url' => "travel_clubbot",
//            'token_prod' => "1262415897:AAE35n6senRfTVevyyuQ6eArLEyeyzquR3c",
//            'token_dev' => "1262415897:AAE35n6senRfTVevyyuQ6eArLEyeyzquR3c",
//            'description' => "Бот TravelClub",
//            'bot_pic' => "",
//            'is_active' => true,
//            'money' => 310,
//            'money_per_day' => 10,
//        ]);
//
//        Promocode::truncate();
//
//        Promocode::create([
//            "code" => "#алешалюбава2021",
//            "password" => bcrypt("password"),
//            "self_percent" => 4,
//            "cashback_percent" => 4,
//            "buyer_percent" => 2,
//            "self_description" => "Блогеры Алеша и Любава"
//        ]);
    }
}
