const mix = require('laravel-mix');
const path = require('path');


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
    const CompressionPlugin = require('compression-webpack-plugin');

    mix.webpackConfig({
        plugins: [
            new CompressionPlugin({
                filename: '[file].br[query]',
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


mix.webpackConfig({
    // output: {
    //     chunkFilename: 'js/chunks/[name].js?id=[chunkhash]',
    //     publicPath: '/',
    // },
    // output: {
    //     path: '/dist',
    //     filename: '[name].js',
    //     chunkFilename: 'js/[id].[chunkhash].js',
    //     publicPath: 'http://test-task/',
    // },
    // module: {
    //     exprContextCritical: false
    // },
    resolve: {
        extensions: ['.*', '.js', '.vue', '.jpg', '.png', '.css', '.svg', '.mp3', '.scss'],
        alias: {
            '@': __dirname + '/resources',
            '@icon': path.resolve(__dirname, 'resources/js/desktop/components/Icons'),
            '@public': path.resolve(__dirname, 'public/images'),
            // '^':__dirname + '/storage/app/public'
        }
    }
});

mix.js('resources/js/desktop/app.js', 'public/js/desktop')
    .vue()
    .sass("resources/sass/desktop/app.scss", "public/css/desktop").options({
    processCssUrls: false,
    postCss: [
        require('autoprefixer')({
            // browserslist: ['defaults'],
        })
    ]
})
    .sourceMaps().minify(['public/css/desktop/app.css', 'public/js/desktop/app.js']).version();

// mix
//     .js('resources/js/desktop/app.js', 'public/js/desktop').vue()
//     .sass('resources/sass/desktop/app.scss', 'public/css/desktop/app.css')
//     .options({
//         processCssUrls: false
//     });
//
// mix
//     .js('resources/js/pwa/app.js', 'public/js/pwa').vue()
//     .sass('resources/sass/pwa/app.scss', 'public/css/pwa/app.css').version();
//
// mix
//     .js('resources/js/admin/app.js', 'public/js/admin').vue()
//     .sass('resources/sass/admin/app.scss', 'public/css/admin/app.css');
//

/*mix
    .sass('resources/sass/desktop/black-them.scss', 'public/css/black-them.css');*/


// mix.copy('resources/assets/css/style.css', 'public/css/assets/app.css');


// mix.copy('resources/assets/js/lib/jquery-3.4.1.min.js', 'public/js/pwa');
// mix.copy("resources/assets/css/theme.css", "public/css/pwa");

// mix.copy("resources/assets/css/tour-search.css", "public/css/pwa");

mix.copyDirectory('resources/assets/img', 'public/img');
// mix.copyDirectory('resources/assets/css/inc', 'public/css/inc');

// if (mix.inProduction()) {
//
//     // mix.minify('public/js/pwa/app.js');
//     // mix.minify('public/css/pwa/app.css');
//     // mix.minify('public/css/pwa/theme.css');
//     // mix.minify('public/css/assets/app.css');
//
//     mix.minify('public/js/desktop/app.js');
//     mix.minify('public/css/desktop/app.css');
//     //
//     // mix.minify('public/js/admin/app.js');
//     // mix.minify('public/css/admin/app.css');
// }
//
// mix.version();
