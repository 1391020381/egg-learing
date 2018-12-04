import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import API from '../common/api.js'
import '../../assets/style/base.scss'
import './index.scss'

// 页面
import Login from './login/index.js'
class Intagram extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                </Switch>
            </Router>
        )
    }
}
export default Intagram