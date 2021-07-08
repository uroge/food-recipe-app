import React from 'react';
import SingleCategory from '../../components/CategoriesPreview/SingleCategory/SingleCategory';
import './Meals.scss';

const Meals = (props) => (
    <div className="meals">
        <div className="meals__preview">
        {
            props.meals.map(meal => (
                <SingleCategory 
                key={meal.idMeal} 
                title={meal.strMeal}
                image={meal.strMealThumb}
                link={`/category/${props.category}/${meal.idMeal}`}
                />
            ))
       }
        </div>
    </div>
);

export default Meals;