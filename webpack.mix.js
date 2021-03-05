const mix = require('laravel-mix');

const CompressionPlugin = require('compression-webpack-plugin');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (mix.inProduction()) {


    mix.webpackConfig({
        plugins: [
            new CompressionPlugin({
                filename: '[path].br[query]',
                algorithm: 'brotliCompress',
                test: /\.(js|css|html|svg)$/,
                compressionOptions: {level: 11},
                minRatio: 1,
                deleteOriginalAssets: false,
            })
        ],
    });
}

mix.disableNotifications();

mix.copy('resources/assets/js/lib/jquery-3.4.1.min.js', 'public/js');
mix.copy("resources/assets/css/theme.css", "public/css");
mix.copyDirectory('resources/assets/img', 'public/img');
mix.copyDirectory('resources/assets/css/inc', 'public/css/inc');

if (!mix.inProduction()) {
    mix.js('resources/js/app.js', 'public/js')
        .js('resources/assets/js/app.js', 'public/js/assets')
        .sass('resources/sass/app.scss', 'public/css')
        .options({
            processCssUrls: false
        })

    mix.copy('resources/assets/css/style.css', 'public/css/assets/app.css');
}

if (mix.inProduction()) {

    mix.js('resources/js/app.js', 'public/js')
        .js('resources/assets/js/app.js', 'public/js/assets')
        .sass('resources/sass/app.scss', 'public/css')
        .combine([
            'resources/assets/css/style.css',
            'public/css/app.css'
        ], 'public/css/app.css');

    mix.minify('public/js/app.js')
    mix.minify('public/css/app.css')
    mix.minify('public/css/theme.css')
    mix.minify('public/css/assets/app.css')


}

mix.version();
