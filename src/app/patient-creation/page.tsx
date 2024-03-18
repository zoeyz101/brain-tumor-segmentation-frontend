'use client';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormStatus } from "react-dom";
import './patient-creation.css';
import * as CONSTANTS from '../constants';

export default function Page() {
  const router = useRouter();
  const handleSubmit = (event: any) => {
    createPatient();
    router.push(CONSTANTS.SEGMENTATION);
  }

  function createPatient(){
      console.log('Sending patient creation request:', formData );
  //     axios
  //       .get(CONSTANTS.API + CONSTANTS.EXAMPLES)
  //       .then((result) => console.log('Examples: ' + result))
  //       .catch((error) => console.log(error));
  }

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    file: null,
  });
  const [fileData, setFileData] = useState(null);

  function disabled() {
     return (
      formData.firstName.trim() == '' ||
      formData.lastName.trim() == '' ||
      formData.email.trim() == '' ||
      formData.dob.trim() == '' ||
      fileData == null
    )
  };

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files) {
  //     setFormData({ ...formData, file: event.target.files[0] });
  //   }
  // };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({ ...prevState,[name]: value }))
  }

  const handleFiles = (event: any) => {
    const files = event.target.files;
    console.log('Files:', files);
    setFileData(files);
  }
    
  return(
    <div className='create-patient'>
      <h1>Create New Patient</h1>
      <form className="content-center w-full" action={handleSubmit}>
        <div className="patient-row">
          <div className="form-names">
            <label htmlFor="first-name">
              First Name
            </label>
            <input id="first-name" name="firstName" value={formData.firstName} onChange={handleChange} type="text" placeholder='John'/>
          </div>
          <div className="form-names">
            <label htmlFor="last-name">
              Last Name
            </label>
            <input id="last-name" type="text" name="lastName" onChange={handleChange} placeholder='Doe'/>
        </div>
        </div>
        <div className="patient-row">
            <label htmlFor="email">
              Email
            </label>
            <input id="email" type="text" name="email" value={formData.email} onChange={handleChange} placeholder='email@email.com'/>
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
        <div>
          <label htmlFor='imageUpload'>
            Upload MRI Image (nifti)
          </label>
          <input className='image-upload' type='file' id='imageUpload' accept=".nii, .gz" multiple onChange={handleFiles} />
        </div>
        <button disabled={disabled()}>
          Create Patient
        </button>
      </form>
    </div>
  )
}