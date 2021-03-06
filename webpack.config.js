var webpack = require('webpack');
var path = require('path');
var libraryName = 'library';

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};