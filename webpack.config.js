const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/index.js')
    },
    optimization: {
        minimize: true,
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name][contenthash].min.js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$|.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    },
                }
            },
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Template Project',
            filename: 'index.html',
            template: 'public/index.html'
        })
    ]
}