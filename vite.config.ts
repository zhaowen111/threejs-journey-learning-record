import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const isCodeSandbox =
  "SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: "src/",
  publicDir: "static/",
  base: "./",
  server: {
    host: true,
    open: !isCodeSandbox, // Open if it's not a CodeSandbox
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
