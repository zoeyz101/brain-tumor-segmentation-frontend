'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './navbar.css';
import * as CONSTANTS from '../constants';

var logo = require('../../assets/dark_logo_image_only.png');

function PatientViewNavBar() {
  const router = useRouter();
  
  const goToPhysicianView = () => {
    router.push(CONSTANTS.PHYSICIAN_VIEW);
  }
  
  return (
    <div className='Navbar'>
      <ul>
        <li className='btn' onClick={goToPhysicianView}>[Return to Physician View]</li>
        <li>[Send to Patient]</li>
        <li className='right'>Dr. John Doe</li>
      </ul>
    </div>
  )
}

export default PatientViewNavBar;
