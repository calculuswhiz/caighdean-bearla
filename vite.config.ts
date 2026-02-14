import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

const chapterBaseNames = [
  "preface",
  "advisoryCommittee",
  "prefaceOfFirstEdition",
  "grammarNotes",
  "chapter1",
  "chapter2",
  "chapter3",
  "chapter4",
  "chapter5",
  "chapter6",
  "chapter7",
  "chapter8",
  "chapter9",
  "chapter10",
  "chapter11",
  "tableOfOptions",
  "bookIndex"
];

const languageEntryPointMaps: Record<string, string>[] = [];

for (const language of ["en", "ga"]) {
  const entryPoints: Record<string, string> = {};

  for (const chapter of chapterBaseNames)
    entryPoints[chapter + "_" + language] = `entrypoints/${language}/${chapter}.html`;

  entryPoints["main_" + language] = `entrypoints/${language}/index.html`;

  languageEntryPointMaps.push(entryPoints);
}

const entryPoints: Record<string, string> = {};
for (const map of languageEntryPointMaps) {
  for (const [key, value] of Object.entries(map))
    entryPoints[key] = resolve(__dirname, value);
}

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

        ...entryPoints
      }
    }
  }
})
