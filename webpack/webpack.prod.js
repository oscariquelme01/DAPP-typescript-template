const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { InjectManifest } = require('workbox-webpack-plugin')
// const WebpackObfuscator = require('webpack-obfuscator')

const prod = {
  mode: 'production',
  stats: 'errors-warnings',
  output: {
    filename: '[name].[contenthash].bundle.js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  plugins: [
    new InjectManifest({
      swSrc: path.resolve(__dirname, '../pwa/sw.js'),
      swDest: 'sw.js'
    })
  ]
}

module.exports = merge(common, prod)
