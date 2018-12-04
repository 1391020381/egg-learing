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
        // const { getFieldDecorator } = this.props.form
        return (
            <section className={Style.signup}>
                <h1 className="header">
                    <span className="instagram"></span>
                </h1>
                <h2 className="slogan">注册instagram分享精彩视界</h2>
                <Button type="primary" htmlType="submit" className="facebook-login"> 使用Facebook登陆</Button>
                <div className="or-line"></div>
                <Form className="register-form" onSubmit={this.handleSubmit.bind(this)}>

                </Form>
            </section>
        )
    }
}

export default SignUp