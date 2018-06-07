const {join} = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const IgnorePlugin = require('webpack').IgnorePlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")




const extractStyle = new ExtractTextPlugin({
    filename: 'style/style.css',
    allChunks: true,
})

const extractTiff = new ExtractTextPlugin({
    filename: 'style/[name].[ext]',
    allChunks: true,
})

module.exports = {
    entry: './src/index.js',
    output: {
        path:join(__dirname,'public'),
        filename: 'js/bundle.js' 
    },
    target:'web',
    mode: 'development',
    devServer: {
        port: 9000,
        contentBase: join(__dirname, 'public'),
        watchContentBase: true
    },

    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                include:[
                    join(__dirname,'src')
                ],
                use:['babel-loader']
            },
            {
                test:/\.css$/,
                use:extractStyle.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            // {
            //     test: /\.(ttf|eot|svg|woff|woff2|png|gif)$/,
            //     use: extractTiff.extract({
            //         use:'file-loader'
            //     })
            // }
            { 
                test: /\.(ttf|eot|svg|woff|woff2|png|gif)$/, 
                loader: "file-loader?name=/style/[name].[ext]" 
            }
        ]
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        extractStyle,
        extractTiff,
        new IgnorePlugin(/\.node_modules/)
    ]
}