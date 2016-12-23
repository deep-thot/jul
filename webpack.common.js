var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'app': './app/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    output: {
        path: './dist',
        publicPath: 'http://localhost:8080/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'raw'
            }

        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};