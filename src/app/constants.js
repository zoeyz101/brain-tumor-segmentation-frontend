// Define app constants

// Routes to frontend pages
export const PHYSICIAN_VIEW = '/physician-view';
export const SEGMENTATION = '/segmentation';
export const PATIENT_VIEW = '/patient-info';
export const PATIENT_CREATION = '/patient-creation';

// Backend endpoint
export const API = 'http://localhost:8000/';
export const EXAMPLES = 'api/examples/';

// Default text
export const DIAGNOSIS_INFO = `Type: Pilocytic astrocytoma
Grade: I
Size: Small
The highlighted area in the magnetic resonance image shows the location of the tumour. A pilocytic astrocytoma is a common, slow-growing tumour. This type of tumour is cystic (fluid-filled). Symptoms include headaches, seizures, nausea and vomiting, irritability, drowsiness, and changes in mental activities. These are caused by increased pressure applied by the tumour or blockages of fluid pathways in the brain. Surgical removal is often the only treatment needed in this case.
`;

export const AFFECTED_AREAS = `[Name of area]
[Typical functions of brain region]
[Implications of damage to this area, specifically how it would affect the patient cognitively, physically, etc.]
`;

export const TREATMENT_OPTIONS = `Surgery
Description: Surgery will involve the physical removal of the tumour. A biopsy is often taken at the same time of surgery. This involves taking a tissue sample to better understand the biology of the tumour. This is a safe way to relieve pressure build-up in the brain.
Treatment time: Short
Side effects: Some patients may experience some temporary neurological deficits that should go away after a short period of time, unless there was permanent damage before surgery. Therapy (occupational, speech, etc.) can improve function and the speed of recovery. Regular check-ups after surgery may be required by the physician to monitor brain function and side effects.
Potential outcomes: For most low grade tumours, a surgical resection is the only intervention needed to treat the tumour. As long as treatment is done early, neurological function can be restored if there hasn’t been permanent damage. Regular follow-ups are used to monitor recovery and prevent recurrences. 
Cost: $
`;

export const ADDITIONAL_INFO = `If you need more support and have further questions, there are different resources you can use: [List counseling services, financial support services, groups for patients and survivors, etc. and contact info]
Please contact your physician for specific diagnosis and treatment inquiries.
`;
  
export const colors = {
    red: 0xff0000,
    blue: 0x0000ff,
    darkGrey: 0x353535,
};

export const niiFile = 'https://cdn.rawgit.com/FNNDSC/data/master/nifti/adi_brain/adi_brain.nii.gz';

export const niiFileTest0 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00000/BraTS-GLI-00000-000-t2f.nii.gz'
export const stlFile0 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00000/BraTS-GLI-00000-000-seg.stl'
export const wholeStlFile0 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00000/BraTS-GLI-00000-000-seg-whole.stl'
export const coreStlFile0 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00000/BraTS-GLI-00000-000-seg-core.stl'
export const enhancedStlFile0 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00000/BraTS-GLI-00000-000-seg-enhanced.stl'

export const niiFileTest3 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00003/BraTS-GLI-00003-000-t2f.nii.gz'
export const stlFile3 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00003/BraTS-GLI-00003-000-seg.stl'
export const wholeStlFile3 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00003/BraTS-GLI-00003-000-seg-whole.stl'
export const coreStlFile3 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00003/BraTS-GLI-00003-000-seg-core.stl'
export const enhancedStlFile3 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00003/BraTS-GLI-00003-000-seg-enhanced.stl'

export const niiFileTest9 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00009/BraTS-GLI-00009-001-t2f.nii.gz'
export const stlFile9 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00009/BraTS-GLI-00009-001-seg.stl'
export const wholeStlFile9 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00009/BraTS-GLI-00009-001-seg-whole.stl'
export const coreStlFile9 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00009/BraTS-GLI-00009-001-seg-core.stl'
export const enhancedStlFile9 = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/00009/BraTS-GLI-00009-001-seg-enhanced.stl'