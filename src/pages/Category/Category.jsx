import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsFromCategory } from '../../store/actions/actions';

import axios from '../../axios/axios';

import './Category.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import Meals from '../../components/Meals/Meals';
import Recommended from '../../components/Recommended/Recommended';
import Loader from '../../components/Loader/Loader';

const Category = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const categoryTitle = props.match.params.title;
  const mealsFromCategory = useSelector(
    (state) => state.food.mealsFromCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/filter.php?c=${categoryTitle}`)
      .then((response) => {
        setLoading(false);
        if (response.data.meals) {
          dispatch(getMealsFromCategory(response.data.meals.slice(0, 20)));
        } else {
          getMealsFromCategory([]);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  }, [categoryTitle, dispatch]);

  /**
   * Sets search term in the state based on what user typed
   * @param {FormEvent} event - chahnge event
   */
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const recommendedMeal = mealsFromCategory[0];

  const filteredMeals = mealsFromCategory.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {!loading ? (
        <>
          <div className="category">
            <h3>{recommendedMeal ? 'Our recommendation:' : 'Not found'}</h3>
            <div className="category__header">
              {recommendedMeal ? (
                <Recommended
                  className="recommended"
                  title={recommendedMeal.strMeal}
                  image={recommendedMeal.strMealThumb}
                  link={`/category/${categoryTitle}/${recommendedMeal.idMeal}`}
                />
              ) : (
                <Recommended
                  className="recommended"
                  title=""
                  image="https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg"
                  link={`/`}
                />
              )}
              <SearchBar
                className="category__search"
                value={searchTerm}
                placeholder="Search meals"
                handleChange={handleChange}
              />
            </div>
            <h1>{categoryTitle}</h1>
            {filteredMeals.length ? (
              <Meals meals={filteredMeals} category={categoryTitle} />
            ) : (
              <h3>No meals that match your search</h3>
            )}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Category;
