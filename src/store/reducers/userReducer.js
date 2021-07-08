import * as actionTypes from '../actions/actionTypes';

const userLoggedIn = localStorage.getItem('userLoggedIn');

const initialState = {
    isUserLoggedIn: userLoggedIn ? userLoggedIn : false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            localStorage.setItem('userLoggedIn', true);
            return {
                ...state,
                isUserLoggedIn: true
            }
        case actionTypes.LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isUserLoggedIn: false
            }
        default:
            return state;
    }
};

export default userReducer;