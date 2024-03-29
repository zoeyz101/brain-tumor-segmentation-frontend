'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from '../navbar/navbar';
import { useRouter } from 'next/navigation';
import * as CONSTANTS from '../constants';
import InfoPanel from '../info-panel/info-panel';
import './physician-view.css';

const VisualizationComponent = dynamic(
  //() => import('../services/visualization3D'),
  () => import('../services/visualization3Dmesh'),
  {
    ssr: false,
  }
);

function getPatient() {
  return 'Mary Jane';
}

export default function Page() {
  var patient = getPatient()
  const router = useRouter();

  const editSegmentation = (event: any) => {
    router.push(CONSTANTS.SEGMENTATION);
  }
  
  return (
    <div className='physician-view'>
      <NavBar view="physician"/>
      <div className='grid lg:w-full lg:mb-0'>
        <div className='text'>
          <div className='patient-header'>
            <p className='name'><b>Patient Name:</b> {patient}</p>
            <button className='right-2' aria-label='Edit' onClick={editSegmentation}>Edit Segmentation </button>
          </div>
          <InfoPanel />
        </div>
        <VisualizationComponent />
      </div>
    </div>
  )
}

