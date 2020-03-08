import React, { Component } from 'react'
// import store from '../store'
import { connect, bindActionCreators } from '../utils/myReactRedux'

@connect(
    state => ({ countReducer: state.countReducer }),
    // object
    // {
    //     add: () => ({type: "ADD"})
    // },
    // function
    dispatch => {
        let res = {
            add: () => ({type: "ADD"}),
            minus: () => ({type: "MINUS"})
        }
        res = bindActionCreators(res, dispatch)
        return {
            dispatch,
            ...res
        }
    },
)
class ReactReduxPage extends Component {

    render() {
        console.log(this.props)
        const { countReducer, add, minus, dispatch } = this.props
        return (
            <div>
                <h3>ReactReduxPage</h3>
                {/* getState获取数据 */}
                <p>{countReducer}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={() => dispatch({ type: 'ADD' })}>dispatch add</button>
            </div>
        )
    }
}

export default ReactReduxPage
