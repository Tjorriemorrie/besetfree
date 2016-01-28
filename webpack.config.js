var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'assets/jsx/Index.jsx'),
    output: {
        path: path.resolve(__dirname, 'gae/src/static/build'),
        publicPath: 'http://localhost:8989/static/build',
        filename: 'besetfree.js'
    },
    // Require the webpack and react-hot-loader plugins
    plugins: [
        //    new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
