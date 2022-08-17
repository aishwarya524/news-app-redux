import { newsReducer } from "./news/reducer";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

let rootReducer = combineReducers({
    news: newsReducer
})
let store = createStore( rootReducer, composeWithDevTools(applyMiddleware(reduxThunk, createLogger())))

export default store