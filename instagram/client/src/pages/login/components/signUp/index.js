import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, notification } from 'antd'
import Style from './index.scss'

const FormItem = Form.Item
class SignUpForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleSubmit.bind(this)
    }
    handleSubmit(e) {

    }
    onChangeHandler(type, event) {

    }
    render() {// getFieldDecorator
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;
        // const userNameError = isFieldTouched('userName') && getFieldError('userName');
        // const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <section className={Style.signup}>
                <h1 className="header">
                    <span className="instagram"></span>
                </h1>
                <h2 className="slogan">注册instagram分享精彩视界</h2>
                <Button type="primary" htmlType="submit" className="facebook-login"> 使用Facebook登陆</Button>
                <div className="or-line">
                    <span className="line"></span>
                    <span className="name">或</span>
                    <span className="line"></span>
                </div>
                <Form className="register-form" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' }],
                        })(
                            <div className={`form-input ${this.state.emailEmpty && 'active'}`} onChange={this.onChangeHandler.bind(this, 'email')}>
                                <label htmlFor="label-phone">邮箱</label>
                                <Input id="label-phone" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                            </div>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your userName!' }]
                        })(
                            <div className={`form-input ${this.state.usernameEmpty && 'active'}`} onChange={this.onChangeHandler.bind(this, 'username')}>
                                <label htmlFor="label-username">全名</label>
                                <Input id="label-username" prefix={<Icon type="user" style={{ color: 'rgba()0,0,0,25' }} />} />
                            </div>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your password!' }]
                        })(
                            <div className={`form-input ${this.state.lockEmpty && 'active'}`} onChange={this.onChangeHandler(this, 'lock')}>
                                <label htmlFor="label-lock">密码</label>
                                <Input id="label-lock" type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                            </div>
                        )

                        }
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            注册
                        </Button>
                    </FormItem>
                </Form>
            </section>
        )
    }
}
const SignUp = Form.create()(SignUpForm);
export default SignUp