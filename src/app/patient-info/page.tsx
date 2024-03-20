import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from '../navbar/navbar'
import InfoPanel from '../info-panel/info-panel'
import './patient-info.css'

const VisualizationComponent = dynamic(
  () => import('../services/visualization3Dmesh'),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <div>
      <NavBar view="patient"/>
      <div className='grid lg:w-full lg:mb-0'>
        <div className='text'>
          <InfoPanel />
        </div>
        <VisualizationComponent />
      </div>
    </div>
  )
}
