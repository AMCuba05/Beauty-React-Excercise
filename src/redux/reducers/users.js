import { SET_SEARCH_USERS } from '../actionTypes';


const initialState = {
    searchUsers: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_USERS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}


