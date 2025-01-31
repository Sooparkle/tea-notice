import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev'

const initDevPlatform = async () => {
  if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform()
  }
}

// Execute the initialization
initDevPlatform().catch(console.error)

/** @type {import('next').NextConfig} */ 
const nextConfig = {}

export default nextConfig