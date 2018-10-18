module.exports = agent => {
    // 在这里写初始化逻辑
    // 也可以通过 messager对象发送消息给 App Worker
    // 但需要等待 App Worker启动成功后才能发送,不然很有可能丢失
    agent.messenger.on('egg-ready', () => {
        const data = { name: 'justdoit' };
        agent.messenger.sendToApp('xxx_action', data)
    })
}

// app.js

module.exports = app => {
    app.messenger.on('xxx_action', data => {

    })
}

/**
 * agent.js的代码会执行在agent进程上,app.js的代码会执行在Worker进行上,他们通过框架封装的messenger对象进行进程间通讯(IPC)。
 */