'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './segmentation.css';
import * as CONSTANTS from '../constants';

export default function ApproveSegButton() {
  const router = useRouter();
  const approveSegmentation = () => {
    router.push(CONSTANTS.PHYSICIAN_VIEW);
  }

  return (
    <button aria-label='Approve' onClick={approveSegmentation}> Approve Segmentation </button> 
  )
}

