import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, notification } from 'antd'
import Style from './index.scss'

const FormItem = Form.Item
class SignUp extends Component {
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
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
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
                    <FormItem
                        validateStatus={userNameError ? 'error' : ''}
                        help={userNameError || ''}
                    >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>
                </Form>
            </section>
        )
    }
}

export default SignUp