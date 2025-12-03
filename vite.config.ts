import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import {ghPages} from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/02-react-cafe/",
  plugins: [react(), ghPages()],
  build: {
    sourcemap: true,
  },
});
