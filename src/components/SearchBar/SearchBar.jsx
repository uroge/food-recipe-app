import React from 'react';
import './SearchBar.scss';
import { BsSearch } from 'react-icons/bs';

const SearchBar = ({ placeholder, value, handleChange }) => (
    <div className="search-input">
        <BsSearch className="search-input__icon"/>
        <input
        placeholder={placeholder}
        value={value}
        type="text"
        onChange={(event) => handleChange(event)}
        />
    </div>
);

export default SearchBar;