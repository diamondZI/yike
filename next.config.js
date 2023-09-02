/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: 'photo-1524088484081-4ca7e08e3e19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      },
    ]
  }
}

module.exports = nextConfig
