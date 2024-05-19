import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/js/app.js'],

            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            /* '@': resolve(__dirname, 'resources/js'), */
            'vue': 'vue/dist/vue.esm-bundler.js',
        }
    },
    server: {
        hmr: {
            host: 'localhost',
        },
    },
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
});
