'use client';

import React from 'react';
import Image from 'next/image';
import SearchBar from '../search-bar/search-bar';
import { useRouter } from 'next/navigation';
import './navbar.css';
import * as CONSTANTS from '../constants';

var logo = require('../../assets/dark_logo_image_only.png');
var physician_icon = require('../../assets/user-doctor-solid.svg');

type view = 'physician' | 'patient' | 'create' | 'segmentation';

interface NavBarProps {
  view: view;
  userList?: string[]; // Optional array of strings
}

const NavBar: React.FC<NavBarProps> = ({view, userList }) => {
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
      <div className='nav-left'>
        <Image src={logo} width={60} height={50} alt='Logo'/>
        <p>NeuroMap</p>
        {isPhysician? <SearchBar /> : null}
      </div>
      
      <ul>
        {
          isPhysician ? (
            <>
              <li>
                <button className='nav-button' onClick={goToPatientCreation}> Create New Patient </button>
              </li>
              <li> 
                <a onClick={goToPatientView}>Patient View</a>
              </li>
            </>)
          : null
        }
        {
          isPatient ? (
            <>
              <li>
                <button className='nav-button'>Send to Patient </button>
              </li>
              <li> 
                <a onClick={goToPhysicianView}>Return to Physician View </a>
              </li>
          </>)
          : null
        }
        <li><Image className='mr-1'width={20} height={10} src={physician_icon} alt="icon"/> Dr. John Doe</li>
      </ul>
    </div>
  )
}

export default NavBar;
