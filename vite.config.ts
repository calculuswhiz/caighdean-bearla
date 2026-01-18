import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.adoc'],
  build: {
    // GH stupidly doesn't let you change this, so I guess we just go with this...
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        preface: resolve(__dirname, 'entrypoints/preface.html'),
        advisoryCommittee: resolve(__dirname, 'entrypoints/advisoryCommittee.html'),
        prefaceOfFirstEdition: resolve(__dirname, 'entrypoints/prefaceOfFirstEdition.html'),
        grammarNotes: resolve(__dirname, 'entrypoints/grammarNotes.html'),
        chapter1: resolve(__dirname, 'entrypoints/chapter1.html'),
        chapter2: resolve(__dirname, 'entrypoints/chapter2.html'),
        chapter3: resolve(__dirname, 'entrypoints/chapter3.html'),
        chapter4: resolve(__dirname, 'entrypoints/chapter4.html'),
        chapter5: resolve(__dirname, 'entrypoints/chapter5.html'),
        chapter6: resolve(__dirname, 'entrypoints/chapter6.html'),
        chapter7: resolve(__dirname, 'entrypoints/chapter7.html'),
        chapter8: resolve(__dirname, 'entrypoints/chapter8.html'),
        chapter9: resolve(__dirname, 'entrypoints/chapter9.html'),
        chapter10: resolve(__dirname, 'entrypoints/chapter10.html'),
        chapter11: resolve(__dirname, 'entrypoints/chapter11.html')
      }
    }
  }
})
