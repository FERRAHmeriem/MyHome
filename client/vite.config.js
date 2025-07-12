import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: '0.0.0.0',
    port: process.env.PORT || 5173, 
    proxy:{
      '/api':{
        target:'https://myhome-backend-anuw.onrender.com',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
