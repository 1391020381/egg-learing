import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import '@scss/base.scss'
import '../../assets/style/base.scss'
// 页面

import Login from './login/index.js'
import About from './about/index.js'
class Instagram extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </Router>
        )
    }
}

export default Instagram