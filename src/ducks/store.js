import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './reducer'
import companyReducer from './companyReducer'

const rootReducer = combineReducers({
    user: userReducer,
    company: companyReducer
})


export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)) )