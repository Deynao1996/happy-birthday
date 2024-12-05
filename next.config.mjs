import withVideos from 'next-videos'

/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    TIME_LEFT: process.env.TIME_LEFT,
    COUNTER_INTERVAL: process.env.COUNTER_INTERVAL
  }
}

export default withVideos(nextConfig)
