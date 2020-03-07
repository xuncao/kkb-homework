import React, { Component } from 'react'
import store from '../store'

export default class ReduxPage extends Component {
    componentDidMount() {
        // 订阅
        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    add = () => {
        store.dispatch({ type: 'ADD' })
    }

    minus = () => {
        store.dispatch({ type: 'MINUS' })
    }

    asyAdd = () => {
        store.dispatch(dispatch => {
            setTimeout(() => {
                dispatch({ type: 'ADD' })
            }, 3000)
        })
    }

    addTen = () => {
        store.dispatch({ type: 'ADD_TEN' })
    }

    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                {/* getState获取数据 */}
                <p>{store.getState().countReducer}</p>
                <p>{store.getState().countTenReducer}</p>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
                <button onClick={this.asyAdd}>asyAdd</button>
                <button onClick={this.addTen}>add ten</button>
            </div>
        )
    }
}
