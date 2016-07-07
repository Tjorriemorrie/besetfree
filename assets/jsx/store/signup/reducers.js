import { SIGNUP_STATUSES, SET_SIGNUP_STATUS } from './actions'


const status = (state = SIGNUP_STATUSES.HIDDEN, action) => {
    switch (action.type) {
        case SET_SIGNUP_STATUS:
            return action.status
        default:
            return state
    }
}

export default status
