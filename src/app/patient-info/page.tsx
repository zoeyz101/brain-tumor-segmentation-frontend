import React from 'react';
import dynamic from 'next/dynamic';
import PatientViewNavBar from '../navbar/navbar-patient'
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
      <PatientViewNavBar />
      <div className='grid lg:w-full lg:mb-0'>
        <div className='text'>
          <InfoPanel />
        </div>
        <VisualizationComponent />
      </div>
    </div>
  )
}
