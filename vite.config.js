import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      include: [/node_modules/], // Ensures CommonJS modules like `pdf.worker.entry` are included
    },
  },
  optimizeDeps: {
    include: ["pdfjs-dist/build/pdf.worker.entry"],
  },
})
