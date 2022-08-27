import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
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

