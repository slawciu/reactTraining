 
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: ['./src/index.js'],
        vendor: ['react', 'react-dom']
    },

    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].js',
        publicPath: '/public/js'
    },

    module: {
        loaders: [{
            test: [/\.js$/],
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'src/')
            ]
        },
        {
            test: /\.less$/,
            loaders: [
                'style-loader',
                {
                    loader: 'css-loader', options: { importLoaders: 1 }
                },
                'less-loader'
            ]
        },
        {
            test: /\.(jpg|png)$/,
            loader: 'url-loader',
            options: {
                limit: 25000
            }
        }]
    },

    resolve: {
        extensions: ['.js']
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ],

    devtool: 'source-map'
};