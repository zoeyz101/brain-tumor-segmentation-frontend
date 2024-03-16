import React from 'react';
import parse from 'html-react-parser';
import './info-panel.css';
import * as CONSTANTS from '../constants';

function InfoPanel() {
  var DIAGNOSIS_INFO = '';
  var AFFECTED_AREAS = '';
  var TREATMENT_OPTIONS = '';
  var ADDITIONAL_INFO = '';
  
  if (CONSTANTS.SHOW_OG) {
    DIAGNOSIS_INFO = CONSTANTS.DIAGNOSIS_INFO_OG;
    AFFECTED_AREAS = CONSTANTS.AFFECTED_AREAS_OG;
    TREATMENT_OPTIONS = CONSTANTS.TREATMENT_OPTIONS_OG;
    ADDITIONAL_INFO = CONSTANTS.ADDITIONAL_INFO_OG;
  } else if (CONSTANTS.SHOW_GBM) {
    DIAGNOSIS_INFO = CONSTANTS.DIAGNOSIS_INFO_GBM;
    AFFECTED_AREAS = CONSTANTS.AFFECTED_AREAS_GBM;
    TREATMENT_OPTIONS = CONSTANTS.TREATMENT_OPTIONS_GBM;
    ADDITIONAL_INFO = CONSTANTS.ADDITIONAL_INFO_GBM;
  }

  return (
    <div>
      <div className='dropdown'>
        <b>Diagnosis Information</b>
        <div className='dropdown-content'>
          <p>{ parse(DIAGNOSIS_INFO) }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Affected Areas</b>
        <div className='dropdown-content'>
          <p>{ parse(AFFECTED_AREAS) }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Treatment Options</b>
        <div className='dropdown-content'>
          <p>{ parse(TREATMENT_OPTIONS) }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Additional Information</b>
        <div className='dropdown-content'>
          <p>{ parse(ADDITIONAL_INFO) }</p>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
