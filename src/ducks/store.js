import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './reducer'
import companyReducer from './companyReducer'
import clientReducer from './clientReducer'
import featuresReducer from './featuresReducer'
import termsReducer from './termsReducer'

const rootReducer = combineReducers({
    user: userReducer,
    company: companyReducer,
    client: clientReducer,
    features: featuresReducer,
    terms: termsReducer
})

// console.log(companyReducer)
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)) )