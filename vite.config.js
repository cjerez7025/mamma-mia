import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: nombre exacto de tu repositorio en GitHub
export default defineConfig({
  plugins: [react()],
  base: '/mamma-mia/',
})
