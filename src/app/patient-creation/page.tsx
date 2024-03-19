'use client';

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './patient-creation.css';
import * as CONSTANTS from '../constants';

interface Patient {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  mriFile?: File;
}

const PatientForm: React.FC = () => {
  const [patient, setPatient] = useState<Patient>({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    mriFile: undefined,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get('http://localhost:8000/csrf-token/');
        const csrfToken = response.data.csrfToken;
        setCsrfToken(csrfToken);
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setPatient({ ...patient, mriFile: file || undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('firstName', patient.firstName);
      formData.append('lastName', patient.lastName);
      formData.append('email', patient.email);
      formData.append('dob', patient.dob);
      if (patient.mriFile) {
        formData.append('mriFile', patient.mriFile);
      }

      const response = await axios.post('http://localhost:8000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': csrfToken,
        },
      });
      console.log(response.data);
      setMessage('Patient created successfully!');
    } catch (error) {
      console.error('Error submitting patient data:', error);
      setMessage('Error creating patient. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={patient.firstName} onChange={handleInputChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={patient.lastName} onChange={handleInputChange} />
        <input type="email" name="email" placeholder="Email" value={patient.email} onChange={handleInputChange} />
        <input type="date" name="dob" placeholder="Date of Birth" value={patient.dob} onChange={handleInputChange} />
        <input type="file" name="mriFile" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>Create Patient</button>
      </form>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default PatientForm;
/*function createPatient() {
  console.log('Sending patient creation request');
  axios
    .get(CONSTANTS.API + CONSTANTS.EXAMPLES)
    .then((result) => console.log('Examples: ' + result))
    .catch((error) => console.log(error));
}

function CreatePatientForm() {
  const router = useRouter();

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
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createPatient();
    router.push(CONSTANTS.SEGMENTATION);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='row-auto mb-3'>
        <div className='col-auto'>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            id='firstName'
            placeholder='First Name'
            aria-label='First Name'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
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
            value={formData.lastName}
            onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className='row-auto mb-3'>
        <label htmlFor='dob'>Date of Birth: </label>
        <input
          type='date'
          id='dob'
          aria-label='Date of Birth'
          name='dob'
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div className='row-auto mb-3'>
        <label htmlFor='imageUpload'>Upload MRI Images: </label>
        <input type='file' id='imageUpload' onChange={handleFileChange} />
      </div>
      <div className='row-auto'>
        <input type='submit' className='create-patient' value='Create Patient' />
      </div>
    </form>
  );
}

function Page() {
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createPatient();
    router.push(CONSTANTS.SEGMENTATION);
  };

  return (
    <div className='w-100'>
      <h1>Create New Patient</h1>
      <div className='flex justify-center'>{CreatePatientForm()}</div>
    </div>
  );
}

export default Page;
*/
