/**
 * Action types
 */

export const SET_SIGNUP_STATUS = 'SET_SIGNUP_STATUS'
export const SET_SIGNUP_FORM = 'SET_SIGNUP_FORM'


export const SIGNUP_STATUSES = {
    HIDDEN: 'hidden',
    FORM: 'form',
    DONE: 'done',
    ERROR: 'error',
}

/**
 * Action creators
 */

export const setSignupStatus = (text) => {
    return {
        type: SET_SIGNUP_STATUS,
        status: text,
    }
}

export const setSignupForm = (text) => {
    return {
        type: SET_SIGNUP_STATUS,
        status: text,
    }
}
