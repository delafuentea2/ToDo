import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
<<<<<<< HEAD
                'resources/sass/app.scss',
=======
                'resources/css/app.css',
>>>>>>> b1fd7e8cf6e91f81560ab987bcccfc5a1e03e895
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
