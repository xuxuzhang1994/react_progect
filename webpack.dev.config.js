// const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const webpack = require('webpack');
// module.exports = {
//     optimization: {
//         splitChunks: {
//             name: 'vendor',
//         },
//         runtimeChunk: {
//             name: 'runtime'
//         }
//     },
//     /*入口*/
//     entry: {
//         app: [
//             'react-hot-loader/patch',
//             path.join(__dirname, 'src/index.js')
//         ],
//         vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
//     },
//
//     /*输出到dist文件夹，输出文件名字为bundle.js*/
//     output: {
//         path: path.join(__dirname, './dist'),
//         filename: '[name].[chunkhash].js',
//         chunkFilename: '[name].[chunkhash].js',
//         publicPath: "/"
//     },
//     /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
//     /*cacheDirectory是用来缓存编译结果，下次编译加速*/
//     module: {
//         rules: [{
//             test: /\.js$/,
//             use: ['babel-loader?cacheDirectory=true'],
//             include: path.join(__dirname, 'src')
//         },
//         {
//             test: /\.css$/,
//             use: ExtractTextPlugin.extract({
//                 fallback: "style-loader",
//                 use: "css-loader"
//             })
//         },
//         {
//             test: /\.less$/,
//             use: [{
//                 loader: "style-loader" // creates style nodes from JS strings
//             }, {
//                 loader: "css-loader" // translates CSS into CommonJS
//             }, {
//                 loader: "less-loader" // compiles Less to CSS
//             }]
//         }
//         ]
//     },
//     devServer: {
//         contentBase: path.join(__dirname, './dist'),
//         //color:true,
//         historyApiFallback:true,
//         port:1209,
//     },
//     resolve: {
//         alias: {
//             pages: path.join(__dirname, 'src/pages'),
//             components: path.join(__dirname, 'src/components'),
//             router: path.join(__dirname, 'src/router'),
//             actions: path.join(__dirname, 'src/redux/actions'),
//             reducers: path.join(__dirname, 'src/redux/reducers'),
//             mock: path.join(__dirname, 'mock')
//             //redux: path.join(__dirname, 'src/redux')
//         }
//     },
//     // devtool: 'inline-source-map',
//     plugins: [
//         new CleanWebpackPlugin(['dist']),
//         new webpack.HashedModuleIdsPlugin(),
//         new HtmlWebpackPlugin({
//             filename: 'index.html',
//             template: path.join(__dirname, 'src/index.html')
//         }),
//         new ExtractTextPlugin({
//             filename: '[name].[contenthash:5].css',
//             allChunks: true
//         }),
//         new UglifyJSPlugin(),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 'NODE_ENV': JSON.stringify('production')
//             }
//         }),
//
//
//     ],
//     // optimization: {
//     //      splitChunks: {
//     //        name: 'common'
//     //      }
//     //  },
//
//
// };

const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader","postcss-loader"]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "postcss-loader" // compiles Less to CSS
                    }, {
                        loader: "less-loader" // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        port:1209,
        host: '0.0.0.0',
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);