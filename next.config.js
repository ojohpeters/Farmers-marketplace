/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'images.unsplash.com', 
      'plus.unsplash.com',
      'unsplash.com',
      'via.placeholder.com',
      'www.istockphoto.com',
      'media.istockphoto.com',
      'i.ibb.co',
      'picsum.photos',
      'source.unsplash.com'
    ],
  },
}

module.exports = nextConfig
