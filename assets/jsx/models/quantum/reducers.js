import { SET_QUANTUM_PROFILES, SET_QUANTUM_STRUCTURE } from './actions'


export const quantum_profiles = (state = [], action) => {
    switch (action.type) {
        case SET_QUANTUM_PROFILES:
            return action.profiles
        default:
            return state
    }
}

export const quantum_structure = (state = [], action) => {
    switch (action.type) {
        case SET_QUANTUM_STRUCTURE:
            return action.structure
        default:
            return state
    }
}
