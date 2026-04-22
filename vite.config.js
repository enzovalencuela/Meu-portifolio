import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: "/src/prerender.jsx",
      additionalPrerenderRoutes: ["/"],
    }),
    {
      name: "force-close",
      closeBundle() {
        console.log("Forcing process exit after closeBundle...");
        setTimeout(() => process.exit(0), 1000);
      }
    }
  ],
  build: {
    sourcemap: false,
  }
});
