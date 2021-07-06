import React, { useState } from 'react';

import './CustomForm.scss';
import CustomButton from '../CustomButton/CustomButton';

const CustomForm = ((props, ref) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    // const [show, setShow] = useState(false);
  
    // const handleClose = () => setShow(false);

    const validateEmail = (email) => {
        const re =  /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const clearStorage = () => {
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('email');
        localStorage.removeItem('message');
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        clearStorage();

        if(state.firstName === '' || state.lastName === '' || state.email === '' || state.message === '') {
            alert('You should fill all the inputs!');
            return;
        }

        if(!validateEmail(state.email)) {
            alert('Please enter a valid email');
            return;
        }

        localStorage.setItem('firstName', state.firstName);
        localStorage.setItem('lastName', state.lastName);
        localStorage.setItem('email', state.email);
        localStorage.setItem('message', state.message);

        setState({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });

        // setShow(true);
    }

    return (
    <>
        <div className="form">
            <form onSubmit={(event) => onFormSubmit(event)}>
            <h1>{props.text}</h1> 
                <input 
                    name="firstName" 
                    value={state.firstName}
                    onChange={handleChange}
                    className="form__input" 
                    type="text" 
                    placeholder="First Name"
                />
                <input 
                    name="lastName" 
                    value={state.lastName}
                    onChange={handleChange}
                    className="form__input" 
                    type="text" 
                    placeholder="Last Name"
                />
                <input 
                    name="email" 
                    value={state.email}
                    onChange={handleChange}
                    className="form__input" 
                    type="text" 
                    placeholder="Email"
                />
                <textarea 
                    name="message" 
                    value={state.message}
                    onChange={handleChange}
                    placeholder="Message"
                />
            <CustomButton className="form__button" buttonText="Send"/>
            </form>
        </div>
    </>
    );
});

export default CustomForm;