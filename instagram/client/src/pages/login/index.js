import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Style from './index.scss'

import SingnIn from './components/signIn'
import SingnUp from './components/signUp'


import Footer from '../../components/footer/index.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignUp: true
        }
    }
    toggleSign() {
        this.setState({
            isSignUp: !this.state.isSignUp
        })
    }
    render() {
        return (
            <main className={Style.login}>
                <article className="login_info">
                    <section className="descript">
                        <div className="photo"></div>
                    </section>
                    <section className="login_dialog">
                        {
                            this.state.isSignUp
                                ? <SingnIn />
                                : <SingnUp toggleSign={this.toggleSign.bind(this)} />

                        }
                        <div className="toggle_ways">
                            {
                                this.state.isSignUp
                                    ? <span>没有账号? <a className="notice" onClick={this.toggleSign.bind(this)}>注册</a></span>
                                    : <span>有账号了?<a className="notice" onClick={this.toggleSign.bind(this)}>请登录</a></span>
                            }

                        </div>
                    </section>
                </article>
                <Footer />
            </main>
        )
    }
}

export default Login