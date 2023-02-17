const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	devServer: {
		static: './dist',
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Custom template',
			favicon: './src/water-solid.svg',
			template: './src/index.html',
		}),
	],
};
