* 如果想通过 RESTful的方式来定义路由,我们提供了 app.resources('routerName','pathMatch',controller)快速在一个路径上生成CRUD的路由结构。

```
 module.exports = app =>{
     const {router,controller} = app;
     router.resources('post','/api/posts',controller.posts);
 }
```


