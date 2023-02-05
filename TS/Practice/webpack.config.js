// 引入一个包，用于路径的组合
const path = require('path');
//引入html-webpack-plugin插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack中的所有配置都应该写在module.exports中
module.exports={
    // 指定入口文件
    entry:'./src/index.ts',

    //  指定打包文件的输出目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname,"dist"),
        // 打包后的文件名
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },
    // 指定webapck打包时所用的模块
    module:{
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:"babel-loader",
                        options:{
                            presets:[
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        "corejs":"3",
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            // title: "一个自定义的title"
            template: "./index.html"
        }),
        new CleanWebpackPlugin()
    ],
    mode: "development"
};