/**
 * Action types
 */

export const SET_QUANTUM_PROFILES = 'SET_QUANTUM_PROFILES'
export const SET_QUANTUM_STRUCTURE = 'SET_QUANTUM_STRUCTURE'


/**
 * Action creators
 */

export const loadQuantumData = () => {
    return (dispatch, getState) => {
        fetch('/static/other/profiles.json')
            .then(res => res.json())
            .then(res => dispatch(setQuantumProfiles(res)))
        fetch('/static/other/structure.json')
            .then(res => res.json())
            .then(res => dispatch(setQuantumStructure(res)))
    }
}

export const setQuantumProfiles = (data) => {
    return {
        type: SET_QUANTUM_PROFILES,
        profiles: data,
    }
}

export const setQuantumStructure = (data) => {
    return {
        type: SET_QUANTUM_STRUCTURE,
        structure: data,
    }
}
