import instance from './axiosInstace.js'

// 注册

exports.register = (data) => {
    return instance.post('/login/register', data)
}