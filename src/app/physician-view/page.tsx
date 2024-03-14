import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from '../navbar/navbar';
import InfoPanel from '../info-panel/info-panel';
import './physician-view.css';

const VisualizationComponent = dynamic(
  () => import('../services/visualization3D'),
  {
    ssr: false,
  }
);

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
        <VisualizationComponent />
      </div>
    </div>
  )
}

