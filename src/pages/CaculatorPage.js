import React, { Component } from 'react'
import store from '../store'
import myFormCreate from '../components/myFormCreate'

@myFormCreate
class CaculatorPage extends Component {
    componentDidMount() {
        // 订阅
        store.subscribe(() => {
            this.forceUpdate()
        })
    }

    add = () => {
        const { getFieldValue } = this.props
        let count = getFieldValue('count')
        store.dispatch({ type: 'ADD', payload: count - 0 })
    }

    render() {
        const { getFieldDecorator } = this.props

        return (
            <div>
                <p>{store.getState().countReducer}</p>
                {
                    getFieldDecorator('count', {})(
                        <input type="number" />
                    )
                }
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default CaculatorPage
