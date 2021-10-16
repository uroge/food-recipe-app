import React, { useEffect } from 'react';

import './SingleMeal.scss';
import { useDispatch, useSelector } from "react-redux";
import { getSingleMeal } from '../../store/actions/actions';
import axios from '../../axios/axios';

import SimilarMeals from '../../components/SimilarMeals/SimilarMeals';
import Loader from '../../components/Loader/Loader';

const SingleMeal = (props) => {
    const dispatch = useDispatch();
    const singleMeal = useSelector(state => state.food.singleMeal);
    const mealId = props.match.params.id;

    useEffect(() => {
        axios.get(`/lookup.php?i=${mealId}`)
        .then(response => {
            dispatch(getSingleMeal(response.data.meals[0]));
            console.log(response.data)
        })
        .catch(error => console.log(error));
    }, [mealId, dispatch]);

    return (
        <div className="single-meal">
        <h1>{singleMeal ? singleMeal.strMeal : <Loader />}</h1>
        <div className="single-meal__preview">
        <div className="single-meal__preview-image" style={{backgroundImage: `url(${ singleMeal ? singleMeal.strMealThumb : ''})`}}/>
            <div className="single-meal__preview-description">
                <h3>{singleMeal && singleMeal.strTags ? '#' + singleMeal.strTags.split(',').join(' #') : ''}</h3>
                <p><span>Category: </span>{singleMeal ? singleMeal.strCategory : <Loader />}</p>
                <p><span>Country: </span> {singleMeal ? singleMeal.strArea : <Loader />}</p>
                <p><span>Video: </span><a className="video" href={singleMeal ? singleMeal.strYoutube : '#'} rel="noreferrer" target="_blank">{singleMeal ? singleMeal.strYoutube : <Loader />}</a></p>
                <p>{singleMeal ? singleMeal.strInstructions : <Loader />}</p>
            </div>
        </div>
        <div className="single-meal__ingredients">
            <div>
                <span>Ingredients:</span>
                <p>{singleMeal ? singleMeal.strIngredient1 : <Loader />}</p>
                <p>{singleMeal ? singleMeal.strIngredient2 : <Loader />}</p>
                <p>{singleMeal ? singleMeal.strIngredient3 : <Loader />}</p>
                <p>{singleMeal ? singleMeal.strIngredient4 : <Loader />}</p>
            </div>
            <div>
                <span>Measure:</span>
                <p>{singleMeal ? singleMeal.strMeasure1 : <Loader />}</p>
                <p>{singleMeal ? singleMeal.strMeasure2 : <Loader />}</p>
                <p>{singleMeal ? singleMeal.strMeasure3 : <Loader />}</p>
                <p>{singleMeal ? singleMeal.strMeasure4 : <Loader />}</p>
            </div>
        </div>
        <div className="single-meal__similar">
           <h2 className="mb-5">Similar Meals:</h2>
            <SimilarMeals category={ props.match.params.title }/>
        </div>
        </div>
    );
};

export default SingleMeal;