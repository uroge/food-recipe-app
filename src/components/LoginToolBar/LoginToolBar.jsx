import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/actions/actions';

import CustomButton from '../CustomButton/CustomButton';
import './LoginToolBar.scss';

const LoginToolBar = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();

    const onLoginSubmit = (event) => {
        event.preventDefault();

        if(!email) {
            alert('Enter your email');
        } else if(!password) {
            alert('Enter your password');
        } else {
            alert('You are now logged in');
            dispatch(setLogin());
            props.close();
        }
    }

    return (
    <div className='login-toolbar'>
        <form onSubmit={(event) => onLoginSubmit(event)}>
            <input 
            type="email" 
            placeholder="Email" 
            onChange={(event) => setEmail(event.target.value)}/>
            <input 
            type="password" 
            placeholder="Password" 
            onChange={(event) => setPassword(event.target.value)} />
            <CustomButton className="button" buttonText={'Log In'}/>
        </form>
    </div>
)};

export default LoginToolBar;