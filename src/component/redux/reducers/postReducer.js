import * as actionTypes from "../actions/actionTypes"

export default function postReducer(state=0,action={}){
    switch (action.type) {
        case actionTypes.REMAINING_TEXT_BODY:
            return action.payload;
        default:
            return state;
    }
}