const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = ({ dirName }) => ({
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  optimization: {
    splitChunks: { chunks: 'all' }
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: { main: path.resolve(dirName, 'src', 'index.tsx') },
  output: {
    filename: '[name].js',
    path: path.resolve(dirName, 'dist'),
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(dirName, 'src', 'index.html')
    }),
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx']
    })
  ],
  resolve: {
    alias: {
      '@src': path.resolve(dirName, 'src/'),
      '@components': path.resolve(dirName, 'src/components'),
      '@services': path.resolve(dirName, 'src/services'),
      '@hooks': path.resolve(dirName, 'src/hooks'),
      '@utils': path.resolve(dirName, 'src/utils'),
      '@redux': path.resolve(dirName, 'src/redux'),
      '@jest': path.resolve(dirName, 'jest')
    },
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false,
      path: false
    }
  }
})
