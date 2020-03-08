import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import HomePage from './HomePage'
import FormPage from './FormPage'
import LoginPage from './LoginPage'
import PrivateRoute from './PrivateRoute'

export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>Router</h3>
                <Router>
                    <Link to='/'>首页</Link>
                    <Link to='/form'>表单</Link>
                    <Link to='/login'>登录</Link>
                    <Link to='/search/123'>搜索</Link>

                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        {/* <Route path='/form' component={FormPage} /> */}
                        <PrivateRoute path='/form' component={FormPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/search/:id' component={SearchComponent} />
                        <Route render={() => <div>404</div>} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

function SearchComponent(props) {
    return (
        <div>
            search page {props.match.params.id}
        </div>
    )
}
