import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isUserLoggedIn: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false
            }
        default:
            return state;
    }
};

export default userReducer;