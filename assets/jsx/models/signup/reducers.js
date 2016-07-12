import { SIGNUP_STATUSES, SET_SIGNUP_STATUS, SIGNUP_FIELDS, SET_SIGNUP_FORM } from './actions'


      //return { ...state, visibilityFilter: action.filter }


let status_initial = localStorage.getItem('newsletter') || SIGNUP_STATUSES.HIDDEN
export const signup_status = (state = status_initial, action) => {
    switch (action.type) {
        case SET_SIGNUP_STATUS:
            return action.status
        default:
            return state
    }
}

let form_initial = {
    'email': '',
}
export const signup_form = (state = form_initial, action) => {
    switch (action.type) {
        case SET_SIGNUP_FORM:
            let s = { ...state }
            s[action.field] = action.value
            return s
        default:
            return state
    }
}
