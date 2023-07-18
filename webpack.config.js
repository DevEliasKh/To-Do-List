const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	performance: {
		maxAssetSize: 100000,
		maxEntrypointSize: 400000,
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};
