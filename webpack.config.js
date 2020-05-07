const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
    "@material-ui/core",
    "@material-ui/icons",
    "@material-ui/lab",
    "@material-ui/styles",
    "axios",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk"
]

const optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    },
    runtimeChunk: {
        name: "manifest",
    }
}

module.exports = {
    mode: "development",
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
        // chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
                exclude: '/node_modules'                
            },
            {
                use: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css$/
            }
        ]
    },
    optimization: optimization,
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
}