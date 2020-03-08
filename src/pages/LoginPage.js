import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from '../utils/myReactRedux'

@connect(
    state => ({ isLogin: state.loginReducer }),
    {
        login: () => ({type: 'LOGIN'})
    }
)
class LoginPage extends Component {
    render() {
        console.log(this.props)
        const { isLogin, location, login } = this.props
        const {redirect = '/'} = location && location.state || {}
        if (isLogin) {
            return <Redirect to={redirect} />
        } else {
            return (
                <div>
                    login
                    <button onClick={login}>login</button>
                </div>
            )
        }
    }
}

export default LoginPage
