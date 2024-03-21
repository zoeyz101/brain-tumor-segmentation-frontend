'use client';

import React, { useState } from 'react';
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

  const [showDiagnosisInfo, setShowDiagnosisInfo] = useState(false);
  const [showAffectedAreas, setShowAffectedAreas] = useState(false);
  const [showTreatmentOptions, setShowTreatmentOptions] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  
  const toggleDiagnosisInfo = () => setShowDiagnosisInfo(showDiagnosisInfo => !showDiagnosisInfo);
  const toggleAffectedAreas = () => setShowAffectedAreas(showAffectedAreas => !showAffectedAreas);
  const toggleTreatmentOptions = () => setShowTreatmentOptions(showTreatmentOptions => !showTreatmentOptions);
  const toggleAdditionalInfo = () => setShowAdditionalInfo(showAdditionalInfo => !showAdditionalInfo);

  return (
    <div className='info-panel'>
      <div className='dropdown'>
        { !showDiagnosisInfo && (
          <div className='dropdown-heading' onClick={toggleDiagnosisInfo}><b>Diagnosis Information</b><b>&#x25BE;</b></div>
        ) }
        { showDiagnosisInfo && (
          <div className='dropdown-content'>
            <div className='dropdown-heading' onClick={toggleDiagnosisInfo}> <b>Diagnosis Information </b><b>&#x25B4;</b></div>
            <div className='dropdown-text'>{ parse(DIAGNOSIS_INFO) }</div>
          </div>
        ) }
      </div>
      <div className='dropdown'>
        { !showAffectedAreas && (
          <div className='dropdown-heading' onClick={toggleAffectedAreas}> <b>Affected Areas</b><b> &#x25BE;</b></div>
        ) }
        { showAffectedAreas && (
          <div className='dropdown-content'>
            <div className='dropdown-heading' onClick={toggleAffectedAreas}> <b>Affected Areas</b><b> &#x25B4; </b></div>
            <div className='dropdown-text'>{ parse(AFFECTED_AREAS) }</div>
        </div>
        ) }
      </div>
      <div className='dropdown'>
        { !showTreatmentOptions && (
          <div className='dropdown-heading' onClick={toggleTreatmentOptions}>
            <b>Treatment Options </b>
            <b>&#x25BE;</b>
          </div>
          
        ) }
        { showTreatmentOptions && (
          <div className='dropdown-content'>
            <div className='dropdown-heading' onClick={toggleTreatmentOptions}>
            <b>Treatment Options </b>
            <b>&#x25B4;</b>
          </div>
            <div className='dropdown-text'>{ parse(TREATMENT_OPTIONS) }</div>
        </div>
        ) }
      </div>
      <div className='dropdown'>
        { !showAdditionalInfo && (
          <div className='dropdown-heading' onClick={toggleAdditionalInfo}><b>Additional Information </b><b>&#x25BE;</b> </div>
        ) }
        { showAdditionalInfo && (
          <div className='dropdown-content'>
             <div className='dropdown-heading' onClick={toggleAdditionalInfo}><b>Additional Information </b><b>&#x25B4;</b> </div>
            <div className='dropdown-text'>{ parse(ADDITIONAL_INFO) }</div>
          </div>
        ) }
      </div>
    </div>
  )
}

export default InfoPanel
