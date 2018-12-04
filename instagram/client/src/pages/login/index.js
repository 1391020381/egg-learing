import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
import Style from './index.scss'

import SingnIn from './components/signIn'
import SingnUp from './components/signUp'


import Footer from '../../components/footer/index.js'

class Login extends Component {

    render() {
        return (
            <main class={Style.login}>
                <article className="login_info">
                    <section className="descript">
                        <div className="photo"></div>
                    </section>
                    <section className="login_dialog">
                        <SingnIn />
                        <SingnUp />
                    </section>
                </article>
                <Footer />
            </main>
        )
    }
}

export default Login