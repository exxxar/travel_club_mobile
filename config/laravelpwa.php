<?php

return [
    'name' => 'TravelClub',
    'manifest' => [
        'name' => env('APP_NAME', 'TravelClub'),
        'short_name' => 'TravelClub',
        'start_url' => 'https://travel-club.tours/m',
        'background_color' => '#ffffff',
        'theme_color' => '#000000',
        'display' => 'standalone',
        'orientation'=> 'portrait',
        'status_bar'=> 'black',
        'icons' => [
            '72x72' => [
                'path' => '/img/icons/icon-72x72.png',
                'purpose' => 'any maskable'
            ],
            '96x96' => [
                'path' => '/img/icons/icon-96x96.png',
                'purpose' => 'any maskable'
            ],
            '128x128' => [
                'path' => '/img/icons/icon-128x128.png',
                'purpose' => 'any maskable'
            ],
            '144x144' => [
                'path' => '/img/icons/icon-144x144.png',
                'purpose' => 'any maskable'
            ],
            '152x152' => [
                'path' => '/img/icons/icon-152x152.png',
                'purpose' => 'any maskable'
            ],
            '192x192' => [
                'path' => '/img/icons/icon-192x192.png',
                'purpose' => 'any maskable'
            ],
            '384x384' => [
                'path' => '/img/icons/icon-384x384.png',
                'purpose' => 'any maskable'
            ],
            '512x512' => [
                'path' => '/img/icons/icon-512x512.png',
                'purpose' => 'any maskable'
            ],
        ],
        'splash' => [
            '640x1136' => '/img/icons/splash-640x1136.png',
            '750x1334' => '/img/icons/splash-750x1334.png',
            '828x1792' => '/img/icons/splash-828x1792.png',
            '1125x2436' => '/img/icons/splash-1125x2436.png',
            '1242x2208' => '/img/icons/splash-1242x2208.png',
            '1242x2688' => '/img/icons/splash-1242x2688.png',
            '1536x2048' => '/img/icons/splash-1536x2048.png',
            '1668x2224' => '/img/icons/splash-1668x2224.png',
            '1668x2388' => '/img/icons/splash-1668x2388.png',
            '2048x2732' => '/img/icons/splash-2048x2732.png',
        ],
        'shortcuts' => [
            [
                'name' => 'Travel Club',
                'description' => 'Туристический сайт Travel Club Family',
                'url' => '/m/',
                'icons' => [
                    "src" => "/img/icons/icon-96x96.png",
                    "purpose" => "any maskable"
                ]
            ],

        ],
        'custom' => []
    ]
];
