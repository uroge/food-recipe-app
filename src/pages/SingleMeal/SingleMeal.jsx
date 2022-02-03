import React, { useEffect, useState } from 'react';

import './SingleMeal.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleMeal } from '../../store/actions/actions';
import axios from '../../axios/axios';

import SimilarMeals from '../../components/SimilarMeals/SimilarMeals';
import Loader from '../../components/Loader/Loader';

const SingleMeal = (props) => {
  const dispatch = useDispatch();
  const singleMeal = useSelector((state) => state.food.singleMeal);
  const mealId = props.match.params.id;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/lookup.php?i=${mealId}`)
      .then((response) => {
        setLoading(false);
        dispatch(getSingleMeal(response.data.meals[0]));
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [mealId, dispatch]);

  return (
    <>
      {singleMeal && !loading ? (
        <>
          <div className="single-meal">
            <h1>{singleMeal ? singleMeal.strMeal : <Loader />}</h1>
            <div className="single-meal__preview">
              <div
                className="single-meal__preview-image"
                style={{
                  backgroundImage: `url(${
                    singleMeal ? singleMeal.strMealThumb : ''
                  })`,
                }}
              />
              <div className="single-meal__preview-description">
                <h3>
                  {singleMeal && singleMeal.strTags
                    ? '#' + singleMeal.strTags.split(',').join(' #')
                    : ''}
                </h3>
                <p>
                  <span>Category: </span>
                  {singleMeal ? singleMeal.strCategory : ''}
                </p>
                <p>
                  <span>Country: </span> {singleMeal ? singleMeal.strArea : ''}
                </p>
                <p>
                  <span>Video: </span>
                  <a
                    className="video"
                    href={singleMeal ? singleMeal.strYoutube : '#'}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {singleMeal ? singleMeal.strYoutube : ''}
                  </a>
                </p>
                <p>{singleMeal ? singleMeal.strInstructions : ''}</p>
              </div>
            </div>
            <div className="single-meal__ingredients">
              <div>
                <span>Ingredients:</span>
                <p>{singleMeal ? singleMeal.strIngredient1 : ''}</p>
                <p>{singleMeal ? singleMeal.strIngredient2 : ''}</p>
                <p>{singleMeal ? singleMeal.strIngredient3 : ''}</p>
                <p>{singleMeal ? singleMeal.strIngredient4 : ''}</p>
              </div>
              <div>
                <span>Measure:</span>
                <p>{singleMeal ? singleMeal.strMeasure1 : ''}</p>
                <p>{singleMeal ? singleMeal.strMeasure2 : ''}</p>
                <p>{singleMeal ? singleMeal.strMeasure3 : ''}</p>
                <p>{singleMeal ? singleMeal.strMeasure4 : ''}</p>
              </div>
            </div>
            <div className="single-meal__similar">
              <h2 className="mb-5">Similar Meals:</h2>
              <SimilarMeals category={props.match.params.title} />
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SingleMeal;
