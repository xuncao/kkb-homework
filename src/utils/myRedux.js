export function createStore(reducer, enhancer) {
    if(enhancer) {
        return enhancer(createStore)(reducer)
    }

    let currentState = undefined
    let currentListeners = []

    function getState() {
        return currentState
    }

    function dispatch(action) {
        currentState = reducer(currentState, action)

        currentListeners.map(listener => listener())
    }

    function subscribe(listener) {
        currentListeners.push(listener)
    }

    // 取值的时候，注意一定要保证不和项目中的会重复
    dispatch({ type: "@INIT/MY-REDUX" })

    return {
        getState,
        dispatch,
        subscribe
    }
}

export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
        const store = createStore(...args)

        let getState = store.getState
        let dispatch = store.dispatch
        const middleApi = {
            getState,
            dispatch
        }

        const middlewaresChain = middlewares.map(middleware =>
            middleware(middleApi)
        )

        dispatch = compose(...middlewaresChain)(dispatch)

        return {
            ...store,
            dispatch
        }
    }
}

export function combineReducers(reducers) {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action)
            return nextState
        }, {})
    }
}

function compose(...funcs) {
    if(!funcs.length) {
        return arg => arg
    }

    if(funcs.length === 1) {
        return funcs[0]
    }
    
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}