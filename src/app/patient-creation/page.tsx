'use client';

import React from 'react';
import { useState } from 'react';

function CreatePatientForm() {
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
    alert(formData);
  }
  
  return (
    <form onSubmit = { handleSubmit }>
      <label>
        First Name: 
        <input
          type = 'text'
          placeholder = 'First Name'
          name = 'firstName'
          value = { formData.firstName }
          onChange = { handleChange }
        />
      </label>
      <label>
        Last Name: 
        <input
          type = 'text'
          placeholder = ' Last Name'
          name = 'lastName'
          value = { formData.lastName }
          onChange = { handleChange }
        />
      </label>
      <label>
        Email Address: 
        <input
          type = 'email'
          placeholder = 'Patient Email Address'
          name = 'email'
          value = { formData.email }
          onChange = { handleChange }
        />
      </label>
      <label>
        Date of Birth: 
        <input
          type = 'date'
          name = 'dob'
          value = { formData.dob }
          onChange = { handleChange }
        />
      </label>
      <input type = 'button' value = 'Upload MRI Images' />
      <input type = 'submit' value = 'Create Patient' />
    </form>
  )
}

export default function Page() {
  return <div>
    <h1>Create New Patient</h1>
    { CreatePatientForm() }
  </div>
}