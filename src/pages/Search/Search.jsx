import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios/axios';
import { getSearchedMeals } from '../../store/actions/actions';

import './Search.scss';

import Dropdown from '../../components/Dropdown/Dropdown';
import Meals from '../../components/Meals/Meals';
import Recommended from '../../components/Recommended/Recommended';
import Loader from '../../components/Loader/Loader';

const Search = (props) => {
  const searchTerm = props.match.params.searchTerm;
  const searchedMeals = useSelector((state) => state.food.searchedMeals);
  const [recommended, setRecommended] = useState(null);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/search.php?s=${searchTerm}`)
      .then((response) => {
        console.log(response);
        if (response.data.meals) {
          dispatch(getSearchedMeals(response.data.meals));
          let recommendedMeal = Math.floor(
            Math.random() * response.data.meals.length + 1
          );

          setRecommended(response.data.meals[recommendedMeal]);
        } else {
          dispatch(getSearchedMeals([]));
          setRecommended(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
      });
  }, [searchTerm, dispatch]);

  const dropdownHandler = (event) => {
    setCategory(event.target.value);
  };

  const filteredMeals = searchedMeals.filter((meal) =>
    meal.strCategory.toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="search">
      <h3>{recommended ? 'Our recommendation:' : 'Not found'}</h3>
      <div className="search__header">
        {recommended ? (
          <Recommended
            className="recommended"
            title={recommended.strMeal}
            image={recommended.strMealThumb}
            link={`/category/${recommended.strCategory}/${recommended.idMeal}`}
          />
        ) : (
          <Recommended
            className="recommended"
            title=""
            image="https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg"
            link={`/`}
          />
        )}
        <div className="search__dropdown">
          <Dropdown
            label="Choose Category:"
            options={[
              '',
              'Beef',
              'Chicken',
              'Dessert',
              'Lamb',
              'Pasta',
              'Vegan',
            ]}
            dropdownHandler={dropdownHandler}
          />
        </div>
      </div>
      <h1 className="title">Search Results:</h1>

      {filteredMeals.length && !loading ? (
        <Meals meals={filteredMeals} category={filteredMeals[0].strCategory} />
      ) : (
        <div>Couldn't find meal you are looking for</div>
      )}
    </div>
  );
};

export default Search;
