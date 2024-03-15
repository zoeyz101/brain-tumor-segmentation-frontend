import React from 'react';
import dynamic from 'next/dynamic';
import './segmentation.css';
import ApproveSegButton from './approveSeg';

const VisualizationComponent = dynamic(
  () => import('../services/visualizationCompare'),
  {
    ssr: false,
  }
);

export default function Page() {
  return <div>
    <h1>Approve Segmentation Images</h1>
    <div className='flex justify-center mb-7' id='seg-preview'>
      <input type='button' className='arrow-btn' value='&laquo;' aria-label='Previous' />
      <VisualizationComponent />
      <input type='button' value='&raquo;' aria-label='Next' />
    </div>
    <div className='flex justify-center'>
      <ApproveSegButton />
    </div>
  </div>
}