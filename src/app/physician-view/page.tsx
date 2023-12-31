import React from 'react';
import Image from 'next/image';
import NavBar from '../navbar/navbar'
import InfoPanel from '../info-panel/info-panel'
import './physician-view.css'

var img = require('../../assets/tumor.jpg');

export default function Page() {
  return (
    <div>
      <NavBar />
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
