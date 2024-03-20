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
    <div>
      <div className='dropdown'>
        { !showDiagnosisInfo && (
          <b className='dropdown-heading' onClick={toggleDiagnosisInfo}>Diagnosis Information &#x25BE;</b>
        ) }
        { showDiagnosisInfo && (
          <div className='dropdown-content'>
            <b className='dropdown-heading' onClick={toggleDiagnosisInfo}>Diagnosis Information &#x25B4;</b>
            <p>{ parse(DIAGNOSIS_INFO) }</p>
          </div>
        ) }
      </div>
      <div className='dropdown'>
        { !showAffectedAreas && (
          <b className='dropdown-heading' onClick={toggleAffectedAreas}>Affected Areas &#x25BE;</b>
        ) }
        { showAffectedAreas && (
          <div className='dropdown-content'>
            <b className='dropdown-heading' onClick={toggleAffectedAreas}>Affected Areas &#x25B4;</b>
            <p>{ parse(AFFECTED_AREAS) }</p>
        </div>
        ) }
      </div>
      <div className='dropdown'>
        { !showTreatmentOptions && (
          <b className='dropdown-heading' onClick={toggleTreatmentOptions}>Treatment Options &#x25BE;</b>
        ) }
        { showTreatmentOptions && (
          <div className='dropdown-content'>
            <b className='dropdown-heading' onClick={toggleTreatmentOptions}>Treatment Options &#x25B4;</b>
            <p>{ parse(TREATMENT_OPTIONS) }</p>
        </div>
        ) }
      </div>
      <div className='dropdown'>
        { !showAdditionalInfo && (
          <b className='dropdown-heading' onClick={toggleAdditionalInfo}>Additional Information &#x25BE;</b>
        ) }
        { showAdditionalInfo && (
          <div className='dropdown-content'>
            <b className='dropdown-heading' onClick={toggleAdditionalInfo}>Additional Information &#x25B4;</b>
            <p>{ parse(ADDITIONAL_INFO) }</p>
          </div>
        ) }
      </div>
    </div>
  )
}

export default InfoPanel
