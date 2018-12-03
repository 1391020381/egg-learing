import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import { connect } from 'react-redux'
import API from '../common/api.js'
import '../../assets/style/base.scss'
import './index.scss'

// 页面
import Login from './login/index.js'
@connect(
    store => {
        return {
            userInfo: store.userInfo
        }
    }
)
class Intagram extends React.Component {

}