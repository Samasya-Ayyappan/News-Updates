import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <center>
            <input
            type="text"
            placeholder="Search for news..."
            value={query}
            onChange={handleChange}
        />
        </center>
    );
};

export default SearchBar;
