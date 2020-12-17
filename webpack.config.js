const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, '/dist' ),
        filename: 'main.js'
    },
    devServer: {
        historyApiFallback: true,
        publicPath: 'http://localhost:8080/dist/'
     },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin()
    ]
};