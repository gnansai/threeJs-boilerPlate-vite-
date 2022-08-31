import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  base: "/threeJs-boilerPlate-vite/",
  server: { https: true },
  plugins: [mkcert()],
});
