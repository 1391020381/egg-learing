* 一般来说中间件也会有自己的配置。在框架中，一个完整的中间件是包含了配置处理的。我们约定一个中间件是一个放置在app/middleware目录下的单独文件,它需要exports一个普通的 function,接受两个参数：
* options：中间件的配置项，框架会将app.config[${middlewareName}]传递进来
* app:当前应用Application的实例

## 在应用中使用中间件
```
module.exports = {
    middleware:['gzip'],
    gzip:{
        threshold:1024
    }
}
```
* 该配置最终将启动时合并到 app.config.appMiddleware
# 在框架和插件中使用中间件
* 注意：框架和插件加载的中间件会在应用层的中间件之前,框架默认中间件不能被应用层中间件覆盖,如果应用层有自定义同名中间件,在启动时会报错。
* 框架和插件不支持在 config.default.js中配置 middleware,需要通过以下方式：
*   