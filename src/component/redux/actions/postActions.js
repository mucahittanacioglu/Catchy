
import * as actionTypes from "./actionTypes"
export function setRemainingChars(textLength){
    return {type:actionTypes.REMAINING_TEXT_BODY, payload:textLength}
}
