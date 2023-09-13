import postReducer, {createdPostReducer, loginReducer, photoReducer} from "./postReducer.js";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    post:postReducer,
    typedPost: createdPostReducer,
    login: loginReducer,
    setProfilePhoto: photoReducer
});

export default rootReducer;