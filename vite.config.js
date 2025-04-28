import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Nouveaux paramètres critiques
  base: './', // Chemin relatif pour les assets
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: './' // Assets dans la racine de dist/
  },
  preview: {
    port: process.env.PORT || 4173 // Port compatible Render
  }
})