import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './index.scss'

import SingnIn from './components/signIn'
import SingnUp from './components/signUp'


class Login extends Component {

    render() {
        return (
            <div>
                <SingnIn />
                <SingnUp />
            </div>
        )
    }
}

export default Login