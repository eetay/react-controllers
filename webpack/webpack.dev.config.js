var webpack = require('webpack')
var path = require('path')
var parentDir = path.join(__dirname, '..')

module.exports = {
  mode:'development',
	entry: [
		path.join(__dirname, '../index.js')
	],
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.(scss|css)$/,
        include: [ path.join(__dirname, '..') ],
				loaders: ['style-loader', 'css-loader?modules=true&camelCase=true']
			}
		]
	},
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  watch: true,
  devServer: {
    https: false,
    contentBase: parentDir,
    host: '127.0.0.1',
    port: 8080
  }
}
