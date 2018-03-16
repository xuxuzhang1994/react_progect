const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

commonConfig = {
    optimization: {
        splitChunks: {
            name: 'vendor',
        },
        runtimeChunk: {
            name: 'runtime'
        }
    },
    entry: {
        app: [
            'babel-polyfill',  //Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(png|jpg|gif|svg|jpeg)$/,
            use: [{
                loader: 'file-loader',
                // options: {
                //     limit: 8192
                // },
                query: {
                    name: 'images/[name]-[hash:5].[ext]'
                },
            }]
        },{
            test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.*$|$)/,
            loader: 'file-loader',
            query: {
                name: 'font/[name]-[hash:5].[ext]'
            },
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.HashedModuleIdsPlugin(),
    ],

    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
        }
    }
};

module.exports = commonConfig;