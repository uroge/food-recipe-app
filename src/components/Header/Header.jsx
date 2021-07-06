import React, { useState } from 'react';
import './Header.scss';

import { IoMdLogIn } from 'react-icons/io';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import history from '../../history';

const Header = (props) => {
    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${term}`);
    }

    return (
        <div className="header">
            <form onSubmit={(event) => onSubmit(event)}>
                <SearchBar
                placeholder="Search Recipe"
                value={term}
                handleChange={(event) => setTerm(event.target.value)}
                />
            </form>

            <div className="header__links">
                <IoMdLogIn className="header__login-icon"/>
                <Link to="/" onClick={props.aboutScroll} className="header__link">About Us</Link>
                <Link to="/" onClick={props.contactScroll} className="header__link">Contact</Link>
            </div>
        </div>
    );
};

export default Header;