import rootReducer from "./index.js";
import {configureStore} from "@reduxjs/toolkit";

export default function configureAppStore(){
    return configureStore({
        reducer: rootReducer
    })
}


