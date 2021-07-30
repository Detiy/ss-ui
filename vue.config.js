const path = require('path')
module.exports = {
    chainWebpack: config =>{
        config.module
        .rule('js')
        .include.add(path.resolve(__dirname,'packages')).end()
        .use('babel')
        .loader('babel-loader')
        .tap(options=>{
            //修改它的选项
            return options
        })
    }
}