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

export const getSimilarMeals = similarMeals => {
    return {
        type: actionTypes.GET_SIMILAR_MEALS,
        payload: similarMeals
    }
};

export const getSearchedMeals = searchedMeals => {
    return {
        type: actionTypes.GET_SEARCHED_MEALS,
        payload: searchedMeals
    }
};