// var path = require('path');

const devProxy = ['/pc','/weixin','android'];  // 代理
var proEnv = require('./src/config/pro.env');  // 生产环境
var uatEnv = require('./src/config/test.env');  // 测试环境
var devEnv = require('./src/config/dev.env');  // 本地环境
const env = process.env.NODE_ENV;

let target = '';
// 默认是本地环境
if(env === 'production'){  // 生产环境
    target = proEnv.hosturl;
}else if(env === 'test'){ // 测试环境
    target = uatEnv.hosturl;
}else{  // 本地环境
    target = devEnv.hosturl;
}
console.log(target)
console.log(env)
// 生成代理配置对象
let proxyObj = {};
devProxy.forEach((value) => {
    console.log(value)
    proxyObj[value] = {
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^${value}`]: value
        }
    };
});

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    devServer: {
        // open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        disableHostCheck: true,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: proxyObj // string | Object
    }
};