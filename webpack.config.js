const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        // port: 0,
        // open: true,
        // hot: true,
        // compress: true,
        // stats: 'errors-warnings',
        // watchContentBase: true,
        historyApiFallback: true,
        compress: true,
        port: 0,
        open: true,
        hot: true,
        stats: 'errors-warnings',
        watchContentBase: true,
        //might add this when I will add start up script!
        //writeToDisk: true, 
        //https: true
        overlay: {
            warnings: true,
            errors: true
        },
    },
    entry: path.resolve(__dirname, './src/App.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',

                    }
                ]
            },

            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         modules: true,
                    //         importLoaders: 2,
                    //         // localIdentName: '[folder]-[local]',
                    //         sourceMap: true
                    //     }
                    // },
                    'resolve-url-loader',
                    // 'sass-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             // plugins: () => [require('autoprefixer')()],
                    //             plugins: [
                    //                 'autoprefixer'
                    //             ]
                    //         },
                    //         sourceMap: true
                    //     },
                    // },
                    {
                        loader: 'sass-loader',
                        options: {
                            // outputStyle: 'expanded',
                            sourceMap: true
                        }
                    }
                ]
            },
            // images
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        // name: 'images/[hash]-[name].[ext]'
                    }
                }]
            },
            //File loader used to load fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
            // {
            //     test: /\.(gif|png|jpe?g|svg|woff)$/i,
            //     // include: path.join(__dirname, 'src/assests'),
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             // options: {
            //             //     name: '[name].[ext]',
            //             // }
            //         }
            //         // {
            //         //     loader: 'image-webpack-loader',
            //         //     options: {
            //         //         disable: true
            //         //     }
            //         // }
            //     ]
            // }


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
            template: path.resolve(__dirname, 'build/index.html'),
            filename: 'index.html'
        }),
    ]
}