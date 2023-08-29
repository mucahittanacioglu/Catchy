import rootReducer from "./index.js";
import {applyMiddleware, createStore} from "redux";

export default function configureStore(){
    // createStore(rootReducer(), applyMiddleware(thunk))
    return configureStore(rootReducer())
}