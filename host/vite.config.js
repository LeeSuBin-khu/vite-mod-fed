import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// host
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host-app",
      filename: "remoteEntry.js",
      remotes: {
        remoteApp: "http://localhost:5001/dist/assets/remoteEntry.js"
      },
      exposes: {
        "./AuthProvider": "./src/contexts/AuthProvider",
      },
      shared: ["react", "react-dom", "recoil"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
