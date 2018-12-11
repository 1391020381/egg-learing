import { Service } from 'egg';
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
/**
 * Service
 */

interface RegisterParams {
    username: string,
    password: string,
    mobile?: number,
    email: string,
    userId?: string
}


// interface LoginParams {
//     email: string,
//     password: string
// }
export default class UserService extends Service {
    /**
     * @interface RegisterParams  - your name
     * @param username // 用户名
     * @param email  // 邮箱
     */
    public async register(user: RegisterParams) {

    }
}