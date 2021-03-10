const common = require ("./webpack.common");
const {merge} = require ("webpack-merge");
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');

module.exports = merge(common,{
    mode: 'development',
    devtool: 'source-map', 
    devServer:{
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ "style-loader", "css-loader", "sass-loader" ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
});
