var Webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	cache: true,
	devtool: 'source-map',
	entry: [
		'./index.js',
		'./node_modules/normalize-css/normalize.css',
		'./src/style/ux.less',
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['src', 'node_modules'],
		root: [
			path.resolve('./src'),
		],
		alias: {
			cart: path.resolve('./src'),
		},
	},
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.(css|less)$/, loader: 'style!css!less' },
		],
	},

	plugins: [
		new Webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en)$/),
		new HtmlWebpackPlugin({
			xhtml: true,
			template: './index.html',
		}),
	],
	output: {
		path: 'build/',
		publicPath: '/',
		filename: '[name]-[hash].js',
	},
	devServer: {
		inline: true,
		stats: {
			colors: true,
		},
		contentBase: './assets',
		historyApiFallback: true,
	},
};
