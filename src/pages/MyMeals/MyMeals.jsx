import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyMeals } from '../../store/actions/actions';
import { Redirect } from 'react-router';

import axios from '../../axios/axios';
import './MyMeals.scss';

import Meals from '../../components/Meals/Meals';
import Loader from '../../components/Loader/Loader';

const MyMeals = (props) => {
    const myMeals = useSelector(state => state.food.myMeals);
    const isLoggedIn = useSelector(state => state.user.isUserLoggedIn);
    const dispatch = useDispatch();
    
    useEffect(() => {
        axios.get('/filter.php?c=Seafood')
        .then(response => {
            if(response.data.meals) {
                dispatch(getMyMeals(response.data.meals.splice(0, 5)));
            }
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    return (
        <div className="my-meals">
            <h1>My Meals:</h1>
            {myMeals ? <Meals meals={myMeals} category="Seafood" />
            : <Loader />}
            { !isLoggedIn ? <Redirect to="/" /> : null}
        </div>

    );
};

export default MyMeals;