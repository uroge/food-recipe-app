import * as actionTypes from './actionTypes';

export const getFoodCategories = categories => {
    return {
        type: actionTypes.GET_CATEGORIES,
        payload: categories
    }
};

export const getMealsFromCategory = category => {
    return {
        type: actionTypes.GET_CATEGORY,
        payload: category
    }
};

export const getSingleMeal = meal => {
    return {
        type: actionTypes.GET_MEAL,
        payload: meal
    }
};