import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

    // GLSL shader import support
    glsl({
      include: [
        "**/*.glsl",
        "**/*.frag",
        "**/*.vert",
        "**/*.vs",
        "**/*.fs",
      ],
      defaultExtension: "glsl",
    }),
  ],

  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@3d": "/src/components/3d",
      "@lib": "/src/lib",
    },
  },

  // Allow GLB/GLTF/HDR imports
  assetsInclude: [
    "**/*.gltf",
    "**/*.glb",
    "**/*.obj",
    "**/*.fbx",
    "**/*.hdr",
    "**/*.exr",
  ],

  server: {
    port: 5173,
    open: true,
  },

  build: {
    chunkSizeWarningLimit: 1600,
    assetsInlineLimit: 0,
  },
});
