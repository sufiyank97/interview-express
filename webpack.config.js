const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, './build'),
        port: 0,
        open: true,
        hot: true,
        compress: true,
        stats: 'errors-warnings',
        watchContentBase: true,
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, './src/App.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            compact: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                include: path.join(__dirname, 'src/assests/images'),
                use: [
                    {
                        loader: 'file-loader',
                        // options: {
                        //     name: '[name].[ext]',
                        // }
                    }
                    // {
                    //     loader: 'url-loader'
                    // }
                    // {
                    //     loader: 'image-webpack-loader',
                    //     options: {
                    //         disable: true
                    //     }
                    // }
                ]
            },

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'), // change this
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./build/index.html'),
        }),
    ]
}