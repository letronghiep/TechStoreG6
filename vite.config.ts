import  path  from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change port to 3000
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "components": `${path.resolve(__dirname, "./src/components/")}`,
      "pages": `${path.resolve(__dirname, "./src/pages/")}`,
    },
  },
});
