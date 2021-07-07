import React from 'react';

import './Recommended.scss';
import { Link } from 'react-router-dom';

const Recommended = ({ title, image, link }) => {
    return (
    <div className="recommended">
        <div 
        className="image"
        style={{
            backgroundImage: `url(${image})`
        }}
        />
        <Link to={link} className="recommended__link">
            <div className="recommended__footer">
                <p className="name">{title}</p>
            </div>
        </Link>
    </div>);
};

export default Recommended;