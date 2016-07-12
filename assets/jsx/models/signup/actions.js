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
    FINISHED: 'finished',
}

export const SIGNUP_FIELDS = {
    EMAIL: 'email',
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

export const setSignupForm = (field, value) => {
    return {
        type: SET_SIGNUP_FORM,
        field: field,
        value: value,
    }
}

export const sendForm = () => {
    return (dispatch, getState) => {
        let fd = new FormData()
        for (let [key, value] of Object.entries(getState().signup_form)) {
            fd.append(key, value)
        }
        return fetch('/newsletter/email', {
            method: 'POST',
            body: fd,
        })
            .then(res => {
                if (res.status == 200) {
                    localStorage.setItem('newsletter', SIGNUP_STATUSES.FINISHED);
                    dispatch(setSignupStatus(SIGNUP_STATUSES.DONE))
                } else {
                    dispatch(setSignupStatus(SIGNUP_STATUSES.ERROR))
                }
            })
            .catch(() => dispatch(setSignupStatus(SIGNUP_STATUSES.ERROR)))
    }
}
