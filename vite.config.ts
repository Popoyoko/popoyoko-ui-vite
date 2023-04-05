import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";//SWC (Speedy WebAssembly Compiler)
import copy from "rollup-plugin-copy";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    
    // ajoutez le plugin copy et configurez-le pour copier le fichier package.json
    copy({
      targets: [{ src: "package.json", dest: "library" },{ src: 'src/components/**/*', dest: 'library' }],
      flatten: false,
      // verbose: true, voir toit les fichier traités oar fast-glob dans la console
      hook: "writeBundle" // exécutez la copie après la génération des fichiers
    }),
    dts(),
  ],
  
  build: {
    outDir: "library",
    sourcemap: true,
    //vider le répertoire de sortie avant de générer
    emptyOutDir: true,
    rollupOptions: {
      input: "./src/components/index.ts",
      output: {
        // nom des fichiers générés pour les points d'entrée
        entryFileNames: "[name].js",
        // nom des fichiers générés pour les "chunks"
        chunkFileNames: "[name].js",
        //nom des fichiers générés pour les fichiers statiques 
        assetFileNames: "[name].[ext]",
      }
    },
    lib: {
      entry: "./src/components/index.ts",
      name: "popoyoko-ui-vite",
      formats: ["es"]
    }
  },
});
