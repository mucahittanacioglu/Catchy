
import * as actionTypes from "./actionTypes"
export function setRemainingChars(textLength){
    return {type:actionTypes.REMAINING_TEXT_BODY, payload:textLength}
}

export function createPost(typedPost) {
    return {type:actionTypes.CREATE_POST, payload:typedPost}
}

export function login(jwt) {
    return {type:actionTypes.LOGIN, payload:jwt}
}

export function setProfilePhoto(photoURL) {
    return {type:actionTypes.SET_PROFILE_PHOTO, payload:photoURL}
}
