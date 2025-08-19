import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.adoc'],
  build: {
    // GH stupidly doesn't let you change this, so I guess we just go with this...
    outDir: "docs"
  }
})
