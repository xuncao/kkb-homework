import { createStore, applyMiddleware, combineReducers } from '../utils/myRedux'

const countReducer = (count = 0, { type, payload = 1 }) => {
    switch (type) {
        case 'ADD':
            return count + payload
        case 'MINUS':
            return count - payload
        default:
            return count
    }
}

const countTenReducer = (count = 10, action) => {
    switch (action.type) {
        case 'ADD_TEN':
            return count + 10
        case 'MINUS_TEN':
            return count - 10
        default:
            return count
    }
}

const loginReducer = (isLogin = false, action) => {
    switch (action.type) {
        case 'LOGIN':
            return true
        default:
            return isLogin
    }
}

const reducers = combineReducers({
    countReducer,
    countTenReducer,
    loginReducer
})

// const store = createStore(countReducer, applyMiddleware(thunk, logger))
const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store


function logger({ getState, dispatch }) {
    return dispatch => action => {
        console.log(action.type + '执行了')
        return dispatch(action)
    }
}

function thunk({ getState, dispatch }) {
    return dispatch => action => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        } else {
            return dispatch(action)
        }
    }
}