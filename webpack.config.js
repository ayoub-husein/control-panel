const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');

module.exports = {
    entry: {
        'main': './src/js/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
        'assets/js/tabs': './src/assets/js/tabs.js',
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
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
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
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
        

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                exclude: /fonts/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "assets/images",
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
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/button.html',
            filename: 'components/button.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/textfield.html',
            filename: 'components/textfield.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/card.html',
            filename: 'components/card.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/banner.html',
            filename: 'components/banner.html',
            chunks: ['main','assets/js/banner']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/list.html',
            filename: 'components/list.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/tabs.html',
            filename: 'components/tabs.html',
            chunks: ['main','assets/js/tabs']
        }),

        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.css'
        }),

        new OptimizeCssAssetsPlugin({})
    ],
};