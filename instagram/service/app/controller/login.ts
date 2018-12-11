import { Controller } from 'egg';
export default class UserController extends Controller {
    /**
     * H5注释/登录/找回密码
     * @return {Promisek<*>}
     */
    // 注册
    public async register() {
        const { ctx } = this;
        // const { password, username, email } = ctx.request.body


    }

    // 参数异常函数
    private __errNotice() {
        const { ctx } = this;
        const { mobile, password, code, username, email } = ctx.request.body
        //参数校验
        let message;
        if (!mobile || !email) {
            message = '手机号或者邮箱不能为空'
        } else if (!code) {
            message = '验证码不能为空'
        } else if (!username) {
            message = '用户名为空'
        } else if (!password) {
            message = '密码不能为空'
        }
        if (message) {
            ctx.throw(400, message)
            return false
        } else {
            return true
        }
    }
}