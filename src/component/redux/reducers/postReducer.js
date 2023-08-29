import * as actionTypes from "../actions/actionTypes"
import {REMAINING_TEXT_BODY} from "../actions/actionTypes";
// import initialState from "./initialState"

export default function postReducer(state=0,action){
    switch (action.type) {
        case actionTypes.REMAINING_TEXT_BODY:
            return action.payload;
        default:
            return state;
    }
}