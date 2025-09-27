import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import config from "./vite.config";
export default defineConfig({
  main: {
    build: {
      lib: {
        entry: "electron/main/index.ts",
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    build: {
      lib: {
        entry: "electron/preload/index.ts",
      },
    },
    plugins: [externalizeDepsPlugin()],
  },
  renderer: config,
});
