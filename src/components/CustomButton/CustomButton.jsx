import React from 'react';
import './CustomButton.scss';

const CustomButton = (props) => (
    <button onClick={props.onButtonClick} className="custom-button">{props.buttonText}</button>
);


export default CustomButton;