import React from 'react';
import Image from 'next/image';
import SearchBar from '../search-bar/search-bar';
import './navbar.css';

var logo = require('../../assets/dark_logo_image_only.png');

function NavBar() {
  return (
    <div className='Navbar'>
      <ul>
        <li style={{paddingTop: '5px'}}><Image src={logo} width={50} height={50} alt='Logo'/></li>
        <li><b>NeuroMap</b></li>
        <li className='centre'><SearchBar /></li>
        <li className='right'>Dr. John Doe</li>
        <li className='right'>[Create New Patient]</li> 
        <li className='right'>[See Patient View]</li>
      </ul>
    </div>
  )
}

export default NavBar;
