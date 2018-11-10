const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
};