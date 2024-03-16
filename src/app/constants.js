// Define app constants

// Routes to frontend pages
export const PHYSICIAN_VIEW = '/physician-view';
export const SEGMENTATION = '/segmentation';
export const PATIENT_VIEW = '/patient-info';
export const PATIENT_CREATION = '/patient-creation';

// Backend endpoint
export const API = 'http://localhost:8000/';
export const EXAMPLES = 'api/examples/';

// Select which default text to use
export const SHOW_OG = true;
export const SHOW_GBM = false;

// Default text for ogliodendrogliomas
export const DIAGNOSIS_INFO_OG = `
<i>Type:</i> Glioma (Oligodendroglioma) 
<i>Grade:</i> I (Low)
<i>Size:</i> Small
Gliomas are a common type of brain tumour found in 33% of patients. Oligodendrogliomas in particular originate from oligodendrocyte cells surrounding neurons in the brain. They make up 2-4% of primary brain tumours. This type is most common in young to middle-aged adult males. The growth of grade II tumours has a tendency to progress over time if left alone for a few years. This type of tumour is associated with a 5 year survival rate of 40-50%. Common symptoms include headache, weakness, problems with speech, and seizures which affect 50-80% of patients. Other effects are nausea, vomiting, vision loss, and dizziness. Symptoms tend to appear slowly and subtly at first. This is a low-grade tumour with relatively slow growth, so there is a high chance of good prognosis/outcomes through treatment. 

`;

export const AFFECTED_AREAS_OG = `
<i>Frontal Lobe:</i> Damage to the frontal lobe can cause behavioural changes. Structures in this area are responsible for reasoning, decision making, problem-solving, and planning. This can contribute to poor concentration and impulsivity. Memory, emotional regulation, social skills, and some motor function may be affected. 

<i>Temporal Lobe:</i> Language processing areas are located in this brain area. Damage can lead to deficits in written and spoken language comprehension. There may also be memory issues, mainly associated with language. Pressure on surrounding areas caused by the tumour may contribute to headaches and nausea.

`;

export const TREATMENT_OPTIONS_OG = `
<b><i>Surgery</i></b>
<i>Description:</i> Surgery will involve the physical removal of the tumour. A biopsy is often taken at the same time of surgery. This involves taking a tissue sample to better understand the biology of the tumour. This is a safe way to relieve pressure build-up in the brain and perform a safe gross resection or partial resection of the tumour.
<i>Treatment Time:</i> Short
<i>Side Effects:</i> Some patients may experience some temporary neurological deficits that should go away after a short period of time, unless there was permanent damage before surgery. Therapy (occupational, speech, etc.) can improve function and the speed of recovery. Regular check-ups after surgery may be required by the physician to monitor brain function and side effects.
<i>Potential Outcomes:</i> For most low grade tumours, a surgical resection is the only intervention needed to treat the tumour. As long as treatment is done early, neurological function can be restored if there hasn’t been permanent damage. Regular follow-ups are used to monitor recovery and prevent recurrences. A radiographic follow-up may be used to conduct another brain scan and ensure the tumour has been treated.
<i>Cost:</i> $

`;

export const ADDITIONAL_INFO_OG = `
If you need more support and have further questions, there are various resources available. For counselling services and support groups, see <a href='https://www.braintumour.ca/category/support-group/'><u>here</u></a>. And financial help can be found <a href='https://cancer.ca/en/living-with-cancer/how-we-can-help/financial-help'><u>here</u></a>. Please contact your physician for specific diagnosis and treatment inquiries.

`;

//Default text for glioblastoma multiformes
export const DIAGNOSIS_INFO_GBM = `
<i>Type:</i> Glioma (Glioblastoma Multiforme or GBM) 
<i>Grade:</i> IV (High)
<i>Size:</i> Large
Gliomas are a common type of brain tumour found in 33% of patients. GBMs are a type of astrocytomas, developed from connective tissue in the brain (e.g., astrocytes, oligodendrocytes). They can be found in both adults and children, commonly affecting the cerebrum. Symptoms include headaches, seizures, personality changes, weakness, numbness, nausea, vomiting, vision loss, and dizziness. Effects tend to appear slowly and subtly at first. GBMs can be malignant and aggressive, with patients having a 5 year survival rate of 5-10%. Treatment is generally used to slow the growth of the tumour and preserve brain function.

`;

