const common = require('./webpack/webpack.common')
const production = require('./webpack/webpack.prod')
const development = require('./webpack/webpack.dev')

const { merge } = require('webpack-merge')

const mode = process.env.NODE_ENV !== 'production' ? development : production

module.exports = merge(common({ dirName: __dirname }), mode)
