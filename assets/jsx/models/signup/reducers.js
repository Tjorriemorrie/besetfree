import { SIGNUP_STATUSES, SET_SIGNUP_STATUS } from './actions'


      //return { ...state, visibilityFilter: action.filter }


let initial_state = localStorage.getItem('newsletter') || SIGNUP_STATUSES.HIDDEN

export const signup_status = (state = initial_state, action) => {
    switch (action.type) {
        case SET_SIGNUP_STATUS:
            return action.status
        default:
            return state
    }
}
