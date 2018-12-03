import axios from 'axios';
import baseDomain from './config';
import { notification } from 'antd';

const instance = axios.create({
    xsrfCookieName: 'xsrf-token',
    baseURL: baseDomain
})

instance.interceptors.response.use(function (response) {
    if (response.data.success) {
        return Promise.resolve(response.data)
    } else {
        notification['error']({
            message: response.data.message
        })
        return Promise.reject({
            message: response.data.message
        })
    }
}, function (error) {
    try {
        notification['error']({
            message: error.response.data.message || '系统异常'
        })
        if (error.response.status === 401) {
            setTimeout(() => {
                window.location.href = '/login'
            }, 2000)
        }
    } catch (err) {
        notification['error']({
            message: '系统异常,请稍后重试!'
        })
        return Promise.reject({
            messageCode: 'sysError'
        })
    }
})

export default instance