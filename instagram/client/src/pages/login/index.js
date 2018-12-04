import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './index.scss'

import SingnIn from './components/signIn'
import SingnUp from './components/signUp'


import Footer from '../../components/footer/index.js'

class Login extends Component {

    render() {
        return (
            <main>
                <article>
                    <section>
                        <SingnIn />
                    </section>
                    <section>
                        <SingnUp />
                    </section>
                </article>
                <Footer />
            </main>
        )
    }
}

export default Login