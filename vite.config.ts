import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' permite publicar a pasta dist em qualquer lugar (Netlify, Vercel, GitHub Pages…)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
