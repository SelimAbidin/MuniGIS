const {join} = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        path:join(__dirname,'public'),
        filename: 'js/bundle.js' 
    },
    target:'web',
    mode: 'development',
    devServer: {
        port: 9000,
        contentBase: join(__dirname, 'public'),
        watchContentBase: true,
        compress:false,
        hot: true
    },

    resolve: {
        extensions: [".js",".jsx",".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test:/\.(ts|tsx)$/,
                // include:[
                //     join(__dirname,'src')
                // ],
                exclude: join(__dirname, 'node_modules'),
                use:['babel-loader','ts-loader']
            },
            {
                test:/\.(js|jsx)$/,
                // include:[
                //     join(__dirname,'src')
                // ],
                exclude: join(__dirname, 'node_modules'),
                use:['babel-loader']
            },
            {
                test: /\.s?css$/,
                use:ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            { 
                test: /\.(eot|svg|png|gif)$/, 
                loader: "file-loader",
                options: {
                    name: '/style/images/[name].[ext]',
                }
            },
            { 
                test: /\.(ttf|woff|woff2)$/,
                loader: "url-loader",
                options: {
                    name: '/style/fonts/[name].[ext]',
                    mimetype:'application/font-woff'
                }
            }
        ]
    },
    
    plugins: [
        // new BundleAnalyzerPlugin({
        //     defaultSizes: ["stat", "parsed", "gzip"]
        // }),
        // new UglifyJsPlugin({sourceMap:true}),
        new ExtractTextPlugin("style/style.css"),
    ]
}