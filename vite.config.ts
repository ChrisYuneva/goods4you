import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';

export default defineConfig({
    base: '/goods4you/',
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/'),
            '@app': path.resolve(__dirname, './src/app/'),
            '@components': path.resolve(__dirname, './src/components/'),
            '@pages': path.resolve(__dirname, './src/pages/'),
            '@assets': path.resolve(__dirname, './src/assets/'),
        }
    },
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        }
    }
});
