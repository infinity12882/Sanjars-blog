import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Keep vendor chunks separate from app code for better long-term caching —
    // these libraries change far less often than the app's own pages/content.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("i18next")) return "vendor-i18n";
            if (id.includes("react-router") || id.includes("/react/") || id.includes("/react-dom/")) {
              return "vendor-react";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
