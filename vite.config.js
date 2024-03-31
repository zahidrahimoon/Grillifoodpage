import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify your build output directory
    assetsDir: 'assets', // Specify your assets directory
  },
  base: './', // Specify the base URL for your application
  // Customize the HTML template
  html: {
    favicon: '/public/vite.svg', // Path to your favicon file
    title: 'Grilli', // Set the title of your HTML document
  },
});
