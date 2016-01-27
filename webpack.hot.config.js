var path = require('path');
var webpack = require('webpack');

module.exports = {
    // Require the webpack and react-hot-loader plugins
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    entry: {
        app: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8989/static',
            path.resolve(__dirname, 'assets/jsx/Index.jsx')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'gae/src/static/build'),
        publicPath: 'http://localhost:8989/static',
        filename: 'besetfree.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'jsx-loader']
            }
        ]
    }
};
