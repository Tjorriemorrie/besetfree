const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'assets/jsx/index.js')
    },
    // devtool: 'inline-source-map',
    devServer: {
      contentBase: 'gae/src',
      // hot: true,
      port: 9898,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{loader: 'babel-loader'}],
            },
            // {
            //     test: /\.less$/,
            //     loader: 'style!css!less'
            // }, // use ! to chain loaders
            // {
            //     test: /\.css$/,
            //     loader: 'style!css'
            // }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
         // new webpack.optimize.CommonsChunkPlugin({name:'commons'})
    ],
    output: {
        path: path.resolve(__dirname, 'gae/src/static/build/'),
        publicPath: '/static/build/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }
};
