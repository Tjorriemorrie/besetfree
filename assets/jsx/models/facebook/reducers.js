import { FB_STATUSES, SET_FB_STATUS } from './actions'


      //return { ...state, visibilityFilter: action.filter }

const status = (state = FB_STATUSES.LOADING, action) => {
    switch (action.type) {
        case SET_FB_STATUS:
            return action.status
        default:
            return state
    }
}

export default status
