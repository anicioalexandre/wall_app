module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    colors: true,
    preset: 'minimal'
  },
  devServer: {
    contentBase: './dist',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
    host: '0.0.0.0',
    port: 3030,
  },
}
