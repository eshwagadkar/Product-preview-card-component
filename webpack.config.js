const path = require('path');

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist')
    },
    devServer: {
        static: { directory: path.join(__dirname, 'app') } ,
        open: true,
        hot: true,
        port: 3001,
        compress: true,
        historyApiFallback: true
    },
    mode: 'development',
    // plugins: [
    //     // Enable the plugin
    //     new webpack.HotModuleReplacementPlugin(),
    // ],
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'] 
            },
            {
                 test: /\.scss$/i, 
                 use: ['style-loader', 'css-loader', 'sass-loader'] 
            }
        ]
      },
}