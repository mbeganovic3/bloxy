const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname),
    optimization: {
        minimizer: [
            new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: false })
        ]
    },
    entry: "./src/bloxy.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
