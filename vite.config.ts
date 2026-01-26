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

        // TODO If more languages are added, need to generalize this
        preface: resolve(__dirname, 'entrypoints/preface-en.html'),
        advisoryCommittee: resolve(__dirname, 'entrypoints/advisoryCommittee-en.html'),
        prefaceOfFirstEdition: resolve(__dirname, 'entrypoints/prefaceOfFirstEdition-en.html'),
        grammarNotes: resolve(__dirname, 'entrypoints/grammarNotes-en.html'),
        chapter1: resolve(__dirname, 'entrypoints/chapter1-en.html'),
        chapter2: resolve(__dirname, 'entrypoints/chapter2-en.html'),
        chapter3: resolve(__dirname, 'entrypoints/chapter3-en.html'),
        chapter4: resolve(__dirname, 'entrypoints/chapter4-en.html'),
        chapter5: resolve(__dirname, 'entrypoints/chapter5-en.html'),
        chapter6: resolve(__dirname, 'entrypoints/chapter6-en.html'),
        chapter7: resolve(__dirname, 'entrypoints/chapter7-en.html'),
        chapter8: resolve(__dirname, 'entrypoints/chapter8-en.html'),
        chapter9: resolve(__dirname, 'entrypoints/chapter9-en.html'),
        chapter10: resolve(__dirname, 'entrypoints/chapter10-en.html'),
        chapter11: resolve(__dirname, 'entrypoints/chapter11-en.html'),
        tableOfOptions: resolve(__dirname, 'entrypoints/tableOfOptions-en.html'),
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
        tableOfOptionsGa: resolve(__dirname, 'entrypoints/tableOfOptions-ga.html'),
      }
    }
  }
})
