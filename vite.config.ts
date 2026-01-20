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
        chapter11: resolve(__dirname, 'entrypoints/chapter11.html'),
        // Irish ones
        prefaceGa: resolve(__dirname, 'entrypoints/preface-ga.html'),
        advisoryCommitteeGa: resolve(__dirname, 'entrypoints/advisoryCommittee-ga.html'),
        prefaceOfFirstEditionGa: resolve(__dirname, 'entrypoints/prefaceOfFirstEdition-ga.html'),
        grammarNotesGa: resolve(__dirname, 'entrypoints/grammarNotes-ga.html'),
        chapter1Ga: resolve(__dirname, 'entrypoints/chapter1-ga.html'),
        chapter2Ga: resolve(__dirname, 'entrypoints/chapter2-ga.html'),
        chapter3Ga: resolve(__dirname, 'entrypoints/chapter3-ga.html'),
        chapter4Ga: resolve(__dirname, 'entrypoints/chapter4-ga.html'),
        chapter5Ga: resolve(__dirname, 'entrypoints/chapter5-ga.html'),
        chapter6Ga: resolve(__dirname, 'entrypoints/chapter6-ga.html'),
        chapter7Ga: resolve(__dirname, 'entrypoints/chapter7-ga.html'),
        chapter8Ga: resolve(__dirname, 'entrypoints/chapter8-ga.html'),
        chapter9Ga: resolve(__dirname, 'entrypoints/chapter9-ga.html'),
        chapter10Ga: resolve(__dirname, 'entrypoints/chapter10-ga.html'),
        chapter11Ga: resolve(__dirname, 'entrypoints/chapter11-ga.html'),
      }
    }
  }
})
