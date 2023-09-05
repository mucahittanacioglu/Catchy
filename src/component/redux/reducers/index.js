import postReducer, {createdPostReducer, loginReducer} from "./postReducer.js";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    post:postReducer,
    typedPost: createdPostReducer,
    login: loginReducer
});

export default rootReducer;