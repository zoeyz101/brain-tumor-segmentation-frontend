import React from 'react';
import './info-panel.css';
import * as CONSTANTS from '../constants';

function InfoPanel() {
  return (
    <div>
      <div className='dropdown'>
        <b>Diagnosis Information</b>
        <div className='dropdown-content'>
          <p>{ CONSTANTS.DIAGNOSIS_INFO }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Affected Areas</b>
        <div className='dropdown-content'>
          <p>{ CONSTANTS.AFFECTED_AREAS }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Treatment Options</b>
        <div className='dropdown-content'>
          <p>{ CONSTANTS.TREATMENT_OPTIONS }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Additional Information</b>
        <div className='dropdown-content'>
          <p>{ CONSTANTS.ADDITIONAL_INFO }</p>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
