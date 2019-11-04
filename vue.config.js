// vue.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    configureWebpack: {
        plugins: [

        ],
    }
};

if (process.env.NODE_ENV === 'production') {
    // 为生产环境修改配置...
    module.exports.configureWebpack.devtool = '#source-map';

    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.configureWebpack.plugins = (module.exports.plugins || []).concat([

    ]);
}

if (process.env.NODE_ENV === 'development') {
    // 为开发环境修改配置...
    module.exports.configureWebpack.devtool = '#inline-source-map';

    // http://vue-loader.vuejs.org/en/workflow/develpoment.html
    module.exports.configureWebpack.plugins = (module.exports.plugins || []).concat([
        new BundleAnalyzerPlugin({
            analyzerPort:8081
        }),
    ]);
}