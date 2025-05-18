/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
        prependData: `@import "../src/assets/styles/_globals.scss";`
    },
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': './src'
        }
        return config
    }
}

module.exports = nextConfig 