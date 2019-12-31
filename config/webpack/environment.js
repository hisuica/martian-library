const { environment } = require('@rails/webpacker');

environment.loaders.append('graphql', {
    test: /\.graphql$/,
    exclude: /node_modules/,
    use: [
        {
            loader: 'graphql-tag/loader'
        }
    ]
});

module.exports = environment;
