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

export const filenames = [
    '36444280',
    '36444294',
    '36444308',
    '36444322',
    '36444336',
    '36444350',
    '36444364',
    '36444378',
    '36444392',
    '36444406',
    '36444434',
    '36444448',
    '36444462',
    '36444476',
    '36444490',
    '36444504',
    '36444518',
    '36444532',
    '36746856',
];

export const files = filenames.map(filename => {
    return `https://cdn.rawgit.com/FNNDSC/data/master/dicom/adi_brain/${filename}`;
});

const filenames2 = [
    '36747136',
    '36747150',
    '36747164',
    '36747178',
    '36747192',
    '36747206',
    '36747220',
    '36747234',
    '36747248',
    '36747262',
    '36747276',
    '36747290',
    '36747304',
    '36747318',
    '36747332',
    '36747346',
    '36747360',
    '36747374',
    '36747388',
    '36747402',
    '36747416',
    '36747430',
    '36747444',
    '36747458',
    '36747472',
    '36747486',
    '36747500',
    '36747514',
    '36747528',
    '36747542',
    '36747556',
    '36747570',
    '36747584',
    '36747598',
    '36747612',
    '36747626',
    '36747640',
    '36747654',
    '36747668',
    '36747682',
    '36747696',
    '36747710',
    '36747724',
    '36747738',
    '36747752',
    '36747766',
    '36747780',
    '36747794',
    '36747808',
    '36747822',
    '36747836',
    '36747850',
    '36747864',
    '36747878',
    '36747892',
    '36747906',
    '36747920',
    '36747934',
    '36747948',
    '36747962',
    '36747976',
    '36747990',
    '36748004',
    '36748018',
    '36748032',
    '36748046',
    '36748060',
    '36748074',
    '36748088',
    '36748102',
    '36748116',
    '36748130',
    '36748144',
    '36748158',
    '36748172',
    '36748186',
    '36748578',
    '36748592',
    '36748606',
    '36748620',
    '36748634',
    '36748648',
    '36748662',
    '36748676',
    '36748690',
    '36748704',
    '36748718',
    '36748732',
    '36748746',
    '36748760',
    '36748774',
    '36748788',
    '36748802',
    '36748816',
    '36748830',
    '36748844',
    '36748858',
    '36748872',
    '36748886',
    '36748900',
    '36748914',
    '36748928',
    '36748942',
    '36748956',
    '36748970',
    '36748984',
    '36748998',
    '36749012',
    '36749026',
    '36749040',
    '36749054',
    '36749068',
    '36749082',
    '36749096',
    '36749110',
    '36749124',
    '36749138',
    '36749152',
    '36749166',
    '36749180',
    '36749194',
    '36749208',
    '36749222',
    '36749236',
    '36749250',
    '36749264',
    '36749278',
    '36749292',
    '36749306',
    '36749320',
    '36749334',
    '36749348',
    '36749362',
    '36749376',
    '36749390',
    '36749404',
    '36749418',
    '36749446',
    '36749460',
    '36749474',
    '36749488',
    '36749502',
    '36749516',
    '36749530',
    '36749544',
    '36749558',
    '36749572',
    '36749586',
    '36749600',
    '36749614',
    '36749628',
    '36749642',
    '36749656',
    '36749670',
    '36749684',
    '36749698',
    '36749712',
    '36749726',
    '36749740',
    '36749754',
    '36749768',
    '36749782',
    '36749796',
    '36749810',
    '36749824',
    '36749838',
    '36749852',
    '36749866',
    '36749880',
    '36749894',
    '36749908',
    '36749922',
    '36749936',
    '36749950',
    '36749964',
]   

export const files2 = filenames2.map(filename => {
    return `https://cdn.rawgit.com/FNNDSC/data/master/dicom/adi_brain/${filename}`;
});

export const stlModel = 'https://cdn.rawgit.com/FNNDSC/data/master/stl/adi_brain/WM.stl';
  
export const colors = {
    red: 0xff0000,
    blue: 0x0000ff,
    darkGrey: 0x353535,
};

export const niiFile = 'https://cdn.rawgit.com/FNNDSC/data/master/nifti/adi_brain/adi_brain.nii.gz';

export const niiFileTest = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/BraTS-GLI-00000-000-t2f.nii.gz'
export const stlFile = 'https://cdn.rawgit.com/y-ng/capstone_nifti_test/master/BraTS-GLI-00000-000-seg.stl'