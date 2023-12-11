import React from 'react';
import './info-panel.css'

var diagnosis_info = `Type: Pilocytic astrocytoma
Grade: I
Size: Small
The highlighted area in the magnetic resonance image shows the location of the tumour. A pilocytic astrocytoma is a common, slow-growing tumour. This type of tumour is cystic (fluid-filled). Symptoms include headaches, seizures, nausea and vomiting, irritability, drowsiness, and changes in mental activities. These are caused by increased pressure applied by the tumour or blockages of fluid pathways in the brain. Surgical removal is often the only treatment needed in this case.
`

var affected_areas = `[Name of area]
[Typical functions of brain region]
[Implications of damage to this area, specifically how it would affect the patient cognitively, physically, etc.]
`

var treatment_options = `Surgery
Description: Surgery will involve the physical removal of the tumour. A biopsy is often taken at the same time of surgery. This involves taking a tissue sample to better understand the biology of the tumour. This is a safe way to relieve pressure build-up in the brain.
Treatment time: Short
Side effects: Some patients may experience some temporary neurological deficits that should go away after a short period of time, unless there was permanent damage before surgery. Therapy (occupational, speech, etc.) can improve function and the speed of recovery. Regular check-ups after surgery may be required by the physician to monitor brain function and side effects.
Potential outcomes: For most low grade tumours, a surgical resection is the only intervention needed to treat the tumour. As long as treatment is done early, neurological function can be restored if there hasn’t been permanent damage. Regular follow-ups are used to monitor recovery and prevent recurrences. 
Cost: $
`

var additional_info = `If you need more support and have further questions, there are different resources you can use: [List counseling services, financial support services, groups for patients and survivors, etc. and contact info]
Please contact your physician for specific diagnosis and treatment inquiries.
`

function InfoPanel() {
  return (
    <div>
      <div className='dropdown'>
        <b>Diagnosis Information</b>
        <div className='dropdown-content'>
          <p>{ diagnosis_info }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Affected Areas</b>
        <div className='dropdown-content'>
          <p>{ affected_areas }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Treatment Options</b>
        <div className='dropdown-content'>
          <p>{ treatment_options }</p>
        </div>
      </div>
      <div className='dropdown'>
        <b>Additional Information</b>
        <div className='dropdown-content'>
          <p>{ additional_info }</p>
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
