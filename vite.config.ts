import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, './src/index.ts'),
      name: 'vite-library-poc',
      // the proper extensions will be added
      fileName: (format) => (format === "umd" ? "index.umd.js" : "index.es.js"),
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
          "react-dom": "ReactDOM"
        },
      },
    },
  },
  plugins: [
    react(),
    dts()
  ],
})
