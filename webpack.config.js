const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: {
        'main': './src/js/index.js',
        'assets/js/banner': './src/assets/js/banner.js',
        'assets/js/tabs': './src/assets/js/tabs.js',
        'assets/js/upload': './src/assets/js/upload.js',
        'assets/js/chart': './src/assets/js/chart.js',
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
            chunks: ['main', 'assets/js/banner', 'assets/js/chart', 'assets/js/tabs']
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

        new HtmlWebpackPlugin({
            template: './src/components/upload.html',
            filename: 'components/upload.html',
            chunks: ['main', 'assets/js/upload']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/help.html',
            filename: 'components/help.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/summary.html',
            filename: 'components/summary.html',
            chunks: ['main']
        }),
        
        new HtmlWebpackPlugin({
            template: './src/components/actions.html',
            filename: 'components/actions.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/sidebar.html',
            filename: 'components/sidebar.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/table.html',
            filename: 'components/table.html',
            chunks: ['main']
        }),

        new HtmlWebpackPlugin({
            template: './src/components/chart.html',
            filename: 'components/chart.html',
            chunks: ['main', 'assets/js/chart']
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/sidebar.html'),
            location: 'sidebar',
            template_filename: ['index.html']
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/actions.html'),
            location: 'actions',
            template_filename: ['index.html']
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/banner.html'),
            location: 'banner',
            template_filename: ['index.html']
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/chart.html'),
            location: 'chart',
            template_filename: ['index.html']
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/tabs.html'),
            location: 'tabs',
            template_filename: ['index.html']
        }),

        new HtmlWebpackPartialsPlugin({
            path: path.join(__dirname, './src/components/help.html'),
            location: 'help',
            template_filename: ['index.html']
        }),


        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),

        new MiniCssExtractPlugin({
            filename: 'assets/css/styles.css'
        }),

        new OptimizeCssAssetsPlugin({})
    ],
};