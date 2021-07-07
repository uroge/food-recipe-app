import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ label, options, dropdownHandler }) => (
    <div className="dropdown">
        <label>{label}</label>
        <select onChange={(event) => dropdownHandler(event)}>
            {
                options.map(option => {
                    return <option key={option} value={option}>{option}</option>
                })
            }
        </select>
    </div>
);

export default Dropdown;