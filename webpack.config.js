const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    entry: "./index.js",
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
    })
    ],
}