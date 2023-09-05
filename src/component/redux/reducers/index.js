import postReducer, {createdPostReducer} from "./postReducer.js";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    post:postReducer,
    typedPost: createdPostReducer,
});

export default rootReducer;