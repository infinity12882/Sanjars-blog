import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html not found. Run the Vite build first.");
}

fs.copyFileSync(indexPath, fallbackPath);

console.log("Generated dist/404.html for SPA fallback.");
