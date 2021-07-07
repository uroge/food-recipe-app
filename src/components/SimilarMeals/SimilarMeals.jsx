import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSimilarMeals } from '../../store/actions/actions';

import './SimilarMeals.scss';

import axios from '../../axios/axios';
import SingleCategory from '../CategoriesPreview/SingleCategory/SingleCategory';

const SimilarMeals = ({ category }) => {
    const similarMeals = useSelector(state => state.similarMeals);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/filter.php?c=${category}`)
        .then(response => {
            dispatch(getSimilarMeals(response.data.meals.slice(0, 3)));
        });
    }, [category, dispatch]);

    const renderSimilarMeals = () => {
        return similarMeals.map(meal => {
            return <SingleCategory 
            key={meal.idMeal}
            title={meal.strMeal} 
            image={meal.strMealThumb}
            link={`/category/${category}/${meal.idMeal}`}
            />
        })
    }

    return (
        <div className="similar-meals">
            { renderSimilarMeals() }
        </div>
    );
}

export default SimilarMeals;