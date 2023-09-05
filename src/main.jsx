import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import configureAppStore from "./component/redux/reducers/configureAppStore.js";
import {Provider} from "react-redux";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

const store = configureAppStore();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>

            <App/>
        </Provider>
    </React.StrictMode>,
)
