import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // dev = '/'  |  GitHub Pages build = '/modflixFrontend/'
  base: process.env.VITE_BASE_URL ?? '/',
})
