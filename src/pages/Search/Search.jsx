import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from '../../axios/axios';
import { getSearchedMeals } from '../../store/actions/actions';

import './Search.scss';

import SingleCategory from '../../components/CategoriesPreview/SingleCategory/SingleCategory';
import Dropdown from '../../components/Dropdown/Dropdown';
import Meals from '../../components/Meals/Meals';

const Search = (props) => {
    const searchTerm = props.match.params.searchTerm;
    const searchedMeals = useSelector(state => state.searchedMeals);
    const [recommended, setRecommended] = useState(null);
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`/search.php?s=${searchTerm}`)
        .then(response => {
            dispatch(getSearchedMeals(response.data.meals));
            console.log(response.data.meals);
            setRecommended(response.data.meals[0]);
        })
        .catch(error => console.log(error));
    }, [searchTerm, dispatch]);

    const dropdownHandler = (event) => {
        setCategory(event.target.value);
    }

    const filteredMeals = searchedMeals.filter(meal => 
        meal.strCategory.toLowerCase().includes(category.toLocaleLowerCase()));
    
    return(
        <div className="search">
        <h2>Our recommendation:</h2>
        <div className="search__header">
            <div className="search__recommended">
            {recommended ? <SingleCategory className="recommended" title={recommended.strMeal} image={recommended.strMealThumb} link={`/category/${recommended.strCategory}/${recommended.idMeal}`} /> : 'Picking our recommendation...'}
            </div>
            <div className="search__dropdown">
                <Dropdown label="Choose Category:" options={['', 'Beef', 'Chicken', 'Dessert', 'Lamb', 'Pasta', 'Vegan']} dropdownHandler={dropdownHandler}/>
            </div>
        </div>
        <h1 className="title">Search Results:</h1>
        {searchedMeals.length ? <Meals meals={filteredMeals} category={searchedMeals[0].strCategory}/> : 'Couldn\' find meal you wanted'}
        </div>
    );
}

export default Search;