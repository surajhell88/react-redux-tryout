var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "app-bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
    ],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};