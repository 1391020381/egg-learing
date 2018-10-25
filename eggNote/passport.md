# Passport
* 登陆鉴权是一个常见的业务场景,包括 账号密码登陆方式和第三方统一登陆。其中,后者我们经常使用到,如Google,GitHub,QQ统一登陆,它们都是基于OAuth规范。
* Passport是扩展性很强的认证中间件,支持Github,Twitter,Facebook等知名服务厂商的Strategy，同时也支持通过账号密码的方式进行登陆授权校验。
* Egg在它之上提供了egg-passport插件,把初始化、鉴权成功后的回调处理等通用逻辑封装掉,是的开发者仅需调用几个API即可方便的使用Passport。
# Passport的执行时序如下：
1. 用户访问页面
2. 检查Session
3. 拦截跳鉴权登陆页面
4. Strategy鉴权
5. 校验和存储用户信息
6. 序列化用户信息到Session
7. 跳转到指定页面