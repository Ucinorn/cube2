import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cube2/', // Change this to your repository name for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
