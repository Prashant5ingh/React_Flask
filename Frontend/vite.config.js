import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target:'http://localhost:5500',
        changeOrigin: true,
        secure: false, // Not using https in local server,
       // rewrite: (path) => path.replace(/^\/api/, '/api') // keep /api prefix
      },
      // And now it makes server to believe that vite app is also running on same server and request for api calls coming from 3000 (Just like home entry). Means we don't have to handle cors error for the same localhost port number.
    }
  },
  plugins: [react()],
})
