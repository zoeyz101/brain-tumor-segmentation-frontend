import React from 'react';
import Image from 'next/image';
import NavBar from '../navbar/navbar'
import InfoPanel from '../info-panel/info-panel'
import './physician-view.css'

var img = require('../../assets/tumor.jpg');

function getPatient() {
  return 'patient';
}

export default function Page() {
  var patient = getPatient()
  
  return (
    <div>
      <NavBar />
      <div className='grid lg:w-full lg:mb-0'>
        <div className='text'>
          <div className='patient-header'>
            <p className='name'><b>Patient Name:</b> {patient}</p>
            <input className='right-2' type='button' value='Edit Segmentation' aria-label='Edit' />
          </div>
          <InfoPanel />
        </div>
        <div className='img'>
          <Image src={img} width={750} alt='mri'/>
        </div>
      </div>
    </div>
  )
}
