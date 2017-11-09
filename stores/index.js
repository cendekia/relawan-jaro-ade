import { AsyncStorage } from 'react-native';
import { compose, createStore, applyMiddleware } from "redux"
import { persistStore, persistCombineReducers, purgeStoredState } from "redux-persist"
import storage from 'redux-persist/es/storage'
import { PersistGate } from 'redux-persist/lib/integration/react'

import thunk from "redux-thunk"
import logger from 'redux-logger'
import getRootReducer from "../reducers"

let middlewares = [thunk, logger]

const config = {
  key: 'root',
  storage,
}


export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        compose(
          applyMiddleware(...middlewares)
        )
    );

    // uncomment to reset all persisting data
    // purgeStoredState(config)
    purgeStoredState({key:'nav', storage})
    // purgeStoredState({key:'volunteer-local-data', storage})
    // purgeStoredState({key:"registration-form", storage})

    persistStore(store, storage)

    return store
}
