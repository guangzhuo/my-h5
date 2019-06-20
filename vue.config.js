module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://www.example.org',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}