import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import visualizer from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
    visualizer()
  ],
})
