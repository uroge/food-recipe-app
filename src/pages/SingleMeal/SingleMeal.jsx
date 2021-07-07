import React, { useEffect } from 'react';

import './SingleMeal.scss';
import { useDispatch, useSelector } from "react-redux";
import { getSingleMeal } from '../../store/actions/actions';
import axios from '../../axios/axios';

import SimilarMeals from '../../components/SimilarMeals/SimilarMeals';

const SingleMeal = (props) => {
    const dispatch = useDispatch();
    const singleMeal = useSelector(state => state.singleMeal);
    const mealId = props.match.params.id;

    useEffect(() => {
        axios.get(`/lookup.php?i=${mealId}`)
        .then(response => {
            dispatch(getSingleMeal(response.data.meals[0]));
        })
        .catch(error => console.log(error));
    }, [mealId, dispatch]);

    return (
        <div className="single-meal">
        <h1>{singleMeal ? singleMeal.strMeal : 'Loading...'}</h1>
        <div className="single-meal__preview">
        <div className="single-meal__preview-image" style={{backgroundImage: `url(${ singleMeal ? singleMeal.strMealThumb : ''})`}}/>
            <div className="single-meal__preview-description">
                <h3>{singleMeal && singleMeal.strTags ? '#' + singleMeal.strTags.split(',').join(' #') : ''}</h3>
                <p><span>Category: </span>{singleMeal ? singleMeal.strCategory : 'Loading...'}</p>
                <p><span>Country: </span> {singleMeal ? singleMeal.strArea : 'Loading...'}</p>
                <p><span>Video: </span><a className="video" href={singleMeal ? singleMeal.strYoutube : '#'} rel="noreferrer" target="_blank">{singleMeal ? singleMeal.strYoutube : 'Loading...'}</a></p>
                <p>{singleMeal ? singleMeal.strInstructions : 'Loading...'}</p>
            </div>
        </div>
        <div className="single-meal__ingredients">
            <div>
                <span>Ingredients:</span>
                <p>{singleMeal ? singleMeal.strIngredient1 : 'Loading...'}</p>
                <p>{singleMeal ? singleMeal.strIngredient2 : 'Loading...'}</p>
                <p>{singleMeal ? singleMeal.strIngredient3 : 'Loading...'}</p>
                <p>{singleMeal ? singleMeal.strIngredient4 : 'Loading...'}</p>
            </div>
            <div>
                <span>Measure:</span>
                <p>{singleMeal ? singleMeal.strMeasure1 : 'Loading...'}</p>
                <p>{singleMeal ? singleMeal.strMeasure2 : 'Loading...'}</p>
                <p>{singleMeal ? singleMeal.strMeasure3 : 'Loading...'}</p>
                <p>{singleMeal ? singleMeal.strMeasure4 : 'Loading...'}</p>
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