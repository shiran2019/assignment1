

import React from 'react';
import "../styles/searchBar.css"; 

function SearchBar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search City"
      />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
