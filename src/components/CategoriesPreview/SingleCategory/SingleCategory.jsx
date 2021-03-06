import React from 'react';

import './SingleCategory.scss';
import { Link } from 'react-router-dom';

const SingleCategory = ({ title, image, link }) => {
    return (
    <div className="single-category">
        <div 
        className="image"
        style={{
            backgroundImage: `url(${image})`
        }}
        />
        <Link to={link} className="single-category__link">
            <div className="single-category__footer">
                <p className="name">{title}</p>
            </div>
        </Link>
    </div>);
};

export default SingleCategory;