var path = require('path');

const PATHS = {
    build: path.join(__dirname, 'target', 'classes', 'resources')
};

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};