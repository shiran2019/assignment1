import React from 'react';
import "../styles/searchBar.css"; 

function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search City"
        value={value}
        onChange={onChange}
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
