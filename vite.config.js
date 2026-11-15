import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // This is a project site, served at https://vegardbrobakken.github.io/portfolio/.
  base: "/portfolio/",
  plugins: [react()],
})
