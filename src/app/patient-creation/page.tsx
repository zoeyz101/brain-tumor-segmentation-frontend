'use client';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './patient-creation.css';
import * as CONSTANTS from '../constants';

export default function Page() {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    createPatient();
    router.push(CONSTANTS.SEGMENTATION);
  }

  function createPatient() {
      console.log('Sending patient creation request');
      axios
        .get(CONSTANTS.API + CONSTANTS.EXAMPLES)
        .then((result) => console.log('Examples: ' + result))
        .catch((error) => console.log(error));
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    file: null,
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData({ ...formData, file: event.target.files[0] });
    }
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }
    
  return(
    <div className='create-patient'>
      <h1>Create New Patient</h1>
      <form className="content-center w-full">
        <div className="patient-row">
          <div className="form-names">
            <label htmlFor="first-name">
              First Name
            </label>
            <input id="first-name" type="text"/>
          </div>
          <div className="form-names">
            <label htmlFor="last-name">
              Last Name
            </label>
            <input id="last-name" type="text"/>
        </div>
        </div>
        <div className="patient-row">
            <label htmlFor="email">
              Email
            </label>
            <input id="email" type="text"/>
        </div>
        <div className="patient-row">
          <label htmlFor='dob'>
            Date of Birth
          </label>
          <input
            type='date'
            id='dob'
            aria-label='Date of Birth'
            name='dob'
            value={ formData.dob }
            onChange={ handleChange }
          />
        </div>
        <div className='patient-row'>
          <label htmlFor='imageUpload'>
            Upload MRI Image
          </label>
          <input type='file' id='imageUpload' />
        </div>
        <button>
          Create Patient
        </button>
      </form>
    </div>
  )
}

export default Page;
