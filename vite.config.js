import { defineConfig } from 'vite'
import { resolve, basename } from 'path'
import autoprefixer from 'autoprefixer'

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer,
            ],
        }
    },
    resolve: {
        alias:{
          '@' : resolve(__dirname, './src')
        },
    },
    build: {
        manifest: true,
        emptyOutDir: true,
        outDir: resolve(__dirname, 'build'),
        assetsDir: 'assets',
    },
    server: {
        port: 3000,
        host: '127.0.0.1',
        hmr: true,
    },
})