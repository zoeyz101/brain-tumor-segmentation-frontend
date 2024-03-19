'use client';

import React from 'react';
import Image from 'next/image';
import SearchBar from '../search-bar/search-bar';
import { useRouter } from 'next/navigation';
import './navbar.css';
import * as CONSTANTS from '../constants';

var logo = require('../../assets/dark_logo_image_only.png');

function NavBar({view}) {
  const router = useRouter();
  
  const goToPatientView = () => {
    router.push(CONSTANTS.PATIENT_VIEW);
  }
  
  const goToPatientCreation = () => {
    router.push(CONSTANTS.PATIENT_CREATION);
  }

  const goToPhysicianView = () => {
    router.push(CONSTANTS.PHYSICIAN_VIEW);
  }

  const isPhysician = view == 'physician';
  const isPatient = view == 'patient';

  return (
    <div className='Navbar'>
      <ul>
        <li style={{paddingTop: '5px'}}><Image src={logo} width={50} height={50} alt='Logo'/></li>
        <li><b>NeuroMap</b></li>
        <li className='right'>Dr. John Doe</li>
        {
          isPhysician ? (
            <>
              <li className='centre'><SearchBar /></li>
              <li className='right btn' onClick={goToPatientCreation}>[Create New Patient]</li>
              <li className='right btn' onClick={goToPatientView}>[See Patient View]</li>
            </>)
          : null
        }
        {
          isPatient ? (
            <>
              <li className='btn' onClick={goToPhysicianView}>[Return to Physician View]</li>
              <li>[Send to Patient]</li>
            </>)
          : null
        }
      </ul>
    </div>
  )
}

export default NavBar;
