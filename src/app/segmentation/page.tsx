
import React from 'react';
import Image from 'next/image';
import './segmentation.css'

var img_seg = require('../../assets/tumor.jpg');
var img_nonseg = require('../../assets/tumor.jpg');

export default function Page() {
  return <div>
    <h1>Approve Segmentation Images</h1>
    <div className='flex justify-center mb-7' id='seg-preview'>
      <input type='button' className='arrow-btn' value='&laquo;' aria-label='Previous' />
      <Image src={img_nonseg} width={500} alt='mri_nonseg' aria-label='Non-segmented MRI' />
      <Image src={img_seg} width={500} alt='mri_seg' aria-label='Segmented MRI' />
      <input type='button' value='&raquo;' aria-label='Next' />
    </div>
    <div className='flex justify-center'>
      <input type='button' value='Approve Segmentation' aria-label='Approve' />
    </div>
  </div>
}