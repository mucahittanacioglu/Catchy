import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import configureAppStore from "./component/redux/reducers/configureAppStore.js";
import {Provider} from "react-redux";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {BrowserRouter} from "react-router-dom";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import {PersistGate} from "redux-persist/integration/react";
import rootReducer from "./component/redux/reducers/index.js";
import {configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({reducer: persistedReducer, middleware: [thunk]});
const persistor = persistStore(store);

/*persistor.purge();*/ // to reset saved datas.

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <App/>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
