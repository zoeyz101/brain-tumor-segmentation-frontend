import React from 'react';
import Image from 'next/image';
import PatientViewNavBar from '../navbar/navbar-patient'
import InfoPanel from '../info-panel/info-panel'
import './patient-info.css'

var img = require('../../assets/tumor.jpg');

export default function Page() {
  return (
    <div>
      <PatientViewNavBar />
      <div className='grid lg:w-full lg:mb-0'>
        <div className='text'>
          <InfoPanel />
        </div>
        <div className='img'>
          <Image src={img} width={750} alt='mri'/>
        </div>
      </div>
    </div>
  )
}
