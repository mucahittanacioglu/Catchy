import * as actionTypes from "../actions/actionTypes"

export default function postReducer(state=0,action={}){
    switch (action.type) {
        case actionTypes.REMAINING_TEXT_BODY:
            return action.payload;
        default:
            return state;
    }
}

export function createdPostReducer(state = [], action = {}) {
    switch (action.type) {
        case actionTypes.CREATE_POST:
            return [...state, action.payload];
        default:
            return state;
    }
}