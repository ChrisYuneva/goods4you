import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    base: '/goods4you/',
    plugins: [react()],
    css: {
        postcss: {
            plugins: [
                autoprefixer({})
            ],
        }
    }
});
