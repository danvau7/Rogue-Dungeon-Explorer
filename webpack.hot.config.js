var path = require('path');
var webpack = require('webpack');

module.exports = {
	
	entry: [
		'./src/index.js'
	],
	
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-1', 'react-hmre']
				}
			},
			
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'resolve-url', 'sass']
			},
			
			{
				test: /\.woff$/,
				loader: 'url?limit=65000&mimetype=application/font-woff'
			},
			
			{ test: /\.[ot]tf$/,
				loader: 'url?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
			}],
	},
	
	resolve: {
		extensions: ['', '.js', '.jsx','.scss', '.css', 'woff', 'tff']
	},
	
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
	
	
};