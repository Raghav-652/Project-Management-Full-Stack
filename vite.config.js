// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss()],
  
//   server :{
//     port: 5173,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8800',
//         changeOrigin: true,
//           secure: false,
            
//       }
//     }

//   },
  
// });
















import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import process from 'process';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  define: {
    'process.env': {}, // Define process.env if needed
    'process': process
  },

  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8800',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  optimizeDeps: {
    exclude: ['express', 'send', 'mime']
  }



});
