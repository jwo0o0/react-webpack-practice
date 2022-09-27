const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'webpack-setting',
    mode: 'development',
    devtool: 'eval',
    entry: './src/script.js',
    output: {
        path: path.join(__dirname, 'src/public'),
        filename: 'app.bundle.js',
        publicPath: ".",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
                exclude: /node_modules/
            }, 
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })]
}