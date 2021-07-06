import * as actionTypes from '../actions/actionTypes';

const initialState = {
    foodCategories: [],
    mealsFromCategory: []
}

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CATEGORIES:
            return {
                ...state,
                foodCategories: [...action.payload]
            }
        case actionTypes.GET_CATEGORY:
            return {
                ...state,
                mealsFromCategory: [...action.payload]
            }
        default:
            return state;
    }
};

export default foodReducer;