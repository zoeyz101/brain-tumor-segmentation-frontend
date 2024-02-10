'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './patient-creation.css';

function createPatient() {
  console.log('Sending patient creation request');
}

function CreatePatientForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createPatient();
    router.push('/physician-view');
  }
  
  return (
    <form onSubmit={ handleSubmit }>
      <div className='row-auto mb-3'>
        <div className='col-auto'>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          aria-label='First Name'
          name='firstName'
          value={ formData.firstName }
          onChange={ handleChange }
        />
        </div>
        <div className='col-auto'>
        <label htmlFor='lastName'>Last Name: </label>
        <input
          type='text'
          id='lastName'
          placeholder=' Last Name'
          aria-label='Last Name'
          name='lastName'
          value={ formData.lastName }
          onChange={ handleChange }
        />
        </div>
      </div>
      <div className='row-auto mb-3'>
        <label htmlFor='email'>Email Address: </label>
        <input
          type='email'
          id='email'
          placeholder='Patient Email Address'
          aria-label='Patient Email Address'
          name='email'
          value={ formData.email }
          onChange={ handleChange }
        />
      </div>
      <div className='row-auto mb-3'>
        <label htmlFor='dob'>Date of Birth: </label>
        <input
          type='date'
          id='dob'
          aria-label='Date of Birth'
          name='dob'
          value={ formData.dob }
          onChange={ handleChange }
        />
      </div>
      <div className='row-auto mb-3'>
        <label htmlFor='imageUpload'>Upload MRI Images: </label>
        <input type='file' id='imageUpload' />
      </div>
      <div className = 'row-auto'>
        <input type='submit' className='create-patient' value='Create Patient' />
      </div>
    </form>
  )
}

export default function Page() {
  return <div className='w-100'>
    <h1>Create New Patient</h1>
    <div className='flex justify-center'>{ CreatePatientForm() }</div>
  </div>
}