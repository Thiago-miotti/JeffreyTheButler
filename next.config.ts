import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  async redirects() { //Redirects to login page always
    return [
      {
        source: '/',
        destination: '/login',
        permanent: false, 
      },
    ]
  },
};


export default nextConfig;
