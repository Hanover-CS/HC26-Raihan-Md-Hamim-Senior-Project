import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/fmp": {
        target: "https://financialmodelingprep.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/fmp/, ""),
      },
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
