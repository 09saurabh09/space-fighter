/**
 * Created by saurabhk on 04/09/16.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var libPath = path.join(__dirname, 'client');
var wwwPath = path.join(__dirname, 'public');
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
    pixi = path.join(phaserModule, 'build/custom/pixi.js'),
    p2 = path.join(phaserModule, 'build/custom/p2.js');
var production = process.env.NODE_ENV == "production";

//var webpackPlugins = [new HtmlWebpackPlugin({
//    filename: 'index.html',
//    template: path.join(libPath, 'index.ejs'),
//    inject: true
//})];

var webpackPlugins = [];

if (production) {
    webpackPlugins.push(new webpack.optimize.OccurenceOrderPlugin());
    webpackPlugins.push(new webpack.optimize.DedupePlugin());
    webpackPlugins.push(new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}));

}
module.exports = {
    devtool: !production ? "inline-sourcemap" : null,
    entry: path.join(libPath, 'index.js'),
    output: {
        path: path.join(wwwPath),
        filename: 'js/[name].js'
    },
    module: {

        loaders: [
            {test: /pixi.js/, loader: "script"},
            {test: /\.css$/, loader: "style!css"},
            {
                test: /\.(png|jpg)$/,
                loader: 'file?name=images/[name].[ext]' // inline base64 URLs for <=10kb images, direct URLs for
                // the rest
            }
        ]
    },
    //resolve: {
    //    alias: {
    //        'phaser': phaser,
    //        'pixi.js': pixi,
    //        'p2': p2
    //    }
    //},
    plugins: webpackPlugins,
    devServer: {
        contentBase: "public/",
        host: "0.0.0.0",
        port: 8000,
        hot: true,
        stats: {colors: true},
        proxy: {
            "**": "http://localhost:8100"
        }
    }

};