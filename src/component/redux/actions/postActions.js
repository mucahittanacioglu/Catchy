
import * as actionTypes from "./actionTypes"
export function setRemainingChars(textLength){
    return {type:actionTypes.REMAINING_TEXT_BODY, payload:textLength}
}

export function createPost(typedPost) {
    return {type:actionTypes.CREATE_POST, payload:typedPost}
}
