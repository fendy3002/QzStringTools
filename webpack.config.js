module.exports = {
    entry: {
        app: './public/js/app/index.js'
    },
    output: {
        path: './public/js/bin/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ["es2015", "stage-0", "react"]
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};
