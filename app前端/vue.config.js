// module.exports = {
//     devServer: {
//         port: 8888, // 端口号
//     }
// };

module.exports={
    devServer:{
        port: 8888, // 端口号
        proxy:{
        	//设置允许跨域的路径(以api为例)
            '/api':{
            //设置允许跨域请求的域名(以我请求的api域名为例)
                target: 'http://localhost:1666/',
             // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin:true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }

    }
}
