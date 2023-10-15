const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new HtmlWebpackPlugin({
        template:path.resolve(__dirname,"index.html")}),
    new CopyPlugin({
        patterns:[
            {from:path.resolve(__dirname,'files'),
        to:path.resolve(__dirname,"dist/files")
        }
        ]
    }),
    new MiniCssExtractPlugin({})
    ],
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
          ],
        },
        devServer:{
          port:3000,
          hot:true,
          open:true
        }
      
}