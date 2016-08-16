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
            { 
                test: /\.css$/, loader: "style-loader!css-loader" 
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }/*,
    devServer: {
        historyApiFallback: true
    }*/
};