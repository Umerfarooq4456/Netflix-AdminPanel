import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers/index'

const persistConfig = {
    key: 'root',
    Store,
    whitelist: ['Auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
        // other Store enhancers if any
    )
);
export const persistor = persistStore(Store)

