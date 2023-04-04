import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";//SWC (Speedy WebAssembly Compiler)
import copy from "rollup-plugin-copy";
import eslint from '@rollup/plugin-eslint';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    eslint({
      include: ['src/**/*.ts', 'src/**/*.tsx'], // Les fichiers à linter
      exclude: ['node_modules/**', 'dist/**'] // Les fichiers à exclure
    }),
    // ajoutez le plugin copy et configurez-le pour copier le fichier package.json
    copy({
      targets: [{ src: "package.json", dest: "dist" },{ src: 'src/components/**/*', dest: 'dist/' }],
      flatten: false,
      // verbose: true, voir toit les fichier traités oar fast-glob dans la console
      hook: "writeBundle" // exécutez la copie après la génération des fichiers
    })
  ],
  
  build: {
    outDir: "dist",
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
  },
});
