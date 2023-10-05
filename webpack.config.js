const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/App.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        open: false,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 9000,
    },
};
