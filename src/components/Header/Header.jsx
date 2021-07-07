import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../store/actions/actions';

import './Header.scss';

import { IoMdLogIn, IoMdLogOut } from 'react-icons/io';

import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import LoginToolBar from '../LoginToolBar/LoginToolBar';
import history from '../../history';

const Header = (props) => {
    const [term, setTerm] = useState('');
    const [isLoginOpen, setLoginOpen] = useState(false);

    const isUserLoggedIn = useSelector(state => state.user.isUserLoggedIn);
    const dispatch = useDispatch();

    const onSearchSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${term}`);
    }

    const closeLogin = () => {
        setLoginOpen(false);
    }

    return (
        <div className="header" onClick={() => console.log(isUserLoggedIn)}>
            <form onSubmit={(event) => onSearchSubmit(event)}>
                <SearchBar
                placeholder="Search Recipe"
                value={term}
                handleChange={(event) => setTerm(event.target.value)}
                />
            </form>
            {isLoginOpen ? <LoginToolBar close={closeLogin}/> : null}
            <div className="header__links">
                {!isUserLoggedIn ? 
                <IoMdLogIn className="header__login-icon" onClick={() => setLoginOpen(!isLoginOpen)} /> 
                : <IoMdLogOut className="header__login-icon" onClick={() => dispatch(setLogout())} />}
                <Link to="/" onClick={props.aboutScroll} className="header__link">About Us</Link>
                <Link to="/" onClick={props.contactScroll} className="header__link">Contact</Link>
            </div>
        </div>
    );
};

export default Header;