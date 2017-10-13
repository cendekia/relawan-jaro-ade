import { createStore, applyMiddleware } from "redux"

import thunk from "redux-thunk"
import logger from 'redux-logger'
import getRootReducer from "../reducers"

let middlewares = [thunk, logger]

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        applyMiddleware(...middlewares)
    );

    return store
}
