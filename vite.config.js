import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'karthik' with your repo name
export default defineConfig({
  base: '/karthik/',    
  plugins: [react()],
})
