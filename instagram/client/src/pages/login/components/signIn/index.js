import React, { Component } from 'react'
import Proptypes from 'prop-types'
import { connect } from 'react-redux'


import { Form, Icon, Input, Button, notification } from 'antd'
import Style from './index.scss'

const FormItem = Form.Item;
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <section className={Style.signup}>
                <h1 className="header">
                    <span className="instagram"></span>
                </h1>
            </section>
        )
    }
}

export default SignIn