export const AFFECTED_AREAS_GBM = `
<i>Frontal Lobe:</i> Damage to the frontal lobe can cause behavioural changes. Structures in this area are responsible for reasoning, decision making, problem-solving, and planning. This can contribute to poor concentration and impulsivity. Memory, emotional regulation, social skills, and some motor function may be affected. 

<i>Temporal Lobe:</i> Language processing areas are located in this brain area. Damage can lead to deficits in written and spoken language comprehension. There may also be memory issues, mainly associated with language. Pressure on surrounding areas caused by the tumour may contribute to headaches and nausea.

<i>Cerebrum and Cerebral Cortex:</i> Irritation in the cerebral cortex caused by cancer cells can lead to seizure. These seizures can either affect one specific location in the brain or spread to both sides. In some cases, damage is related to a loss of senses and problems with thinking or learning.

`;

export const TREATMENT_OPTIONS_GBM = `
<b><i>Surgery</i></b>
<i>Description:</i> Surgery will involve the physical removal of the tumour. A biopsy is often taken at the same time of surgery. This involves taking a tissue sample to better understand the biology of the tumour. This is a safe way to relieve pressure build-up in the brain and perform a safe gross resection or partial resection of the tumour.
<i>Treatment Time:</i> Short
<i>Side Effects:</i> Some patients may experience some temporary neurological deficits that should go away after a short period of time, unless there was permanent damage before surgery. Therapy (occupational, speech, etc.) can improve function and the speed of recovery. Regular check-ups after surgery may be required by the physician to monitor brain function and side effects.
<i>Potential Outcomes:</i> For most low grade tumours, a surgical resection is the only intervention needed to treat the tumour. As long as treatment is done early, neurological function can be restored if there hasn’t been permanent damage. Regular follow-ups are used to monitor recovery and prevent recurrences. A radiographic follow-up may be used to conduct another brain scan and ensure the tumour has been treated.
<i>Cost:</i> $

<b><i>Chemoradiation Therapy</i></b>
<i>Description:</i> After a partial removal of the tumour through surgery, a combination of chemotherapy and radiation therapy will be used to remove cancer cells remaining after the surgery. This is the most common approach for tumours located in sensitive areas of the brain. Chemotherapy uses anticancer drugs to destroy tumour cells while radiotherapy uses high-energy rays to eliminate cancer cells. 
<i>Treatment Time:</i> Long
<i>Side Effects:</i> Fatigue is the most common side effect of chemoradiation because your body is fighting the cancer and repairing cells damaged from the treatment. A reduction of red blood cells and anemia can also contribute to this fatigue. These effects usually have a slow onset as patients adjust to treatment. Temporary hair loss is also common, but hair usually grows back a few months after treatment ends. There may also be skin irritation, itchiness, dryness, redness, and swelling. Medication could cause diarrhea, nausea, vomiting, and loss of appetite. Some patients also experience difficulty with short-term memory and concentration. While some may experience side effects within a few hours, others may not until after several rounds of treatment. Most effects go away after a few months, but there are rare cases of permanent side effects.
<i>Potential Outcomes:</i> With early treatment, neurological function can be maintained if there hasn’t been permanent damage. Chemoradiation can be effective in slowing cancer growth as long as the cancer cells don’t develop a resistance. Regular follow-ups are used to monitor recovery and prevent recurrences. A radiographic follow-up may be used to conduct another brain scan and ensure the tumour has been reduced.
<i>Cost:</i> $$

`;

export const ADDITIONAL_INFO_GBM = `
If you need more support and have further questions, there are various resources available. For counselling services and support groups, see <a href='https://www.braintumour.ca/category/support-group/'><u>here</u></a>. And financial help can be found <a href='https://cancer.ca/en/living-with-cancer/how-we-can-help/financial-help'><u>here</u></a>. Please contact your physician for specific diagnosis and treatment inquiries.

`;

// Constants for AMI renders
export const colors = {
    red: 0xff0000,
    blue: 0x0000ff,
    darkGrey: 0x353535,
};

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