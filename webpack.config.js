const {join} = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const IgnorePlugin = require('webpack').IgnorePlugin
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')


const extractStyle = new ExtractTextPlugin({
    filename: 'style/style.css',
    allChunks: true,
})

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
        watchContentBase: true
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
                test:/\.css$/,
                use:extractStyle.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
            },
            { 
                test: /\.(ttf|eot|svg|woff|woff2|png|gif)$/, 
                loader: "file-loader",
                options: {
                    name: '/style/[name].[ext]',
                }
            }
        ]
    },
    
    plugins: [
        // new BundleAnalyzerPlugin(),
        // new UglifyJsPlugin({sourceMap:true}),
        extractStyle,
        // extractTiff,
        // new IgnorePlugin(/\.node_modules/)
    ]
}