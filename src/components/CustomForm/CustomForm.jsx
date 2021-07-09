import React, { useState } from 'react';

import './CustomForm.scss';
import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';

const CustomForm = React.forwardRef((props, ref) => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    /**
     * Sets state values based on values user entered
     * @param {FormEvent} event - change event
     */
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    /**
     * Validates user email
     * @param {String} email user email
     * @returns true or false based on wether email is valid
    */
    const validateEmail = (email) => {
        const regex =  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return regex.test(email);
    }

    /**
     * Clears data from localStorage
    */
    const clearStorage = () => {
        localStorage.removeItem('firstName');
        localStorage.removeItem('lastName');
        localStorage.removeItem('email');
        localStorage.removeItem('message');
    }

    /**
     * Closes modal
    */
    const closeModal = () => {
        setModalOpen(false);
    }

    /**
     * Validates contact form, displays modal based
     * with message and stores data to localStorage
     * @param {FormEvent} event
     */
    const onFormSubmit = (event) => {
        event.preventDefault();
        clearStorage();

        if(state.firstName === '' || state.lastName === '' || state.email === '' || state.message === '') {
            setModalMessage('You should fill all the inputs!');
            setModalOpen(true);
            return;
        }

        if(!validateEmail(state.email)) {
            setModalMessage('Please enter a valid email');
            setModalOpen(true);
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

        setModalMessage('Your message was sent');
        setModalOpen(true);
    }

    return (
    <>
        <div className="form" ref={ref}>
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
        { isModalOpen ? <Modal message={modalMessage} closeModal={closeModal} /> 
        : null }
    </>
    );
});

export default CustomForm;