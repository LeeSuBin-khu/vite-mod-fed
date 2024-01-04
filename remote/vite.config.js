import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// remote
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp: "http://localhost:5000/dist/assets/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/components/Button",
        "./store/countStore": "./src/store/countStore",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
