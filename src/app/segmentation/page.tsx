'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import './segmentation.css';
import ApproveSegButton from './approveSeg';
import * as CONSTANTS from '../constants';

const VisualizationComponentT1C = dynamic(
  () => import('../services/visualizationCompareT1C'),
  {
    ssr: false,
  }
);

const VisualizationComponentT1N = dynamic(
  () => import('../services/visualizationCompareT1N'),
  {
    ssr: false,
  }
);

const VisualizationComponentT2F = dynamic(
  () => import('../services/visualizationCompareT2F'),
  {
    ssr: false,
  }
);

const VisualizationComponentT2W = dynamic(
  () => import('../services/visualizationCompareT2W'),
  {
    ssr: false,
  }
);

export default function Page() {
  const [modality, setModality] = useState(CONSTANTS.T2F);

  const prevModality = () => {
    if (modality == CONSTANTS.T1C) {
      setModality(CONSTANTS.T2W);
    } else if (modality == CONSTANTS.T1N) {
      setModality(CONSTANTS.T1C);
    } else if (modality == CONSTANTS.T2F) {
      setModality(CONSTANTS.T1N);
    } else if (modality == CONSTANTS.T2W) {
      setModality(CONSTANTS.T2F);
    }
  };
  
  const nextModality = () => {
    if (modality == CONSTANTS.T1C) {
      setModality(CONSTANTS.T1N);
    } else if (modality == CONSTANTS.T1N) {
      setModality(CONSTANTS.T2F);
    } else if (modality == CONSTANTS.T2F) {
      setModality(CONSTANTS.T2W);
    } else if (modality == CONSTANTS.T2W) {
      setModality(CONSTANTS.T1C);
    }
  };

  return <div>
    <h1>Approve Segmentation Images</h1>
    <h2>Modality: {modality}</h2>
    <div className='flex justify-center mb-7' id='seg-preview'>
      <input type='button' className='btn' value='&laquo;' aria-label='Previous' onClick={prevModality} />
      { modality==CONSTANTS.T1C && (
        <VisualizationComponentT1C />
      ) }
      { modality==CONSTANTS.T1N && (
        <VisualizationComponentT1N />
      ) }
      { modality==CONSTANTS.T2F && (
        <VisualizationComponentT2F />
      ) }
      { modality==CONSTANTS.T2W && (
        <VisualizationComponentT2W />
      ) }
      <input type='button' className='btn' value='&raquo;' aria-label='Next' onClick={nextModality} />
    </div>
    <div className='flex justify-center'>
      <ApproveSegButton />
    </div>
  </div>
}