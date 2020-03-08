import React, { Component } from 'react'

export const ValueContext = React.createContext()


export const connect = (
    mapStateToProps = state => state,
    mapDispatchToProps
) =>  WrappedComponent => {
    return class extends Component {
        // 此时组件的所有生命周期都能获得this.context
        static contextType = ValueContext

        constructor(props) {
            super(props)
            this.state = {
                props: {}
            }
        }

        componentDidMount() {
            const { subscribe } = this.context
            this.update()

            subscribe(() => {
                this.update()
            })
        }

        update = () => {
            const { getState, dispatch } = this.context
            let stateProps = mapStateToProps(getState())
            let dispatchProps
            if (typeof mapDispatchToProps === 'object') {
                dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
            } else if (typeof mapDispatchToProps === 'function') {
                dispatchProps = mapDispatchToProps(dispatch)
            } else {
                dispatchProps = { dispatch }
            }
            this.setState({
                props: {
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        
        render() {
            // console.log(this)
            return <WrappedComponent {...this.state.props} />
        }
    }
}

export class Provider extends Component {
    render() {
        // console.log(this)
        return (
            <ValueContext.Provider value={this.props.store}>
                { this.props.children }
            </ValueContext.Provider>
        )
    }
}

export function bindActionCreators (creators, dispatch) {
    let newObj = {}
    Object.keys(creators).map(key => {
        newObj[key] = bindActionCreator(creators[key], dispatch)
    })
    return newObj
}

function bindActionCreator (creator, dispatch) {
    return (...args) => dispatch(creator(...args))
}