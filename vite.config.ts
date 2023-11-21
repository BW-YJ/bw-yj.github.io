import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  base: "/wedding-invitaion",
  build: {
    assetsDir: ".",
    rollupOptions: {
      input: "./index.html",
      output: {
        dir: "docs",
      },
    },
  },
  resolve: {

    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

})
