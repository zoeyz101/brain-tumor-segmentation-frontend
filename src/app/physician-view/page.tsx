import React from 'react';
import dynamic from 'next/dynamic';
import NavBar from '../navbar/navbar';
import InfoPanel from '../info-panel/info-panel';
//import Visualization from '../services/visualization';
import Visualization from '../services/visualization_copy';
import './physician-view.css';

var img = require('../../assets/tumor.jpg');
// var script = require('./testing.js');

// https://sentry.io/answers/window-is-not-defined/
const VisualizationComponent = dynamic(
  //() => import('../services/visualization'),
  () => import('../services/visualization_copy'),
  //() => import('../services/visualization_c'),
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

/*
<div>
          <div id='my-gui-container'></div>
          <div id='container'></div>
          <VisualizationComponent></VisualizationComponent>
        </div> 
*/
