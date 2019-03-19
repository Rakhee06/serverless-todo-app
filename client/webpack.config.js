const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        inline: true,
        hot: true
    },

    entry: {
        app: './src/index.js',
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/'),
    },

    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            path: path.resolve(__dirname, 'src/public/index.html'),
            filename: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};