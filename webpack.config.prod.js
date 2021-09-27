const path = require('path');
const CleanWebpack = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.ts',
	mode: 'production',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	resolve: { extensions: ['.ts', '.js'] },
	plugins: [new CleanWebpack.CleanWebpackPlugin()]
};
