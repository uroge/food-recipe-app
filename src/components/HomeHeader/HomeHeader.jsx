import React from 'react';
import './HomeHeader.scss';
import image from '../../assets/home-header.jpg';
import CustomButton from '../CustomButton/CustomButton';

const HomeHeader = (props) => {
    return (
        <div className="home-header">
            <div className="home-header__text">
                <h1 className="home-header__title">Food recipes</h1>
                <p className="home-header__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci incidunt eaque maiores mollitia molestiae suscipit, enim a cum sunt ipsa, dolor aliquam facilis consequuntur nobis!</p>
                <a href="#categories"><CustomButton onButtonClick={props.scroll} buttonText="Categories" /></a> 
            </div>
            <div className="home-header__image" 
                style={{backgroundImage: `linear-gradient(
                -50deg,
                rgba(71, 53, 49, 0.2) 0%,
                rgba(63, 41, 35, 0.9) 2%, 
                transparent 70%),
                url(${image})`}}>
            </div>
        </div>
    );
}

export default HomeHeader;