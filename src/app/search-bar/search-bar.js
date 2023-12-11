import React from 'react';
import './search-bar.css';

function SearchBar() {
  return (
    <div className='rounded'>
      <input className='search pl-2' type="text" placeholder="Search for Patients..."></input>
    </div>
  )
}

export default SearchBar
