import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,

    // Forward frontend API requests to the Express server.
    proxy: {
      "/api": "http://127.0.0.1:3001"
    }
  },

  build: {
    outDir: "dist"
  }
});