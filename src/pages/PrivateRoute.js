import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from '../utils/myReactRedux'

// @connect(
//     state => ({ isLogin: state.loginReducer })
// )
class PrivateRoute extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        console.log(this)
        const { isLogin, path, component } = this.props
        if (isLogin) {
            return <Route path={path} component={component} />
        } else {
            return <Redirect to={{pathname: '/login', state: {redirect: path}}} />
        }
    }
}

export default PrivateRoute
