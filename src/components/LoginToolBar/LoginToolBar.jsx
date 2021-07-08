import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/actions/actions';

import CustomButton from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';

import './LoginToolBar.scss';

const LoginToolBar = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const dispatch = useDispatch();

    const validateEmail = email => {
        const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return regex.test(email);
    }

    const onLoginSubmit = (event) => {
        event.preventDefault();

        if(!email){
            setModalMessage('Please enter your email');
            setModalOpen(true);
        } else if (!validateEmail(email)){
            setModalMessage('Please enter a valid email');
            setModalOpen(true);
        } else if (!password) {
            setModalMessage('Please enter your password');
            setModalOpen(true);
        } else {
            setModalMessage('You are now logged in');
            setModalOpen(true);
            dispatch(setLogin());
            props.close();
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
    <div className='login-toolbar'>
        <form onSubmit={(event) => onLoginSubmit(event)}>
            <input 
            type="text" 
            placeholder="Email" 
            onChange={(event) => setEmail(event.target.value)}/>
            <input 
            type="password" 
            placeholder="Password" 
            onChange={(event) => setPassword(event.target.value)} />
            <CustomButton className="button" buttonText={'Log In'}/>
            { isModalOpen ? <Modal message={modalMessage} closeModal={closeModal} />
            : null }
        </form>
    </div>
)};

export default LoginToolBar;