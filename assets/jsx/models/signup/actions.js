/**
 * Action types
 */

export const SET_SIGNUP_STATUS = 'SET_SIGNUP_STATUS'


export const SIGNUP_STATUSES = {
    HIDDEN: 'hidden',
    FORM: 'form',
    DONE: 'done',
    ERROR: 'error',
    FINISHED: 'finished',
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

export const sendForm = form_values => {
    return (dispatch, getState) => {
        return fetch('/newsletter/email', {
            method: 'POST',
            body: new FormData(form_values)
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
