/** @type {import('next').NextConfig} */

const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          { from: "node_modules/@yourwishes/emu-app-cores/build", to: path.resolve(__dirname, "public", "cores") },
        ],
      }),
    );
    return config;
  }
};

module.exports = nextConfig
