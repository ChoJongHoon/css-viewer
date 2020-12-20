const path = require('path')
const paths = require('./paths')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	entry: {
		background: path.join(paths.appSrc, 'background.ts'),
	},
	output: {
		path: paths.appBuild,
		filename: 'js/[name].js',
	},
	optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: 'initial',
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: '.', to: paths.appBuild, context: 'public' }],
			options: {},
		}),
	],
}
