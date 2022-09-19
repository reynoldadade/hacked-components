import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "HackedComponents",
      fileName: (format) => `hacked-components.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize dependencies that shouldnt be bundled into your library
      external: ["vue"],
      output: {
        //provide global variables to use in the UMD build for externalized builds
        globals: {
          vue: "Vue",
        },
      },
    },
    target: "esnext",
    sourcemap: true,
  },
});
