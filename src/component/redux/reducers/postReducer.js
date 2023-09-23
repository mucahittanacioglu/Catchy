import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState.js";

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
        case actionTypes.DELETE_POST: {
            const leftoverPost = state.filter((state, i) => i !== action.payload);
            return [...leftoverPost];
        }
        default:
            return state;
    }
}

export function loginReducer(state = "", action = {}) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return action.payload;
        default:
            return state;
    }
}

export function photoReducer(state = initialState.profilePhoto, action = {}) {
    switch (action.type) {
        case actionTypes.SET_PROFILE_PHOTO:
            console.log('Profile photo updated:', action.payload);
            return action.payload;
        default:
            return state;
    }
}

