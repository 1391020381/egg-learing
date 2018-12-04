import instance from './axiosInstace.js'

// 注册

export function register(data) {
    return instance.post('/login/register', data)
}