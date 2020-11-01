const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry:"./src/index.tsx",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions:['.ts', '.tsx', '.js']
    },
    module: {
        rules:[
            {
                test:/\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        port:3000,
        hot: true
    },
    devtool: 'source-map'
}