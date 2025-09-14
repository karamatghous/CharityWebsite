import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: If deploying to GitHub Pages at https://<user>.github.io/<repo>/
// set base to '/<repo>/' below. For localhost, '' is fine.
export default defineConfig({
  plugins: [react()],
  base: '' // change to '/chakswari-hospital/' for GitHub Pages
})
