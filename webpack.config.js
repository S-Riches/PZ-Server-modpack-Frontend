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
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        devtoolModuleFilenameTemplate: "file:///[absolute-resource-path]",
    },
    devServer: {
        open: false,
        compress: true,
        hot: true,
        // stats: {
        //     children: false,
        //     maxModules: 0,
        // },
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 9000,
    },
    devtool: "source-map",
};
