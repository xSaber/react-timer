const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Serves main template to webpack
 */
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: 'body'
});

/**
 * Takes all inline style imports to the separate css file.
 * Should be used (only) in production as it prevents module hot loading
 */
const ExtractTextPluginConfig = new ExtractTextPlugin({
    filename: 'styles.css',
    disable: !isProduction
});

/**
 * Takes care of css minifications when css extracted as separe file
 * In other words - minifies css if on prod
 */
const OptimizeCssAssetsPluginConfig = new OptimizeCssAssetsPlugin();

var devtool = isProduction ? 'source-map' : 'eval-source-map';

module.exports = {
    devtool: devtool,
    entry: './app',
    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {
            Assets: path.resolve('public/assets')
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPluginConfig.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPluginConfig.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        // Allows to use BrowserRouter, without /#/
        historyApiFallback: true
    },
    plugins: [
        HtmlWebpackPluginConfig,
        ExtractTextPluginConfig,
        OptimizeCssAssetsPluginConfig
    ]
}
