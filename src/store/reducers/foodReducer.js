import * as actionTypes from '../actions/actionTypes';

const initialState = {
    foodCategories: [],
    mealsFromCategory: [],
    singleMeal: null,
    similarMeals: [],
    searchedMeals: []
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
        case actionTypes.GET_MEAL:
            return {
                ...state,
                singleMeal: action.payload
            }
        case actionTypes.GET_SIMILAR_MEALS:
            return {
                ...state,
                similarMeals: [...action.payload]
            }
        case actionTypes.GET_SEARCHED_MEALS:
            return {
                ...state,
                searchedMeals: [...action.payload]
            }
        default:
            return state;
    }
};

export default foodReducer;