import React from 'react';
import './navbar.css';

var logo = require('../../assets/dark_logo_image_only.png');

function PatientViewNavBar() {
  return (
    <div className='Navbar'>
      <ul>
        <li>[Return to Physician View]</li>
        <li>[Send to Patient]</li>
        <li className='right'>Dr. John Doe</li>
      </ul>
    </div>
  )
}

export default PatientViewNavBar;
