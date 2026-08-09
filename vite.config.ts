import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel serves at the root; GitHub Pages project site serves under /vayro-studio/.
  // Vercel injects the VERCEL env var during its builds, so the base adapts per host.
  base: process.env.VERCEL ? '/' : '/vayro-studio/',
})
