import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from "redux"
import { autoRehydrate, persistStore, purgeStoredState } from "redux-persist"

import thunk from "redux-thunk"
import logger from 'redux-logger'
import getRootReducer from "../reducers"

let middlewares = [thunk, logger]

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        compose(
          applyMiddleware(...middlewares),
          autoRehydrate()
        )
    );

    // uncomment to reset all persisting data
    // purgeStoredState({storage: AsyncStorage})

    persistStore(store, { storage: AsyncStorage })

    return store
}
