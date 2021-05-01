const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');

module.exports = {
    entry: {
        'main': './src/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/main.js',
        publicPath: '/',
    },

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        // compress: true,
        port: 8080,
        writeToDisk: true
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },

            {
                test: /\.(sass|css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "postcss-loader",
                    "sass-loader"
                    ],
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                use: [
                {
                    loader: "file-loader", 
                    options: {
                    name: '[name].[ext]',
                    outputPath: "assets/fonts",
                    }
                }
                ]
            },
        ],
    },

    plugins: [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.css'
        }),

        new OptimizeCssAssetsPlugin({})
    ],
};