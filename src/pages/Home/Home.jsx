import React, { useEffect } from 'react';
import './Home.scss';

import { useDispatch, useSelector } from "react-redux";
import { getFoodCategories } from '../../store/actions/actions';
import axios from '../../axios/axios';

import HomeHeader from '../../components/HomeHeader/HomeHeader';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import AboutUs from '../../components/AboutUs/AboutUs';
import CustomForm from '../../components/CustomForm/CustomForm';
import Loader from '../../components/Loader/Loader';

const Home = (props) => {
    const foodCategories = useSelector(state => state.food.foodCategories);
    const dispatch = useDispatch();
    const categoriesRef = React.createRef();

    useEffect(() => {
        axios.get('/categories.php')
        .then(response => {
            if(response.data.categories) {
                dispatch(getFoodCategories(response.data.categories));
            }
        })
        .catch(error => console.log(error));
    }, [dispatch]);

    const scrollToCategories = () => {
        categoriesRef.current.scrollIntoView();
    };

    return (
        <div className="homepage">
            <HomeHeader scroll={scrollToCategories}/>
            { foodCategories ? <CategoriesPreview ref={categoriesRef} categories={foodCategories}/> : 
            <Loader />}
            <AboutUs ref={props.refAbout}/>
            <CustomForm
            ref={props.refContact}
            text='Contact Us' />
        </div>
    );
};

export default Home;