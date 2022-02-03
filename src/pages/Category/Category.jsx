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
  const categoryTitle = props.match.params.title;
  const mealsFromCategory = useSelector(
    (state) => state.food.mealsFromCategory
  );
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get(`/filter.php?c=${categoryTitle}`)
      .then((response) => {
        dispatch(getMealsFromCategory(response.data.meals.slice(0, 20)));
      })
      .catch((error) => console.log(error));
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
    <div className="category">
      <h3>Our recommendation:</h3>
      <div className="category__header">
        {recommendedMeal ? (
          <Recommended
            className="recommended"
            title={recommendedMeal.strMeal}
            image={recommendedMeal.strMealThumb}
            link={`/category/${categoryTitle}/${recommendedMeal.idMeal}`}
          />
        ) : (
          <Loader />
        )}
        <SearchBar
          className="category__search"
          value={searchTerm}
          placeholder="Search meals"
          handleChange={handleChange}
        />
      </div>
      <h1>{categoryTitle}</h1>
      {filteredMeals ? (
        <Meals meals={filteredMeals} category={categoryTitle} />
      ) : (
        <h1>No meals that match your search</h1>
      )}
    </div>
  );
};

export default Category;
