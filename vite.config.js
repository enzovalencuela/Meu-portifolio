import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import fs from "fs";
import path from "path";

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
    // Copia favicon.ico para a raiz do dist para que Google busque em /favicon.ico
    {
      name: "copy-favicon-root",
      closeBundle() {
        try {
          const src = path.resolve(process.cwd(), "favicon.ico");
          const destDir = path.resolve(process.cwd(), "dist");
          const dest = path.join(destDir, "favicon.ico");
          if (fs.existsSync(src) && fs.existsSync(destDir)) {
            fs.copyFileSync(src, dest);
            console.log("Copied favicon.ico to dist root for SEO");
          }
        } catch (err) {
          console.warn("Failed to copy favicon.ico:", err?.message || err);
        }
      },
    },
    {
      name: "strip-prerender-assets-from-html",
      closeBundle() {
        try {
          const distDir = path.resolve(process.cwd(), "dist");
          if (!fs.existsSync(distDir)) return;

          const walk = (dir) => {
            const entries = fs.readdirSync(dir, { withFileTypes: true });
            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                walk(fullPath);
                continue;
              }
              if (!entry.name.endsWith(".html")) continue;

              const html = fs.readFileSync(fullPath, "utf-8");
              const sanitized = html
                .replace(/\n?\s*<link rel="modulepreload" crossorigin href="\/assets\/prerender-[^"]+"><\/link>?/g, "")
                .replace(/\n?\s*<link rel="modulepreload" crossorigin href="\/assets\/prerender-[^"]+">/g, "")
                .replace(/\n?\s*<link rel="stylesheet" crossorigin href="\/assets\/prerender-[^"]+">/g, "");

              if (sanitized !== html) {
                fs.writeFileSync(fullPath, sanitized, "utf-8");
              }
            }
          };

          walk(distDir);
          console.log("Removed prerender asset tags from built HTML.");
        } catch (err) {
          console.warn("Failed to strip prerender assets:", err?.message || err);
        }
      },
    },
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
