import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://moura5412.github.io/',
  build: {
    outDir: 'dist',
    assetsDir: ''
  }
});
