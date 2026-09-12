/**
 * GWS • MULTI-HOSPITAL HEALTHCARE PLATFORM CORE ENGINE
 * Relational Data Model, Public Discovery, Privacy-First Auth,
 * Geolocation Distance Scoring, Doctor Clinical Records & Hospital SaaS.
 */

// Central Multi-Hospital Demo State
const DEFAULT_GWS_STATE = {
  // Global Language ('en' | 'hi' | 'mr')
  language: 'en',

  // Authentication Session
  // Production Note: Production authentication and authorization must be handled server-side.
  currentUser: null, // { role: 'patient'|'doctor'|'admin', id: 'GWS-1024', name: 'Rahul Sharma', email: '...' }

  // Multi-Hospital Database
  hospitals: [
    {
      id: 'H001',
      name: 'Shantideep Multispeciality Hospital',
      city: 'Pune',
      location: 'Senapati Bapat Road, Shivaji Nagar',
      lat: 18.5314,
      lng: 73.8329,
      rating: 4.7,
      reviewCount: 126,
      beds: 250,
      emergencyAvailable: true,
      labAvailable: true,
      pharmacyAvailable: true,
      ambulanceAvailable: true,
      currentOpdWaitMin: 28,
      plan: 'GWS Professional',
      planPrice: '₹30,000/month',
      planStatus: 'ACTIVE',
      phone: '+91 (020) 2600 2400',
      email: 'admin@shantideephospital.org',
      departments: ['Cardiology', 'Orthopaedics', 'General Medicine', 'Paediatrics', 'Neurology', 'Gynaecology'],
      featuredSpecialty: 'Cardiology'
    },
    {
      id: 'H002',
      name: 'Aarogya Care Hospital',
      city: 'Pune',
      location: 'Kothrud Central, Paud Road',
      lat: 18.5074,
      lng: 73.8077,
      rating: 4.6,
      reviewCount: 98,
      beds: 180,
      emergencyAvailable: true,
      labAvailable: true,
      pharmacyAvailable: true,
      ambulanceAvailable: true,
      currentOpdWaitMin: 41,
      plan: 'GWS Professional',
      planPrice: '₹30,000/month',
      planStatus: 'ACTIVE',
      phone: '+91 (020) 2544 1100',
      email: 'info@aarogyacare.org',
      departments: ['Cardiology', 'Neurology', 'General Medicine', 'Oncology'],
      featuredSpecialty: 'Neurology'
    },
    {
      id: 'H003',
      name: 'Lifeline Medical Centre',
      city: 'Pune',
      location: 'Aundh Hospital Road',
      lat: 18.5580,
      lng: 73.8075,
      rating: 4.8,
      reviewCount: 142,
      beds: 120,
      emergencyAvailable: true,
      labAvailable: true,
      pharmacyAvailable: true,
      ambulanceAvailable: true,
      currentOpdWaitMin: 18,
      plan: 'GWS Basic',
      planPrice: '₹10,000/month',
      planStatus: 'ACTIVE',
      phone: '+91 (020) 2729 4400',
      email: 'care@lifelinemedical.org',
      departments: ['Orthopaedics', 'General Medicine', 'Paediatrics', 'Dermatology'],
      featuredSpecialty: 'Orthopaedics'
    },
    {
      id: 'H004',
      name: 'Sahyadri City Hospital',
      city: 'Pune',
      location: 'Deccan Gymkhana, Karve Road',
      lat: 18.5158,
      lng: 73.8418,
      rating: 4.5,
      reviewCount: 84,
      beds: 200,
      emergencyAvailable: true,
      labAvailable: true,
      pharmacyAvailable: true,
      ambulanceAvailable: true,
      currentOpdWaitMin: 35,
      plan: 'GWS Professional',
      planPrice: '₹30,000/month',
      planStatus: 'ACTIVE',
      phone: '+91 (020) 2540 3000',
      email: 'help@sahyadricity.org',
      departments: ['Cardiology', 'Orthopaedics', 'Gastroenterology', 'General Medicine'],
      featuredSpecialty: 'Gastroenterology'
    },
    {
      id: 'H005',
      name: 'Nirmal Healthcare Institute',
      city: 'Pune',
      location: 'Viman Nagar IT Corridor',
      lat: 18.5679,
      lng: 73.9143,
      rating: 4.4,
      reviewCount: 65,
      beds: 150,
      emergencyAvailable: false,
      labAvailable: true,
      pharmacyAvailable: true,
      ambulanceAvailable: false,
      currentOpdWaitMin: 22,
      plan: 'GWS Basic',
      planPrice: '₹10,000/month',
      planStatus: 'ACTIVE',
      phone: '+91 (020) 2663 8800',
      email: 'admin@nirmalhealthcare.org',
      departments: ['General Medicine', 'Paediatrics', 'ENT', 'Ophthalmology'],
      featuredSpecialty: 'Paediatrics'
    },
    {
      id: 'H006',
      name: 'Jeevan Jyoti Hospital',
      city: 'Pune',
      location: 'Hadapsar Magarpatta Road',
      lat: 18.5089,
      lng: 73.9259,
      rating: 4.7,
      reviewCount: 110,
      beds: 220,
      emergencyAvailable: true,
      labAvailable: true,
      pharmacyAvailable: true,
      ambulanceAvailable: true,
      currentOpdWaitMin: 30,
      plan: 'GWS Enterprise',
      planPrice: 'Custom Plan',
      planStatus: 'ACTIVE',
      phone: '+91 (020) 2689 5500',
      email: 'contact@jeevanjyoti.org',
      departments: ['Cardiology', 'Orthopaedics', 'Nephrology', 'Critical Care'],
      featuredSpecialty: 'Nephrology'
    }
  ],

  // Relational Doctors Network
  doctors: [
    {
      doctorId: 'DOC-001',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      name: 'Dr. Arjun Mehta',
      specialization: 'Cardiologist',
      department: 'Cardiology',
      qualifications: 'MBBS, MD, DM (Cardiology), FSCAI',
      experienceYears: 12,
      room: 'Room 104, 1st Floor',
      rating: 4.7,
      reviewCount: 126,
      nextAvailable: 'Today, 10:30 AM',
      currentOpdWaitMin: 28,
      consultationFee: '₹500',
      languages: ['English', 'हिन्दी', 'मराठी'],
      opdTimings: '08:30 AM – 01:30 PM'
    },
    {
      doctorId: 'DOC-002',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      name: 'Dr. Neha Shah',
      specialization: 'Orthopaedic Surgeon',
      department: 'Orthopaedics',
      qualifications: 'MBBS, MS (Orthopaedics), MCh (Joint Repl.)',
      experienceYears: 15,
      room: 'Room 208, 2nd Floor',
      rating: 4.8,
      reviewCount: 110,
      nextAvailable: 'Today, 11:00 AM',
      currentOpdWaitMin: 45,
      consultationFee: '₹600',
      languages: ['English', 'हिन्दी', 'मराठी'],
      opdTimings: '09:00 AM – 01:00 PM'
    },
    {
      doctorId: 'DOC-003',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      name: 'Dr. Rohan Patel',
      specialization: 'Consultant Physician',
      department: 'General Medicine',
      qualifications: 'MBBS, MD (General Medicine), DNB',
      experienceYears: 10,
      room: 'Room 112, 1st Floor',
      rating: 4.6,
      reviewCount: 95,
      nextAvailable: 'Today, 10:00 AM',
      currentOpdWaitMin: 20,
      consultationFee: '₹450',
      languages: ['English', 'हिन्दी', 'मराठी'],
      opdTimings: '08:00 AM – 02:00 PM'
    },
    {
      doctorId: 'DOC-004',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      name: 'Dr. Priya Joshi',
      specialization: 'Senior Paediatrician',
      department: 'Paediatrics',
      qualifications: 'MBBS, MD (Paediatrics), DNB',
      experienceYears: 9,
      room: 'Room 105, 1st Floor',
      rating: 4.9,
      reviewCount: 140,
      nextAvailable: 'Today, 11:30 AM',
      currentOpdWaitMin: 15,
      consultationFee: '₹500',
      languages: ['English', 'हिन्दी', 'मराठी'],
      opdTimings: '09:00 AM – 02:00 PM'
    },
    {
      doctorId: 'DOC-005',
      hospitalId: 'H002',
      hospitalName: 'Aarogya Care Hospital',
      name: 'Dr. Vikramaditya Sen',
      specialization: 'Senior Neurologist',
      department: 'Neurology',
      qualifications: 'MBBS, MD, DM (Neurology)',
      experienceYears: 18,
      room: 'Room 302, 3rd Floor',
      rating: 4.8,
      reviewCount: 76,
      nextAvailable: 'Tomorrow, 09:30 AM',
      currentOpdWaitMin: 40,
      consultationFee: '₹700',
      languages: ['English', 'हिन्दी'],
      opdTimings: '10:00 AM – 02:00 PM'
    }
  ],

  // Relational Patients Directory
  patients: [
    {
      patientId: 'GWS-1024',
      name: 'Rahul Sharma',
      age: 42,
      gender: 'Male',
      phone: '+91 98765 43210',
      email: 'patient@demo.com',
      bloodGroup: 'B+ Positive',
      primaryDept: 'Cardiology',
      primaryDoctorId: 'DOC-001',
      primaryHospitalId: 'H001',
      lastVisit: '18 Sep 2026',
      nextAppt: '18 Sep 2026 • 10:30 AM'
    },
    {
      patientId: 'GWS-1032',
      name: 'Amit Patel',
      age: 38,
      gender: 'Male',
      phone: '+91 98220 11223',
      email: 'amit.patel@example.com',
      bloodGroup: 'O+ Positive',
      primaryDept: 'Cardiology',
      primaryDoctorId: 'DOC-001',
      primaryHospitalId: 'H001',
      lastVisit: '15 Sep 2026',
      nextAppt: '15 Sep 2026 • 11:00 AM'
    },
    {
      patientId: 'GWS-1087',
      name: 'Sneha Shah',
      age: 29,
      gender: 'Female',
      phone: '+91 98450 33445',
      email: 'sneha.shah@example.com',
      bloodGroup: 'A+ Positive',
      primaryDept: 'Cardiology',
      primaryDoctorId: 'DOC-001',
      primaryHospitalId: 'H001',
      lastVisit: '12 Sep 2026',
      nextAppt: '—'
    }
  ],

  // Patient Medical History Timeline
  medicalHistory: [
    {
      historyId: 'HIST-001',
      patientId: 'GWS-1024',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-001',
      doctorName: 'Dr. Arjun Mehta',
      department: 'Cardiology',
      date: '18 September 2026',
      complaint: 'Intermittent retrosternal chest discomfort during brisk walking',
      notes: 'Patient reported intermittent chest discomfort. 2D Echo and ECG reviewed, showing normal LV function. Advised Lipid Profile and follow-up in 2 weeks. Low sodium diet prescribed.',
      status: 'Completed'
    },
    {
      historyId: 'HIST-002',
      patientId: 'GWS-1024',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-003',
      doctorName: 'Dr. Rohan Patel',
      department: 'General Medicine',
      date: '10 August 2026',
      complaint: 'Routine annual preventive health consultation',
      notes: 'Routine consultation. Blood pressure measured at 124/82 mmHg. Glycated hemoglobin (HbA1c) 5.9% indicates good glycemic control. Continue regular walking exercise.',
      status: 'Completed'
    },
    {
      historyId: 'HIST-003',
      patientId: 'GWS-1024',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-001',
      doctorName: 'Dr. Arjun Mehta',
      department: 'Cardiology',
      date: '21 July 2026',
      complaint: 'Follow-up consultation for mild exertion breathlessness',
      notes: 'Follow-up consultation. Metformin 500mg and Atorvastatin 20mg tolerated well with zero gastrointestinal side effects.',
      status: 'Completed'
    }
  ],

  // Relational Digital Lab Reports
  labReports: [
    {
      reportId: 'LAB-001',
      patientId: 'GWS-1024',
      patientName: 'Rahul Sharma',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-001',
      doctorName: 'Dr. Arjun Mehta',
      title: 'Complete Blood Count (CBC)',
      category: 'blood',
      date: '18 Sep 2026',
      status: 'Available',
      isNew: true,
      parameters: [
        { name: 'Haemoglobin', value: '13.8 g/dL', normal: '13.0 - 17.0 g/dL' },
        { name: 'Total WBC Count', value: '7,200 /µL', normal: '4,000 - 11,000 /µL' },
        { name: 'Platelet Count', value: '2.45 lakh/µL', normal: '1.50 - 4.50 lakh/µL' },
        { name: 'Total RBC Count', value: '4.8 million/µL', normal: '4.5 - 5.5 million/µL' },
        { name: 'Packed Cell Volume (PCV)', value: '41.2 %', normal: '40.0 - 50.0 %' }
      ]
    },
    {
      reportId: 'LAB-002',
      patientId: 'GWS-1024',
      patientName: 'Rahul Sharma',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-001',
      doctorName: 'Dr. Arjun Mehta',
      title: 'Lipid Profile Screen',
      category: 'blood',
      date: '14 Sep 2026',
      status: 'Available',
      isNew: false,
      parameters: [
        { name: 'Total Cholesterol', value: '184 mg/dL', normal: '< 200 mg/dL' },
        { name: 'HDL Cholesterol', value: '46 mg/dL', normal: '> 40 mg/dL' },
        { name: 'LDL Cholesterol', value: '112 mg/dL', normal: '< 100 mg/dL' },
        { name: 'Triglycerides', value: '142 mg/dL', normal: '< 150 mg/dL' }
      ]
    },
    {
      reportId: 'LAB-003',
      patientId: 'GWS-1024',
      patientName: 'Rahul Sharma',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-003',
      doctorName: 'Dr. Rohan Patel',
      title: 'Thyroid Function Test (TFT)',
      category: 'blood',
      date: '08 Sep 2026',
      status: 'Available',
      isNew: false,
      parameters: [
        { name: 'TSH (Ultrasensitive)', value: '2.45 µIU/mL', normal: '0.40 - 4.20 µIU/mL' },
        { name: 'Free T3', value: '3.1 pg/mL', normal: '2.3 - 4.2 pg/mL' },
        { name: 'Free T4', value: '1.18 ng/dL', normal: '0.80 - 1.80 ng/dL' }
      ]
    },
    {
      reportId: 'LAB-004',
      patientId: 'GWS-1024',
      patientName: 'Rahul Sharma',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-003',
      doctorName: 'Dr. Rohan Patel',
      title: 'Glycated Haemoglobin (HbA1c)',
      category: 'blood',
      date: '03 Sep 2026',
      status: 'Available',
      isNew: false,
      parameters: [
        { name: 'HbA1c', value: '5.9 %', normal: '< 5.7 % Normal, 5.7-6.4 % Prediabetes' },
        { name: 'Estimated Avg Glucose (eAG)', value: '123 mg/dL', normal: '< 140 mg/dL' }
      ]
    },
    {
      reportId: 'LAB-005',
      patientId: 'GWS-1024',
      patientName: 'Rahul Sharma',
      hospitalId: 'H001',
      hospitalName: 'Shantideep Multispeciality Hospital',
      doctorId: 'DOC-001',
      doctorName: 'Dr. Arjun Mehta',
      title: 'Urine Routine & Microscopic',
      category: 'urine',
      date: '20 Sep 2026',
      status: 'Processing',
      isNew: false,
      parameters: []
    }
  ],

  // Active OPD Queue Controller (H001 Shantideep)
  activeDept: 'cardiology',
  averageConsultationTime: 4.2,
  queueStatus: 'ACTIVE', // 'ACTIVE' | 'PAUSED'
  departments: {
    cardiology: {
      name: 'Cardiology OPD',
      doctor: 'Dr. Arjun Mehta',
      room: 'Room 104, 1st Floor',
      prefix: 'A',
      currentServingNum: 109,
      avgWaitPerPatientMin: 4.2,
      status: 'Active',
      queue: [
        { token: 'A-109', name: 'Devji Bhai Solanki', status: 'serving', time: '10:35 AM' },
        { token: 'A-110', name: 'Rajesh Sharma', status: 'next', time: '10:45 AM' },
        { token: 'A-111', name: 'Meena Ben Patel', status: 'waiting', time: '10:50 AM' },
        { token: 'A-112', name: 'Devendra Joshi', status: 'waiting', time: '10:55 AM' },
        { token: 'A-113', name: 'Kavita Sundaram', status: 'waiting', time: '11:00 AM' },
        { token: 'A-114', name: 'Mohd. Zubair Khan', status: 'waiting', time: '11:05 AM' },
        { token: 'A-115', name: 'Pooja Bhatt', status: 'waiting', time: '11:10 AM' },
        { token: 'A-116', name: 'Girish Chandra Vyas', status: 'waiting', time: '11:15 AM' },
        { token: 'A-117', name: 'Rahul Sharma (You)', status: 'waiting', time: '11:20 AM' },
        { token: 'A-118', name: 'Bhavna Ben Shah', status: 'waiting', time: '11:25 AM' },
        { token: 'A-119', name: 'Rameshwar Lal', status: 'waiting', time: '11:30 AM' },
        { token: 'A-120', name: 'Sunita Chauhan', status: 'waiting', time: '11:35 AM' }
      ]
    },
    orthopaedics: {
      name: 'Orthopaedics OPD',
      doctor: 'Dr. Neha Shah',
      room: 'Room 208, 2nd Floor',
      prefix: 'B',
      currentServingNum: 204,
      avgWaitPerPatientMin: 5,
      status: 'Busy',
      queue: [
        { token: 'B-204', name: 'Harish Bhai Parmar', status: 'serving', time: '10:30 AM' },
        { token: 'B-205', name: 'Anita Verma', status: 'next', time: '10:40 AM' },
        { token: 'B-206', name: 'Kishanlal Gupta', status: 'waiting', time: '10:45 AM' }
      ]
    },
    medicine: {
      name: 'General Medicine OPD',
      doctor: 'Dr. Rohan Patel',
      room: 'Room 112, 1st Floor',
      prefix: 'C',
      currentServingNum: 315,
      avgWaitPerPatientMin: 3.8,
      status: 'Heavy',
      queue: [
        { token: 'C-315', name: 'Sureshbhai Rana', status: 'serving', time: '10:38 AM' },
        { token: 'C-316', name: 'Pramila Trivedi', status: 'next', time: '10:42 AM' }
      ]
    },
    paediatrics: {
      name: 'Paediatrics OPD',
      doctor: 'Dr. Priya Joshi',
      room: 'Room 105, 1st Floor',
      prefix: 'D',
      currentServingNum: 402,
      avgWaitPerPatientMin: 4.5,
      status: 'Active',
      queue: [
        { token: 'D-402', name: 'Master Aarav Shah', status: 'serving', time: '10:32 AM' },
        { token: 'D-403', name: 'Baby Diya Mehta', status: 'next', time: '10:45 AM' }
      ]
    }
  },

  // Patient User Token (for Rahul Sharma)
  userToken: {
    token: 'A-117',
    dept: 'cardiology',
    doctor: 'Dr. Arjun Mehta',
    room: 'Room 104, 1st Floor',
    name: 'Rahul Sharma',
    patientId: 'GWS-1024',
    date: '18 Sep 2026',
    timeSlot: '10:30 AM'
  },

  // Medicines Reminders
  medicines: [
    { id: 1, name: 'Metformin 500mg', instructions: 'Take with morning meal', time: '08:00 AM', status: 'taken' },
    { id: 2, name: 'Atorvastatin 20mg', instructions: 'Take post dinner', time: '02:00 PM', status: 'upcoming' },
    { id: 3, name: 'Pantoprazole 40mg', instructions: 'Take 30 mins before dinner', time: '09:00 PM', status: 'upcoming' }
  ],

  // Hospital Audit Log
  auditLog: [
    { time: '10:35:12 AM', text: 'Dr. Arjun Mehta called Token A-109 into Room 104 (Cardiology)' },
    { time: '10:30:45 AM', text: 'Dr. Neha Shah called Token B-204 into Room 208 (Orthopaedics)' },
    { time: '10:28:10 AM', text: 'Dr. Rohan Patel called Token C-314 into Room 112 (General Medicine)' },
    { time: '10:25:00 AM', text: 'Dr. Arjun Mehta completed consultation for Token A-108' }
  ]
};

// --------------------------------------------------------------------------
// Multi-Lingual Dictionaries & i18n Localization Engine
// --------------------------------------------------------------------------
const GWS_TRANSLATIONS = {
  en: {
    global: {
      appName: 'GWS',
      brandTagline: 'Healthcare, connected.',
      emergencyPhone: '24×7 Emergency: +91 (020) 2600 2400 / 108',
      networkStatus: 'Network Status: 6 Hospitals Connected • Live OPD Sync Active',
      nabhNetwork: 'NABH & NABL NETWORK',
      langLabel: 'Lang:',
      signIn: 'Sign In',
      signOut: 'Sign Out',
      resetDemo: 'Reset Demo',
      allHospitals: '← All Hospitals',
      myDashboard: 'My Dashboard',
      switchHospital: 'Switch Selected Hospital:',
      returnHome: 'Platform Home',
      returnPublic: 'Return to Public Platform',
      verifiedNetwork: 'GWS Verified Healthcare Network',
      prototypeBadge: 'College Hackathon Prototype',
      copyright: '© 2026 GWS Platform • Healthcare, connected. All rights reserved.',
      disclaimer: 'Demo platform — all hospitals, patients, doctors and reports shown are fictional.'
    },
    nav: {
      home: 'Home',
      hospitals: 'Find Hospitals',
      doctors: 'Doctors',
      appointments: 'Appointments',
      liveQueue: 'Live Queue',
      reports: 'Lab Reports',
      familyCare: 'Family Care (ICU)',
      business: 'Business Model',
      emergency: '24×7 Emergency',
      medicines: 'Medicines',
      reviews: 'Reviews',
      map: 'Hospital Map',
      registerHospital: 'Register Hospital',
      dashboard: 'Dashboard',
      assignedPatients: 'Assigned Patients',
      patientHistory: 'Patient History',
      hospitalOps: 'Hospital Ops Demo'
    },
    search: {
      whatNeedToday: 'What do you need today?',
      placeholder: 'Search hospitals, doctors or departments (e.g. Shantideep, Cardiology, Dr. Arjun)...',
      puneDefault: '📍 Pune (City Default)',
      mumbai: '📍 Mumbai',
      ahmedabad: '📍 Ahmedabad',
      jamnagar: '📍 Jamnagar',
      surat: '📍 Surat',
      findCare: 'FIND CARE',
      popularNeeds: 'Popular Needs:',
      cardiology: 'Cardiology',
      orthopaedics: 'Orthopaedics',
      generalMedicine: 'General Medicine',
      paediatrics: 'Paediatrics',
      diagnostics: 'Diagnostics / Lab',
      emergencyChip: '🚨 Emergency 24×7',
      useMyLocation: 'Use My Location'
    },
    home: {
      institutionTag: 'GWS DIGITAL HEALTHCARE PLATFORM • 6 CONNECTED HOSPITALS',
      heroTitle: 'Find the right care, without the unnecessary waiting.',
      heroSub: 'Search hospitals, compare availability, book appointments and stay updated throughout your visit.',
      nearbyHospitals: 'Nearby Hospitals',
      connectedNetwork: 'Connected Healthcare Network',
      hospitalDesc: 'Browse connected hospitals, compare live OPD queue wait times, and book confirmed consultations.',
      fullDirectoryBtn: 'Full Directory & Filters →',
      howItWorksLabel: 'End-To-End Digital Healthcare Journey',
      howItWorksTitle: 'How GWS Connects You to Hospital Care',
      howItWorksSub: 'From the moment you realize you need a doctor to your consultation, laboratory reports, and family updates.',
      step1Title: 'Search Nearby Care',
      step1Desc: 'Search by symptom, doctor specialization, department, or hospital name across your city.',
      step2Title: 'Compare Availability',
      step2Desc: 'Compare live OPD queue waiting times, earliest appointment slots, and travel distances side-by-side.',
      step3Title: 'Book & Get Token',
      step3Desc: 'Confirm your slot, receive a digital token, and print department-specific visit checklists.',
      step4Title: 'Stay Connected',
      step4Desc: 'Track your queue in real time, view floor maps, access lab reports, and keep family informed during ICU care.',
      statsHospitals: 'Connected Hospitals',
      statsDoctors: 'Active Specialists',
      statsDepts: 'Clinical Departments',
      statsAppts: 'Appointments Today'
    },
    hospitals: {
      title: 'Find a Hospital',
      subtitle: 'Compare live OPD waiting times, specialist doctors, and travel distances across connected hospitals.',
      verifiedNetwork: 'Verified Hospital Network',
      searchPlaceholder: 'Search hospital, department or doctor...',
      sortRecommended: 'Sort: Recommended',
      sortWait: 'Sort: Shortest OPD Wait ⚡',
      sortNearest: 'Sort: Nearest Distance 📍',
      sortAppt: 'Sort: Earliest Appointment 📅',
      sortRating: 'Sort: Highest Rated ⭐',
      filtersTitle: 'Filter Hospitals',
      reset: 'Reset',
      deptTitle: 'Department / Speciality',
      allDepts: 'All Departments',
      distanceTitle: 'Maximum Distance',
      anyDistance: 'Any Distance',
      within3km: 'Within 3 km',
      within5km: 'Within 5 km',
      within8km: 'Within 8 km',
      waitTitle: 'Max OPD Waiting Time',
      anyWait: 'Any Waiting Time',
      under20min: 'Under 20 Minutes ⚡',
      under30min: 'Under 30 Minutes',
      under45min: 'Under 45 Minutes',
      emergencyOpen: '24×7 Emergency Open',
      ratingTitle: 'Hospital Rating',
      allRatings: 'All Ratings',
      rating45: '★★★★☆ 4.5 & Above',
      rating47: '★★★★★ 4.7 & Above',
      fairSearchGuarantee: 'Rankings on GWS are determined organically by clinical relevance, verified waiting times, and patient proximity.',
      currentWait: 'Current wait: ~{time} min',
      opdWait: 'OPD Waiting Time:',
      nextAvailableAppt: 'Next Available Appointment:',
      departments: 'Departments:',
      viewHospital: 'VIEW HOSPITAL',
      bookAppointment: 'BOOK APPOINTMENT',
      open247: 'Open 24×7 Emergency',
      dayOpd: 'Day OPD',
      kmAway: '{distance} km away',
      reviews: '({count} reviews)',
      ambulanceAvailable: 'Ambulance: {count} Available',
      icuBedsFree: 'ICU: {count} Beds Free',
      noHospitalsFound: 'No hospitals found',
      noHospitalsMatching: 'We couldn\'t find a hospital matching: "{term}"',
      trySearchingFor: 'Try searching for:',
      tipHospitalName: 'Another hospital name (e.g. Shantideep, Lifeline)',
      tipDept: 'Department (e.g. Cardiology, Orthopaedics)',
      tipDoctor: 'Doctor (e.g. Dr. Arjun, Dr. Neha)',
      tipService: 'Service (e.g. Emergency, Diagnostics)',
      tipCity: 'City or area (e.g. Pune, Kothrud, Aundh)',
      clearSearch: 'CLEAR SEARCH',
      hospitalsFound: '{count} Hospital{plural} Found',
      hospitalsAvailable: '{count} Hospitals Available',
      matching: 'Matching: "{term}"'
    },
    hospitalDetails: {
      profileLabel: 'Hospital Profile & Services',
      profileTagline: 'Tertiary Care & Multispeciality Research Centre',
      open247: 'OPEN 24×7',
      switchHospital: 'Switch Selected Hospital:',
      digitalServicesTitle: 'Hospital Digital Services',
      digitalServicesSub: 'Access all patient services provided by this hospital through the GWS digital connection layer.',
      liveOpdQueueTitle: 'LIVE OPD QUEUE',
      liveOpdQueueDesc: 'Track your token & waiting time',
      bookApptTitle: 'BOOK APPOINTMENT',
      bookApptDesc: 'Choose doctor & time slot',
      hospitalMapTitle: 'HOSPITAL MAP',
      hospitalMapDesc: 'Floor plans & indoor navigation',
      labReportsTitle: 'LAB REPORTS',
      labReportsDesc: 'Certified digital pathology sheets',
      medicineRemindersTitle: 'MEDICINE REMINDERS',
      medicineRemindersDesc: 'Daily prescription schedule',
      familyCareTitle: 'FAMILY CARE (ICU)',
      familyCareDesc: 'Authorized patient updates',
      doctorReviewsTitle: 'DOCTOR REVIEWS',
      doctorReviewsDesc: 'Verified patient feedback',
      emergencySosTitle: 'EMERGENCY SOS',
      emergencySosDesc: 'Ambulance & trauma desk',
      specialistDeptsTitle: 'Specialist Departments & Live OPD Queues',
      specialistDeptsSub: 'Live consultation status for all departments in this hospital.',
      tableDept: 'Department',
      tableDoctor: 'Active Specialist',
      tableRoom: 'Room / Location',
      tableServing: 'Now Serving',
      tableWait: 'Est. Wait',
      tableFee: 'Fee',
      tableAction: 'Action',
      bookBtn: 'Book',
      facilitiesTitle: 'Hospital Facilities',
      facility1: '✓ 24×7 Diagnostic Pathology & Radiology Wing',
      facility2: '✓ Cashless TPA Desk (Ayushman Bharat, Star, HDFC ERGO, ICICI Lombard)',
      facility3: '✓ 24×7 In-House Pharmacy & Central Oxygen Supply',
      facility4: '✓ Cardiovascular & Neonatal Intensive Care Units',
      emergencyReadinessTitle: 'Emergency Readiness',
      ambulanceFleet: 'Ambulance Fleet:',
      emergencyStretchers: 'Emergency Stretchers:',
      traumaDesk: 'Trauma Resuscitation Desk: Open 24×7',
      requestAmbulanceBtn: 'Request Ambulance',
      available: '{count} Available',
      ready: '{count} Ready',
      kmAway: '{distance} km away',
      reviews: '({count} reviews)'
    },
    doctors: {
      title: 'Specialist Doctors Directory',
      subtitle: 'Consult verified medical specialists across connected hospitals with live OPD queues and advance appointment booking.',
      verifiedOnline: '{count} VERIFIED SPECIALISTS ONLINE',
      filterByHospital: 'Filter by Hospital:',
      allHospitals: 'All Connected Hospitals',
      specialtyDept: 'Specialty / Department:',
      allSpecialities: 'All Specialties',
      searchDoctorName: 'Search Doctor Name:',
      searchPlaceholder: 'Search doctor name, specialization, department or hospital...',
      experience: '{years} Years Experience',
      room: 'OPD Room:',
      fee: 'Consultation Fee:',
      consultationFee: 'Consultation Fee:',
      languages: 'Languages:',
      nextAvailable: 'Next Available:',
      currentWait: 'OPD Wait:',
      bookConsultation: 'Book Consultation →',
      viewProfile: 'VIEW PROFILE',
      noDoctorsFound: 'No specialist doctors found matching your filter criteria.'
    },
    appointments: {
      title: 'Book Doctor Consultation',
      subtitle: 'Select a hospital, specialist doctor, preferred date and time slot for a confirmed OPD consultation.',
      opdTimings: 'OPD TIMINGS: 08:30 AM – 02:00 PM',
      step1: 'Step 1: Select Hospital',
      step2: 'Step 2: Choose Specialist Consultant',
      step3: 'Step 3: Choose Date & Consultation Slot',
      step4: 'Step 4: Patient Details & Confirmation',
      availableDates: 'Available Dates (September 2026)',
      availableSlots: 'Available Morning Slots',
      today: 'Today',
      fullName: 'Full Patient Name *',
      phone: 'Mobile Number *',
      email: 'Email Address:',
      age: 'Age:',
      gender: 'Gender:',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      symptoms: 'Chief Complaint / Reason for Visit:',
      zeroCharges: 'Zero booking charges. Consultation fee is payable directly at the hospital cash counter.',
      confirmBtn: 'CONFIRM APPOINTMENT & GENERATE TOKEN',
      tokenGenerated: 'Appointment Confirmed!',
      printChecklist: 'Print Visit Checklist',
      tokenSlip: 'Digital OPD Token Slip'
    },
    patient: {
      title: 'Patient Dashboard',
      subtitle: 'Track your token in real time, view serving numbers, and receive instant audio announcements.',
      liveQueueTitle: 'Live OPD Queue Status',
      liveQueueSub: 'Track your token in real time, view serving numbers, and receive instant audio announcements.',
      greeting: 'Good morning, {name}',
      activeVisitHospital: 'Active Visit Hospital:',
      newLabReportAlert: 'NEW LAB REPORT AVAILABLE',
      viewReport: 'View Report',
      slipHeader: 'Live OPD Consultation Token Slip • Powered by GWS',
      yourToken: 'YOUR ASSIGNED OPD TOKEN',
      servingNow: 'Currently Serving',
      patientsAhead: 'Patients Ahead',
      estimatedWait: 'Estimated Wait',
      estimatedRange: 'Estimated range: {range} min',
      activeDepartment: 'Department:',
      consultingDoctor: 'Consulting Doctor:',
      roomNumber: 'OPD Room:',
      refreshQueue: 'Refresh Status',
      voiceAnnouncement: 'Audio Chime Active'
    },
    reports: {
      title: 'Laboratory Reports Across Hospitals',
      subtitle: 'View and download your certified diagnostic test records from any hospital you have visited.',
      privacyNotice: 'Confidential Medical Diagnostic Record',
      filterAll: 'All Reports',
      filterBlood: 'Blood Tests',
      filterUrine: 'Urine Tests',
      filterBiochem: 'Biochemistry & Lipids',
      filterThyroid: 'Thyroid & Hormones',
      searchPlaceholder: 'Search reports by test name or hospital...',
      viewReport: 'View Report',
      processing: 'Processing',
      needHardCopy: 'Need previous hard-copy printouts or sample re-tests?',
      contactLabDesk: 'Contact Lab Desk',
      certifiedNabl: 'NABL ACCREDITED DIGITAL DIAGNOSTIC REPORT',
      parameter: 'Test Parameter',
      value: 'Your Value',
      normalRange: 'Biological Reference Interval',
      printReport: 'Print Report',
      close: 'Close'
    },
    icu: {
      title: 'ICU Patient Care Summary',
      subtitle: 'Transparent, plain-language clinical updates directly recorded by the treating critical care team.',
      liaisonDesk: 'ICU Family Liaison Desk:',
      visitingHours: 'Visiting Hours: 04:30 PM – 05:30 PM',
      callCounselor: 'Call ICU Counselor',
      authorizedFamilyComm: 'Authorized Family Communication',
      underCloseMonitoring: '● UNDER CLOSE MONITORING',
      lastUpdated: 'Last Updated: 10:42 AM Today (Morning Rounds)',
      patientName: 'Patient Name',
      hospitalLocation: 'Hospital & Location',
      primaryIntensivist: 'Primary Intensivist',
      tabOverview: 'Overview',
      tabMedicines: 'Medicines',
      tabConditions: 'Conditions',
      tabUpdates: 'Doctor Updates',
      vitalsTitle: 'Real-Time Patient Vitals',
      plainSummaryTitle: 'Doctor\'s Plain-Language Medical Summary',
      audioSummary: 'Listen to Audio Summary',
      requestCallback: 'Request Doctor Callback',
      urgentHelpline: 'ICU Dedicated Nurse Station: +91 (020) 2600 2404'
    },
    emergency: {
      title: '24×7 Emergency Helplines',
      subtitle: 'For critical or life-threatening situations, dial immediately. Advanced Cardiac Life Support (ACLS) ambulances are on standby across network hospitals.',
      hotline: '24×7 Emergency Hotline:',
      rapidDispatch: 'RAPID EMERGENCY DISPATCH',
      returnHome: 'Return Home',
      directHelpline: 'Direct Helpline (No Login Required)',
      call108: 'Call 108 (National Emergency)',
      nationalAmbulance: 'National Ambulance:',
      policeUniversal: 'Police / Universal:',
      shantideepTrauma: 'Shantideep Trauma Desk:',
      emergencyReadiness: 'Emergency Readiness',
      ambulancesAvailable: 'Ambulances Available',
      emergencyStretchers: 'Emergency Stretchers',
      wheelchairsReady: 'Wheelchairs Ready',
      emergencyDesk: 'Emergency Desk',
      requestAmbulance: 'Dispatch Cardiac Ambulance',
      locationInput: 'Your Current Location / Address:',
      contactNumber: 'Contact Phone Number:',
      patientCondition: 'Patient Condition / Emergency Type:',
      dispatchBtn: 'DISPATCH AMBULANCE NOW 🚨'
    },
    map: {
      title: 'Find Your Way Around the Hospital',
      subtitle: 'Select a floor and click any room or department below to view step-by-step walking directions.',
      indoorGuidance: 'Indoor Hospital Guidance',
      campusHelp: 'CAMPUS HELP: GROUND FLOOR COUNTER 1',
      groundFloor: 'GROUND FLOOR (Reception, Emergency, Pharmacy, Diagnostics)',
      firstFloor: 'FIRST FLOOR (Cardiology, Orthopaedics, Medicine, Paediatrics)',
      secondFloor: 'SECOND FLOOR (ICU Critical Care, Operation Theatres, Inpatient Wards)'
    },
    medicines: {
      title: 'Today\'s Medicine Schedule',
      subtitle: 'Track your prescribed daily dosages, mark medications as taken, and stay on schedule.',
      prescriptionSchedule: 'Prescription Schedule',
      addNewMedicine: '+ Add New Medicine',
      medicalAdvisory: 'Important Medical Advisory: GWS medicine reminders do not provide medical recommendations or alter prescriptions. Only take medications in the exact dosage and frequency prescribed by your consulting doctor. Do not change or stop medicines without consulting your healthcare provider.',
      addPrescribed: 'Add Prescribed Medicine',
      medicineName: 'Medicine Name:',
      dosageInstructions: 'Dosage Instructions:',
      timing: 'Scheduled Time:',
      saveMedicine: 'Save Medicine Schedule'
    },
    reviews: {
      title: 'Doctor Reviews & Ratings',
      subtitle: 'Authentic feedback from patients following OPD consultations and treatments across GWS hospitals.',
      verifiedFeedback: 'Verified Patient Feedback',
      writeReview: '★ Write a Review',
      allSpecialists: 'All Specialists',
      commEmpathy: 'Doctor Communication & Empathy:',
      waitTransparency: 'Waiting Time Transparency (OPD):',
      clinicalCare: 'Clinical Diagnosis & Treatment Care:',
      verifiedVisits: 'Across 1,850+ Verified Visits'
    },
    business: {
      tag: 'STARTUP PITCH & COMMERCIAL MODEL',
      title: '"We don\'t replace hospitals. We connect patients to them."',
      subtitle: 'GWS is a multi-hospital digital healthcare platform. Patients use GWS for free to find care and compare waiting times. Hospitals pay a SaaS subscription to power their digital operations.',
      archLabel: 'Platform Architecture',
      archTitle: 'The GWS Multi-Hospital Connected Model',
      archSub: 'How GWS bridges the gap between patient discovery and hospital operational efficiency.'
    },
    login: {
      title: 'Sign In to GWS',
      patientPortal: 'Patient Portal',
      doctorDesk: 'Doctor Desk',
      hospitalAdmin: 'Hospital Admin',
      patientSub: 'Access your OPD queue token, laboratory reports, and prescription reminders.',
      doctorSub: 'Manage clinical queues, call patients, and review diagnostic charts.',
      hospitalSub: 'Hospital administration, resource allocation, and SaaS subscription.',
      emailLabel: 'Registered Email Address:',
      passLabel: 'Password:',
      rememberSession: 'Remember Session',
      signInPatient: 'Log In as Patient →',
      signInDoctor: 'Log In to Doctor Console →',
      signInHospital: 'Log In to Hospital Portal →'
    },
    footer: {
      forPatients: 'For Patients',
      searchHospitals: 'Search Hospitals',
      findDoctors: 'Find Specialist Doctors',
      bookOpd: 'Book OPD Consultations',
      labReports: 'Diagnostic Lab Reports',
      familyIcu: 'Family ICU Tracker',
      forHospitals: 'For Hospitals & Doctors',
      registerHospital: 'Register Hospital (SaaS)',
      doctorDesk: 'Doctor OPD Desk',
      patientsRegister: 'Doctor Patients Register',
      hospitalAdmin: 'Hospital Admin Dashboard',
      subscriptionPlans: 'Subscription Plans',
      emergencyServices: 'Emergency Services',
      emergencyText: 'Immediate 24×7 casualty and cardiac ambulance dispatch across city network.',
      emergencyHelpline: 'Emergency Helpline',
      nationalEmergency: 'National Emergency: 108 / 112',
      rapidResponse: 'GWS Rapid Response: +91 (020) 2600 2400',
      prototypeBadge: 'College Hackathon Prototype',
      copyright: '© 2026 GWS Platform • Healthcare, connected. All rights reserved.',
      disclaimer: 'Demo platform — all hospitals, patients, doctors and reports shown are fictional.'
    }
  },
  hi: {
    global: {
      appName: 'GWS',
      brandTagline: 'स्वास्थ्य सेवाएं, अब एक साथ जुड़ी हुई।',
      emergencyPhone: '24×7 आपातकालीन: +91 (020) 2600 2400 / 108',
      networkStatus: 'नेटवर्क स्थिति: 6 अस्पताल जुड़े हुए हैं • लाइव OPD सिंक सक्रिय',
      nabhNetwork: 'NABH एवं NABL प्रमाणित नेटवर्क',
      langLabel: 'भाषा:',
      signIn: 'साइन इन',
      signOut: 'लॉग आउट',
      resetDemo: 'डेमो रीसेट',
      allHospitals: '← सभी अस्पताल',
      myDashboard: 'मेरा डैशबोर्ड',
      switchHospital: 'चुना हुआ अस्पताल बदलें:',
      returnHome: 'प्लेटफ़ॉर्म होम',
      returnPublic: 'सार्वजनिक प्लेटफ़ॉर्म पर लौटें',
      verifiedNetwork: 'GWS सत्यापित हेल्थकेयर नेटवर्क',
      prototypeBadge: 'कॉलेज हैकथॉन प्रोटोटाइप',
      copyright: '© 2026 GWS प्लेटफ़ॉर्म • स्वास्थ्य सेवाएं, अब एक साथ जुड़ी हुई।',
      disclaimer: 'डेमो प्लेटफ़ॉर्म — दिखाए गए सभी अस्पताल, मरीज, डॉक्टर और रिपोर्ट काल्पनिक हैं।'
    },
    nav: {
      home: 'होम',
      hospitals: 'अस्पताल खोजें',
      doctors: 'डॉक्टर्स',
      appointments: 'अपॉइंटमेंट',
      liveQueue: 'लाइव कतार स्थिति',
      reports: 'लैब रिपोर्ट्स',
      familyCare: 'पारिवारिक देखभाल (ICU)',
      business: 'बिजनेस मॉडल',
      emergency: '24×7 आपातकालीन',
      medicines: 'दवाइयां',
      reviews: 'समीक्षाएं',
      map: 'अस्पताल नक्शा',
      registerHospital: 'अस्पताल पंजीकरण',
      dashboard: 'डैशबोर्ड',
      assignedPatients: 'आवंटित मरीज',
      patientHistory: 'मरीज इतिहास',
      hospitalOps: 'अस्पताल संचालन डेमो'
    },
    search: {
      whatNeedToday: 'आज आपको किस स्वास्थ्य सेवा की आवश्यकता है?',
      placeholder: 'अस्पताल, डॉक्टर या विभाग खोजें (उदा. शांतिदीप, कार्डियोलॉजी, डॉ. अर्जुन)...',
      puneDefault: '📍 पुणे (डिफ़ॉल्ट शहर)',
      mumbai: '📍 मुंबई',
      ahmedabad: '📍 अहमदाबाद',
      jamnagar: '📍 जामनगर',
      surat: '📍 सूरत',
      findCare: 'सेवा खोजें',
      popularNeeds: 'प्रमुख आवश्यकताएं:',
      cardiology: 'हृदय रोग (Cardiology)',
      orthopaedics: 'हड्डी रोग (Orthopaedics)',
      generalMedicine: 'सामान्य चिकित्सा (General Medicine)',
      paediatrics: 'शिशु रोग (Paediatrics)',
      diagnostics: 'जांच / लैब',
      emergencyChip: '🚨 24×7 आपातकालीन',
      useMyLocation: 'मेरा स्थान उपयोग करें'
    },
    home: {
      institutionTag: 'GWS डिजिटल हेल्थकेयर प्लेटफ़ॉर्म • 6 जुड़े हुए अस्पताल',
      heroTitle: 'सही स्वास्थ्य सेवा पाएं, बिना किसी अनावश्यक प्रतीक्षा के।',
      heroSub: 'अस्पताल खोजें, उपलब्धता की तुलना करें, अपॉइंटमेंट बुक करें और अपनी पूरी विज़िट के दौरान अपडेट रहें।',
      nearbyHospitals: 'नजदीकी अस्पताल',
      connectedNetwork: 'संबद्ध हेल्थकेयर नेटवर्क',
      hospitalDesc: 'जुड़े हुए अस्पतालों को देखें, लाइव OPD कतार प्रतीक्षा समय की तुलना करें और परामर्श बुक करें।',
      fullDirectoryBtn: 'पूरी निर्देशिका और फ़िल्टर देखें →',
      howItWorksLabel: 'संपूर्ण डिजिटल हेल्थकेयर यात्रा',
      howItWorksTitle: 'GWS आपको अस्पताल सेवाओं से कैसे जोड़ता है',
      howItWorksSub: 'डॉक्टर की आवश्यकता महसूस होने से लेकर परामर्श, लैब रिपोर्ट और परिवार के अपडेट तक।',
      step1Title: 'नजदीकी अस्पताल खोजें',
      step1Desc: 'अपने शहर में लक्षण, डॉक्टर विशेषज्ञता, विभाग या अस्पताल के नाम से खोजें।',
      step2Title: 'उपलब्धता की तुलना करें',
      step2Desc: 'लाइव OPD कतार प्रतीक्षा समय, सबसे प्रारंभिक अपॉइंटमेंट स्लॉट और दूरी की साथ-साथ तुलना करें।',
      step3Title: 'बुक करें और टोकन पाएं',
      step3Desc: 'अपना स्लॉट कन्फर्म करें, डिजिटल टोकन प्राप्त करें और विज़िट चेकलिस्ट प्रिंट करें।',
      step4Title: 'हमेशा जुड़े रहें',
      step4Desc: 'वास्तविक समय में अपनी कतार ट्रैक करें, फ्लोर मैप देखें, लैब रिपोर्ट पाएं और ICU अपडेट साझा करें।',
      statsHospitals: 'जुड़े हुए अस्पताल',
      statsDoctors: 'सक्रिय विशेषज्ञ',
      statsDepts: 'क्लिनिकल विभाग',
      statsAppts: 'आज की अपॉइंटमेंट्स'
    },
    hospitals: {
      title: 'अस्पताल खोजें',
      subtitle: 'जुड़े हुए अस्पतालों में लाइव OPD प्रतीक्षा समय, विशेषज्ञ डॉक्टर और यात्रा दूरी की तुलना करें।',
      verifiedNetwork: 'सत्यापित अस्पताल नेटवर्क',
      searchPlaceholder: 'अस्पताल, विभाग या डॉक्टर खोजें...',
      sortRecommended: 'क्रमबद्ध: अनुशंसित (Recommended)',
      sortWait: 'क्रमबद्ध: सबसे कम OPD प्रतीक्षा ⚡',
      sortNearest: 'क्रमबद्ध: सबसे नजदीकी 📍',
      sortAppt: 'क्रमबद्ध: सबसे पहली अपॉइंटमेंट 📅',
      sortRating: 'क्रमबद्ध: उच्चतम रेटिंग ⭐',
      filtersTitle: 'अस्पताल फ़िल्टर',
      reset: 'रीसेट',
      deptTitle: 'विभाग / विशेषज्ञता',
      allDepts: 'सभी विभाग',
      distanceTitle: 'अधिकतम दूरी',
      anyDistance: 'कोई भी दूरी',
      within3km: '3 किमी के भीतर',
      within5km: '5 किमी के भीतर',
      within8km: '8 किमी के भीतर',
      waitTitle: 'अधिकतम OPD प्रतीक्षा समय',
      anyWait: 'कोई भी प्रतीक्षा समय',
      under20min: '20 मिनट से कम ⚡',
      under30min: '30 मिनट से कम',
      under45min: '45 मिनट से कम',
      emergencyOpen: '24×7 आपातकालीन खुली है',
      ratingTitle: 'अस्पताल रेटिंग',
      allRatings: 'सभी रेटिंग',
      rating45: '★★★★☆ 4.5 और अधिक',
      rating47: '★★★★★ 4.7 और अधिक',
      fairSearchGuarantee: 'GWS पर रैंकिंग पूरी तरह क्लिनिकल प्रासंगिकता, सत्यापित प्रतीक्षा समय और दूरी के आधार पर निष्पक्ष रूप से निर्धारित होती है।',
      currentWait: 'वर्तमान प्रतीक्षा: ~{time} मिनट',
      opdWait: 'OPD प्रतीक्षा समय:',
      nextAvailableAppt: 'अगली उपलब्ध अपॉइंटमेंट:',
      departments: 'विभाग:',
      viewHospital: 'अस्पताल विवरण देखें',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
      open247: '24×7 आपातकालीन खुली है',
      dayOpd: 'दिन की OPD',
      kmAway: '{distance} किमी दूर',
      reviews: '({count} समीक्षाएं)',
      ambulanceAvailable: 'एम्बुलेंस: {count} उपलब्ध',
      icuBedsFree: 'ICU: {count} बेड खाली',
      noHospitalsFound: 'कोई अस्पताल नहीं मिला',
      noHospitalsMatching: 'खोज के अनुरूप कोई अस्पताल नहीं मिला: "{term}"',
      trySearchingFor: 'कृपया निम्न में से खोजें:',
      tipHospitalName: 'अन्य अस्पताल का नाम (उदा. शांतिदीप, लाइफलाइन)',
      tipDept: 'विभाग (उदा. कार्डियोलॉजी, ऑर्थोपेडिक्स)',
      tipDoctor: 'डॉक्टर का नाम (उदा. डॉ. अर्जुन, डॉ. नेहा)',
      tipService: 'सेवा (उदा. आपातकालीन, डायग्नोस्टिक्स)',
      tipCity: 'शहर या क्षेत्र (उदा. पुणे, कोथरुड, औंध)',
      clearSearch: 'खोज साफ़ करें',
      hospitalsFound: '{count} अस्पताल मिले',
      hospitalsAvailable: '{count} अस्पताल उपलब्ध',
      matching: 'खोज परिणाम: "{term}"'
    },
    hospitalDetails: {
      profileLabel: 'अस्पताल प्रोफ़ाइल और सेवाएं',
      profileTagline: 'टर्शियरी केयर एवं मल्टीस्पेशलिटी रिसर्च सेंटर',
      open247: '24×7 खुला है',
      switchHospital: 'चुना हुआ अस्पताल बदलें:',
      digitalServicesTitle: 'अस्पताल डिजिटल सेवाएं',
      digitalServicesSub: 'GWS डिजिटल प्रणाली के माध्यम से अस्पताल की सभी रोगी सेवाओं तक पहुंचें।',
      liveOpdQueueTitle: 'लाइव OPD कतार',
      liveOpdQueueDesc: 'अपना टोकन और प्रतीक्षा समय ट्रैक करें',
      bookApptTitle: 'अपॉइंटमेंट बुक करें',
      bookApptDesc: 'डॉक्टर और समय स्लॉट चुनें',
      hospitalMapTitle: 'अस्पताल नक्शा',
      hospitalMapDesc: 'फ्लोर प्लान और इनडोर नेविगेशन',
      labReportsTitle: 'लैब रिपोर्ट्स',
      labReportsDesc: 'प्रमाणित डिजिटल पैथोलॉजी शीट',
      medicineRemindersTitle: 'दवाइयां रिमाइंडर',
      medicineRemindersDesc: 'दैनिक दवा पर्ची समय सारणी',
      familyCareTitle: 'पारिवारिक देखभाल (ICU)',
      familyCareDesc: 'अधिकृत रोगी स्वास्थ्य अपडेट',
      doctorReviewsTitle: 'डॉक्टर समीक्षाएं',
      doctorReviewsDesc: 'सत्यापित रोगी प्रतिक्रियाएं',
      emergencySosTitle: 'आपातकालीन SOS',
      emergencySosDesc: 'एम्बुलेंस एवं ट्रॉमा डेस्क',
      specialistDeptsTitle: 'विशेषज्ञ विभाग एवं लाइव OPD कतारें',
      specialistDeptsSub: 'इस अस्पताल के सभी विभागों की लाइव परामर्श स्थिति।',
      tableDept: 'विभाग',
      tableDoctor: 'सक्रिय विशेषज्ञ',
      tableRoom: 'कमरा / स्थान',
      tableServing: 'वर्तमान टोकन',
      tableWait: 'अनुमानित प्रतीक्षा',
      tableFee: 'शुल्क',
      tableAction: 'कार्रवाई',
      bookBtn: 'बुक करें',
      facilitiesTitle: 'अस्पताल सुविधाएं',
      facility1: '✓ 24×7 डायग्नोस्टिक पैथोलॉजी और रेडियोलॉजी विंग',
      facility2: '✓ कैशलेस TPA डेस्क (आयुष्मान भारत, स्टार, HDFC ERGO, ICICI लोम्बार्ड)',
      facility3: '✓ 24×7 इन-हाउस फार्मेसी एवं सेंट्रल ऑक्सीजन सप्लाई',
      facility4: '✓ कार्डियोवैस्कुलर एवं नवजात शिशु गहन चिकित्सा इकाई (NICU)',
      emergencyReadinessTitle: 'आपातकालीन तत्परता',
      ambulanceFleet: 'एम्बुलेंस फ्लीट:',
      emergencyStretchers: 'आपातकालीन स्ट्रेचर:',
      traumaDesk: 'ट्रॉमा रिससिटेशन डेस्क: 24×7 खुला',
      requestAmbulanceBtn: 'एम्बुलेंस का अनुरोध करें',
      available: '{count} उपलब्ध',
      ready: '{count} तैयार',
      kmAway: '{distance} किमी दूर',
      reviews: '({count} समीक्षाएं)'
    },
    doctors: {
      title: 'विशेषज्ञ डॉक्टर्स निर्देशिका',
      subtitle: 'जुड़े हुए अस्पतालों के सत्यापित चिकित्सा विशेषज्ञों से परामर्श लें, लाइव OPD कतार देखें और समय बुक करें।',
      verifiedOnline: '{count} सत्यापित विशेषज्ञ ऑनलाइन',
      filterByHospital: 'अस्पताल द्वारा फ़िल्टर करें:',
      allHospitals: 'सभी जुड़े हुए अस्पताल',
      specialtyDept: 'विशेषज्ञता / विभाग:',
      allSpecialities: 'सभी विशेषताएं',
      searchDoctorName: 'डॉक्टर का नाम खोजें:',
      searchPlaceholder: 'डॉक्टर का नाम, विशेषता, विभाग या अस्पताल खोजें...',
      experience: '{years} वर्ष का अनुभव',
      room: 'OPD कमरा:',
      fee: 'परामर्श शुल्क:',
      consultationFee: 'परामर्श शुल्क:',
      languages: 'भाषाएं:',
      nextAvailable: 'अगली उपलब्धता:',
      currentWait: 'OPD प्रतीक्षा:',
      bookConsultation: 'परामर्श बुक करें →',
      viewProfile: 'प्रोफ़ाइल देखें',
      noDoctorsFound: 'आपके फ़िल्टर के अनुसार कोई विशेषज्ञ डॉक्टर नहीं मिला।'
    },
    appointments: {
      title: 'डॉक्टर परामर्श बुक करें',
      subtitle: 'अस्पताल, विशेषज्ञ डॉक्टर, पसंदीदा तिथि और समय स्लॉट चुनें। डिजिटल टोकन पर्ची तुरंत प्राप्त करें।',
      opdTimings: 'OPD समय: सुबह 08:30 – दोपहर 02:00',
      step1: 'चरण 1: अस्पताल चुनें',
      step2: 'चरण 2: विशेषज्ञ परामर्शदाता चुनें',
      step3: 'चरण 3: तिथि और समय स्लॉट चुनें',
      step4: 'चरण 4: मरीज का विवरण और पुष्टि',
      availableDates: 'उपलब्ध तिथियां (सितंबर 2026)',
      availableSlots: 'उपलब्ध सुबह के स्लॉट',
      today: 'आज',
      fullName: 'मरीज का पूरा नाम *',
      phone: 'मोबाइल नंबर *',
      email: 'ईमेल पता:',
      age: 'उम्र:',
      gender: 'लिंग:',
      male: 'पुरुष',
      female: 'महिला',
      other: 'अन्य',
      symptoms: 'मुख्य लक्षण / परामर्श का कारण:',
      zeroCharges: 'शून्य बुकिंग शुल्क। परामर्श शुल्क का भुगतान सीधे अस्पताल कैश काउंटर पर किया जाता है।',
      confirmBtn: 'अपॉइंटमेंट कन्फर्म करें और टोकन पाएं',
      tokenGenerated: 'अपॉइंटमेंट सफलतापूर्वक कन्फर्म हुई!',
      printChecklist: 'विज़िट चेकलिस्ट प्रिंट करें',
      tokenSlip: 'डिजिटल OPD टोकन पर्ची'
    },
    patient: {
      title: 'मरीज डैशबोर्ड',
      subtitle: 'वास्तविक समय में अपना टोकन ट्रैक करें, सेवारत संख्या देखें और ऑडियो सूचनाएं सुनें।',
      liveQueueTitle: 'लाइव OPD कतार स्थिति',
      liveQueueSub: 'वास्तविक समय में अपना टोकन ट्रैक करें, वर्तमान टोकन संख्या देखें और ऑडियो सूचनाएं सुनें।',
      greeting: 'शुभ प्रभात, {name}',
      activeVisitHospital: 'सक्रिय विज़िट अस्पताल:',
      newLabReportAlert: 'नई लैब रिपोर्ट उपलब्ध है',
      viewReport: 'रिपोर्ट देखें',
      slipHeader: 'लाइव OPD परामर्श टोकन पर्ची • GWS द्वारा संचालित',
      yourToken: 'आपका आवंटित OPD टोकन',
      servingNow: 'वर्तमान में सेवारत',
      patientsAhead: 'आपसे आगे मरीज',
      estimatedWait: 'अनुमानित प्रतीक्षा',
      estimatedRange: 'अनुमानित सीमा: {range} मिनट',
      activeDepartment: 'विभाग:',
      consultingDoctor: 'परामर्शदाता डॉक्टर:',
      roomNumber: 'OPD कमरा:',
      refreshQueue: 'स्थिति ताज़ा करें',
      voiceAnnouncement: 'ऑडियो सूचना सक्रिय है'
    },
    reports: {
      title: 'अस्पतालों में प्रयोगशाला रिपोर्ट',
      subtitle: 'अपने द्वारा देखे गए किसी भी अस्पताल से अपनी प्रमाणित जांच रिपोर्ट देखें और डाउनलोड करें।',
      privacyNotice: 'गोपनीय चिकित्सा नैदानिक रिकॉर्ड',
      filterAll: 'सभी रिपोर्ट',
      filterBlood: 'रक्त जांच',
      filterUrine: 'मूत्र जांच',
      filterBiochem: 'बायोकेमिस्ट्री और लिपिड',
      filterThyroid: 'थायराइड और हार्मोन',
      searchPlaceholder: 'जांच के नाम या अस्पताल से रिपोर्ट खोजें...',
      viewReport: 'रिपोर्ट देखें',
      processing: 'प्रक्रिया में',
      needHardCopy: 'पिछली हार्ड-कॉपी प्रिंटआउट या पुनः परीक्षण की आवश्यकता है?',
      contactLabDesk: 'लैब डेस्क से संपर्क करें',
      certifiedNabl: 'NABL प्रमाणित डिजिटल जांच रिपोर्ट',
      parameter: 'जांच पैरामीटर',
      value: 'आपका परिणाम',
      normalRange: 'सामान्य संदर्भ सीमा',
      printReport: 'रिपोर्ट प्रिंट करें',
      close: 'बंद करें'
    },
    icu: {
      title: 'ICU मरीज देखभाल सारांश',
      subtitle: 'गहन चिकित्सा इकाई में भर्ती मरीजों के परिजनों के लिए पारदर्शी, सरल भाषा में क्लिनिकल अपडेट।',
      liaisonDesk: 'ICU पारिवारिक संपर्क डेस्क:',
      visitingHours: 'मुलाकात का समय: शाम 04:30 – 05:30',
      callCounselor: 'ICU काउंसलर से बात करें',
      authorizedFamilyComm: 'अधिकृत पारिवारिक संचार',
      underCloseMonitoring: '● गहन निगरानी में',
      lastUpdated: 'अंतिम अपडेट: आज सुबह 10:42 (मॉर्निंग राउंड्स)',
      patientName: 'मरीज का नाम',
      hospitalLocation: 'अस्पताल और स्थान',
      primaryIntensivist: 'प्रमुख गहन चिकित्सा विशेषज्ञ',
      tabOverview: 'अवलोकन',
      tabMedicines: 'दवाइयां',
      tabConditions: 'स्वास्थ्य स्थिति',
      tabUpdates: 'डॉक्टर अपडेट्स',
      vitalsTitle: 'लाइव वाइटल्स एवं पैरामीटर्स',
      plainSummaryTitle: 'डॉक्टर का सरल भाषा में मेडिकल सारांश',
      audioSummary: 'ऑडियो सारांश सुनें',
      requestCallback: 'डॉक्टर से कॉल का अनुरोध करें',
      urgentHelpline: 'ICU समर्पित नर्स स्टेशन: +91 (020) 2600 2404'
    },
    emergency: {
      title: '24×7 आपातकालीन हेल्पलाइन',
      subtitle: 'गंभीर या जीवन-धमकाने वाली स्थितियों के लिए तुरंत डायल करें। नेटवर्क अस्पतालों में ACLS एम्बुलेंस तैयार हैं।',
      hotline: '24×7 आपातकालीन हॉटलाइन:',
      rapidDispatch: 'त्वरित आपातकालीन प्रेषण',
      returnHome: 'होम पर लौटें',
      directHelpline: 'सीधी हेल्पलाइन (लॉगिन की आवश्यकता नहीं)',
      call108: '108 पर कॉल करें (राष्ट्रीय आपातकाल)',
      nationalAmbulance: 'राष्ट्रीय एम्बुलेंस:',
      policeUniversal: 'पुलिस / सार्वभौमिक:',
      shantideepTrauma: 'शांतिदीप ट्रॉमा डेस्क:',
      emergencyReadiness: 'आपातकालीन तत्परता',
      ambulancesAvailable: 'एम्बुलेंस उपलब्ध',
      emergencyStretchers: 'आपातकालीन स्ट्रेचर',
      wheelchairsReady: 'व्हीलचेयर तैयार',
      emergencyDesk: 'आपातकालीन डेस्क',
      requestAmbulance: 'कार्डियाक एम्बुलेंस भेजें',
      locationInput: 'आपका वर्तमान पता / स्थान:',
      contactNumber: 'संपर्क फोन नंबर:',
      patientCondition: 'रोगी की स्थिति / आपातकाल का प्रकार:',
      dispatchBtn: 'तुरंत एम्बुलेंस भेजें 🚨'
    },
    map: {
      title: 'अस्पताल में अपना रास्ता खोजें',
      subtitle: 'मंजिल चुनें और इनडोर दिशा-निर्देश देखने के लिए नीचे दिए गए किसी भी कमरे पर क्लिक करें।',
      indoorGuidance: 'इनडोर अस्पताल मार्गदर्शन',
      campusHelp: 'परिसर सहायता: ग्राउंड फ्लोर काउंटर 1',
      groundFloor: 'ग्राउंड फ्लोर (रिसेप्शन, आपातकालीन, फार्मेसी, डायग्नोस्टिक्स)',
      firstFloor: 'पहली मंजिल (कार्डियोलॉजी, ऑर्थोपेडिक्स, मेडिसिन, पीडियाट्रिक्स)',
      secondFloor: 'दूसरी मंजिल (ICU क्रिटिकल केयर, ऑपरेशन थियेटर, इनपेशेंट वार्ड)'
    },
    medicines: {
      title: 'आज की दवाइयों की समय सारणी',
      subtitle: 'अपनी निर्धारित दैनिक खुराक ट्रैक करें, ली गई दवा पर टिक करें और समय पर रहें।',
      prescriptionSchedule: 'दवा पर्ची अनुसूची',
      addNewMedicine: '+ नई दवा जोड़ें',
      medicalAdvisory: 'महत्वपूर्ण चिकित्सा सलाह: GWS दवा अनुस्मारक चिकित्सा सिफारिशें प्रदान नहीं करते हैं या नुस्खे नहीं बदलते हैं। केवल अपने परामर्शदाता चिकित्सक द्वारा निर्धारित सटीक खुराक और आवृत्ति में दवाएं लें।',
      addPrescribed: 'निर्धारित दवा जोड़ें',
      medicineName: 'दवा का नाम:',
      dosageInstructions: 'खुराक निर्देश:',
      timing: 'निर्धारित समय:',
      saveMedicine: 'दवा अनुसूची सहेजें'
    },
    reviews: {
      title: 'डॉक्टर समीक्षाएं एवं रेटिंग',
      subtitle: 'GWS अस्पतालों में OPD परामर्श और उपचार के बाद मरीजों की प्रामाणिक प्रतिक्रियाएं।',
      verifiedFeedback: 'सत्यापित रोगी प्रतिक्रियाएं',
      writeReview: '★ समीक्षा लिखें',
      allSpecialists: 'सभी विशेषज्ञ',
      commEmpathy: 'डॉक्टर संवाद एवं संवेदनशीलता:',
      waitTransparency: 'प्रतीक्षा समय पारदर्शिता (OPD):',
      clinicalCare: 'क्लिनिकल निदान एवं उपचार देखभाल:',
      verifiedVisits: '1,850+ से अधिक सत्यापित विज़िट्स'
    },
    business: {
      tag: 'स्टार्टअप पिच एवं वाणिज्यिक मॉडल',
      title: '"हम अस्पतालों को प्रतिस्थापित नहीं करते। हम मरीजों को उनसे जोड़ते हैं।"',
      subtitle: 'GWS एक मल्टी-हॉस्पिटल डिजिटल हेल्थकेयर प्लेटफ़ॉर्म है। मरीज देखभाल खोजने और प्रतीक्षा समय की तुलना करने के लिए GWS का मुफ्त उपयोग करते हैं। अस्पताल अपने डिजिटल संचालन को सशक्त बनाने के लिए SaaS सदस्यता का भुगतान करते हैं।',
      archLabel: 'प्लेटफ़ॉर्म आर्किटेक्चर',
      archTitle: 'GWS मल्टी-हॉस्पिटल कनेक्टेड मॉडल',
      archSub: 'GWS मरीज खोज और अस्पताल परिचालन दक्षता के बीच की दूरी को कैसे पाटता है।'
    },
    login: {
      title: 'GWS में साइन इन करें',
      patientPortal: 'मरीज पोर्टल',
      doctorDesk: 'डॉक्टर डेस्क',
      hospitalAdmin: 'अस्पताल व्यवस्थापक',
      patientSub: 'अपने OPD कतार टोकन, प्रयोगशाला रिपोर्ट और दवा रिमाइंडर तक पहुंचें।',
      doctorSub: 'क्लिनिकल कतारें प्रबंधित करें, मरीजों को बुलाएं और डायग्नोस्टिक चार्ट की समीक्षा करें।',
      hospitalSub: 'अस्पताल प्रशासन, संसाधन आवंटन और SaaS सदस्यता प्रबंधन।',
      emailLabel: 'पंजीकृत ईमेल पता:',
      passLabel: 'पासवर्ड:',
      rememberSession: 'सत्र याद रखें',
      signInPatient: 'मरीज के रूप में लॉगिन करें →',
      signInDoctor: 'डॉक्टर कंसोल में लॉगिन करें →',
      signInHospital: 'अस्पताल पोर्टल में लॉगिन करें →'
    },
    footer: {
      forPatients: 'मरीजों के लिए',
      searchHospitals: 'अस्पताल खोजें',
      findDoctors: 'विशेषज्ञ डॉक्टर खोजें',
      bookOpd: 'OPD परामर्श बुक करें',
      labReports: 'डायग्नोस्टिक लैब रिपोर्ट',
      familyIcu: 'पारिवारिक ICU ट्रैकर',
      forHospitals: 'अस्पतालों और डॉक्टरों के लिए',
      registerHospital: 'अस्पताल पंजीकृत करें (SaaS)',
      doctorDesk: 'डॉक्टर OPD डेस्क',
      patientsRegister: 'डॉक्टर मरीज रजिस्टर',
      hospitalAdmin: 'अस्पताल एडमिन डैशबोर्ड',
      subscriptionPlans: 'सदस्यता योजनाएं',
      emergencyServices: 'आपातकालीन सेवाएं',
      emergencyText: 'शहर नेटवर्क में तत्काल 24×7 आपातकालीन और कार्डियाक एम्बुलेंस सेवा।',
      emergencyHelpline: 'आपातकालीन हेल्पलाइन',
      nationalEmergency: 'राष्ट्रीय आपातकाल: 108 / 112',
      rapidResponse: 'GWS त्वरित सहायता: +91 (020) 2600 2400',
      prototypeBadge: 'कॉलेज हैकथॉन प्रोटोटाइप',
      copyright: '© 2026 GWS प्लेटफ़ॉर्म • स्वास्थ्य सेवाएं, अब एक साथ जुड़ी हुई।',
      disclaimer: 'डेमो प्लेटफ़ॉर्म — दिखाए गए सभी अस्पताल, मरीज, डॉक्टर और रिपोर्ट काल्पनिक हैं।'
    }
  },
  mr: {
    global: {
      appName: 'GWS',
      brandTagline: 'आरोग्य सेवा, आता एकाच ठिकाणी जोडलेली.',
      emergencyPhone: '२४×७ आपत्कालीन: +91 (020) 2600 2400 / 108',
      networkStatus: 'नेटवर्क स्थिती: ६ रुग्णालये जोडली आहेत • थेट OPD सिंक सुरू',
      nabhNetwork: 'NABH आणि NABL प्रमाणित नेटवर्क',
      langLabel: 'भाषा:',
      signIn: 'साइन इन करा',
      signOut: 'बाहेर पडा',
      resetDemo: 'डेमो रीसेट करा',
      allHospitals: '← सर्व रुग्णालये',
      myDashboard: 'माझे डॅशबोर्ड',
      switchHospital: 'निवडलेले रुग्णालय बदला:',
      returnHome: 'प्लॅटफॉर्म मुख्यपृष्ठ',
      returnPublic: 'सार्वजनिक पोर्टलवर परत जा',
      verifiedNetwork: 'GWS सत्यापित आरोग्य नेटवर्क',
      prototypeBadge: 'कॉलेज हॅकॅथॉन प्रोटोटाइप',
      copyright: '© 2026 GWS प्लॅटफॉर्म • आरोग्य सेवा, आता एकाच ठिकाणी जोडलेली.',
      disclaimer: 'डेमो प्लॅटफॉर्म — दाखवलेली सर्व रुग्णालये, रुग्ण, डॉक्टर आणि अहवाल काल्पनिक आहेत.'
    },
    nav: {
      home: 'मुख्यपृष्ठ',
      hospitals: 'रुग्णालये शोधा',
      doctors: 'तज्ज्ञ डॉक्टर्स',
      appointments: 'भेटीची वेळ (Appointments)',
      liveQueue: 'थेट रांग स्थिती (Live Queue)',
      reports: 'लॅब अहवाल',
      familyCare: 'कौटुंबिक काळजी (ICU)',
      business: 'व्यवसाय मॉडेल',
      emergency: '२४×७ आपत्कालीन सेवा',
      medicines: 'औषधे',
      reviews: 'अभिप्राय',
      map: 'रुग्णालय नकाशा',
      registerHospital: 'रुग्णालय नोंदणी',
      dashboard: 'डॅशबोर्ड',
      assignedPatients: 'नेमून दिलेले रुग्ण',
      patientHistory: 'रुग्ण इतिहास',
      hospitalOps: 'रुग्णालय ऑपरेशन्स डेमो'
    },
    search: {
      whatNeedToday: 'आज तुम्हाला कोणत्या आरोग्य सेवेची गरज आहे?',
      placeholder: 'रुग्णालय, डॉक्टर किंवा विभाग शोधा (उदा. शांतीदीप, कार्डिओलॉजी, डॉ. अर्जुन)...',
      puneDefault: '📍 पुणे (डीफॉल्ट शहर)',
      mumbai: '📍 मुंबई',
      ahmedabad: '📍 अहमदाबाद',
      jamnagar: '📍 जामनगर',
      surat: '📍 सुरत',
      findCare: 'आरोग्य सेवा शोधा',
      popularNeeds: 'प्रमुख गरजा:',
      cardiology: 'हृदयरोग (Cardiology)',
      orthopaedics: 'अस्थिरोग (Orthopaedics)',
      generalMedicine: 'सामान्य औषधोपचार (Medicine)',
      paediatrics: 'बालरोग (Paediatrics)',
      diagnostics: 'तपासणी / लॅब',
      emergencyChip: '🚨 २४×७ आपत्कालीन',
      useMyLocation: 'माझे स्थान वापरा'
    },
    home: {
      institutionTag: 'GWS डिजिटल हेल्थकेअर प्लॅटफॉर्म • ६ जोडलेली रुग्णालये',
      heroTitle: 'योग्य आरोग्य सेवा मिळवा, कोणत्याही विनाकारण प्रतिक्षेशिवाय.',
      heroSub: 'रुग्णालये शोधा, उपलब्धतेची तुलना करा, अपॉइंटमेंट बुक करा आणि संपूर्ण भेटीदरम्यान अद्ययावत राहा.',
      nearbyHospitals: 'जवळची रुग्णालये',
      connectedNetwork: 'जोडलेले आरोग्य नेटवर्क',
      hospitalDesc: 'जोडलेली रुग्णालये पहा, थेट OPD रांगेतील प्रतीक्षा वेळेची तुलना करा आणि खात्रीशीर सल्लामसलत बुक करा.',
      fullDirectoryBtn: 'संपूर्ण यादी आणि फिल्टर्स पहा →',
      howItWorksLabel: 'संपूर्ण डिजिटल आरोग्य प्रवास',
      howItWorksTitle: 'GWS तुम्हाला रुग्णालय सेवेशी कसे जोडते',
      howItWorksSub: 'डॉक्टरांच्या सल्ल्याची गरज भासल्यापासून ते प्रत्यक्ष भेट, लॅब अहवाल आणि कुटुंबासाठी माहितीपर्यंत.',
      step1Title: 'जवळची सेवा शोधा',
      step1Desc: 'तुमच्या शहरातील लक्षणे, डॉक्टरांची विशेषता, विभाग किंवा रुग्णालयाच्या नावाने शोधा.',
      step2Title: 'उपलब्धतेची तुलना करा',
      step2Desc: 'थेट OPD प्रतीक्षा वेळ, सर्वात लवकर मिळणारा अपॉइंटमेंट स्लॉट आणि अंतराची तुलना करा.',
      step3Title: 'बुक करा आणि टोकन मिळवा',
      step3Desc: 'तुमचा स्लॉट निश्चित करा, डिजिटल टोकन मिळवा आणि भेट चेकलिस्ट प्रिंट करा.',
      step4Title: 'सतत जोडलेले राहा',
      step4Desc: 'थेट रांग स्थिती तपासा, मजला नकाशा पहा, लॅब अहवाल मिळवा आणि ICU अद्यतने कुटुंबासोबत शेअर करा.',
      statsHospitals: 'जोडलेली रुग्णालये',
      statsDoctors: 'सक्रिय तज्ज्ञ डॉक्टर्स',
      statsDepts: 'क्लिनिकल विभाग',
      statsAppts: 'आजच्या अपॉइंटमेंट्स'
    },
    hospitals: {
      title: 'रुग्णालये शोधा',
      subtitle: 'जोडलेल्या रुग्णालयांमधील थेट OPD प्रतीक्षा वेळ, तज्ज्ञ डॉक्टर आणि प्रवासाचे अंतर तपासा.',
      verifiedNetwork: 'सत्यापित रुग्णालय नेटवर्क',
      searchPlaceholder: 'रुग्णालय, विभाग किंवा डॉक्टर शोधा...',
      sortRecommended: 'क्रमवारी: शिफारस केलेले (Recommended)',
      sortWait: 'क्रमवारी: कमीत कमी OPD प्रतीक्षा ⚡',
      sortNearest: 'क्रमवारी: सर्वात जवळचे 📍',
      sortAppt: 'क्रमवारी: सर्वात पहिली वेळ 📅',
      sortRating: 'क्रमवारी: सर्वोच्च रेटिंग ⭐',
      filtersTitle: 'रुग्णालय फिल्टर्स',
      reset: 'रीसेट',
      deptTitle: 'विभाग / विशेषोपचार',
      allDepts: 'सर्व विभाग',
      distanceTitle: 'जास्तीत जास्त अंतर',
      anyDistance: 'कोणतेही अंतर',
      within3km: '३ किमीच्या आत',
      within5km: '५ किमीच्या आत',
      within8km: '८ किमीच्या आत',
      waitTitle: 'जास्तीत जास्त OPD प्रतीक्षा वेळ',
      anyWait: 'कोणतीही प्रतीक्षा वेळ',
      under20min: '२० मिनिटांपेक्षा कमी ⚡',
      under30min: '३० मिनिटांपेक्षा कमी',
      under45min: '४५ मिनिटांपेक्षा कमी',
      emergencyOpen: '२४×७ आपत्कालीन सेवा सुरू',
      ratingTitle: 'रुग्णालय रेटिंग',
      allRatings: 'सर्व रेटिंग्ज',
      rating45: '★★★★☆ ४.५ आणि अधिक',
      rating47: '★★★★★ ४.७ आणि अधिक',
      fairSearchGuarantee: 'GWS वरील क्रमवारी पूर्णपणे क्लिनिकल उपयुक्तता, प्रमाणित प्रतीक्षा वेळ आणि अंतरावर निष्पक्षपणे ठरवली जाते.',
      currentWait: 'सध्याची प्रतीक्षा: ~{time} मिनिटे',
      opdWait: 'OPD प्रतीक्षा वेळ:',
      nextAvailableAppt: 'पुढील उपलब्ध अपॉइंटमेंट:',
      departments: 'विभाग:',
      viewHospital: 'रुग्णालय माहिती पहा',
      bookAppointment: 'अपॉइंटमेंट बुक करा',
      open247: '२४×७ आपत्कालीन सुरू',
      dayOpd: 'दिवसाची OPD',
      kmAway: '{distance} किमी अंतर',
      reviews: '({count} अभिप्राय)',
      ambulanceAvailable: 'रुग्णवाहिका: {count} उपलब्ध',
      icuBedsFree: 'ICU: {count} खाटा रिक्त',
      noHospitalsFound: 'कोणतेही रुग्णालय सापडले नाही',
      noHospitalsMatching: 'शोधाशी जुळणारे रुग्णालय सापडले नाही: "{term}"',
      trySearchingFor: 'कृपया खालीलप्रमाणे शोधून पहा:',
      tipHospitalName: 'दुसऱ्या रुग्णालयाचे नाव (उदा. शांतीदीप, लाईफलाईन)',
      tipDept: 'विभाग (उदा. कार्डिओलॉजी, ऑर्थोपेडिक्स)',
      tipDoctor: 'डॉक्टरांचे नाव (उदा. डॉ. अर्जुन, डॉ. नेहा)',
      tipService: 'सुविधा (उदा. आपत्कालीन, लॅब तपासणी)',
      tipCity: 'शहर किंवा परिसर (उदा. पुणे, कोथरूड, औंध)',
      clearSearch: 'शोध रद्द करा',
      hospitalsFound: '{count} रुग्णालये सापडली',
      hospitalsAvailable: '{count} रुग्णालये उपलब्ध',
      matching: 'शोध परिणाम: "{term}"'
    },
    hospitalDetails: {
      profileLabel: 'रुग्णालय माहिती आणि सेवा',
      profileTagline: 'तृतीयक काळजी व मल्टीस्पेशालिटी संशोधन केंद्र',
      open247: '२४×७ सुरू',
      switchHospital: 'निवडलेले रुग्णालय बदला:',
      digitalServicesTitle: 'रुग्णालय डिजिटल सेवा',
      digitalServicesSub: 'GWS डिजिटल प्रणालीद्वारे या रुग्णालयाच्या सर्व रुग्ण सेवा सहज मिळवा.',
      liveOpdQueueTitle: 'थेट OPD रांग',
      liveOpdQueueDesc: 'तुमचा टोकन क्रमांक आणि प्रतीक्षा वेळ तपासा',
      bookApptTitle: 'अपॉइंटमेंट बुक करा',
      bookApptDesc: 'डॉक्टर आणि सोयीची वेळ निवडा',
      hospitalMapTitle: 'रुग्णालय नकाशा',
      hospitalMapDesc: 'मजला रचना आणि अंतर्गत मार्गदर्शक',
      labReportsTitle: 'लॅब अहवाल',
      labReportsDesc: 'प्रमाणित डिजिटल पॅथॉलॉजी अहवाल',
      medicineRemindersTitle: 'औषध आठवण',
      medicineRemindersDesc: 'दैनिक औषध वेळापत्रक',
      familyCareTitle: 'कौटुंबिक काळजी (ICU)',
      familyCareDesc: 'अधिकृत रुग्ण स्थिती अद्यतने',
      doctorReviewsTitle: 'डॉक्टर अभिप्राय',
      doctorReviewsDesc: 'सत्यापित रुग्ण अभिप्राय',
      emergencySosTitle: 'आपत्कालीन SOS',
      emergencySosDesc: 'रुग्णवाहिका व ट्रॉमा कक्ष',
      specialistDeptsTitle: 'विशेषज्ञ विभाग आणि थेट OPD रांगा',
      specialistDeptsSub: 'या रुग्णालयातील सर्व विभागांची थेट सल्लामसलत स्थिती.',
      tableDept: 'विभाग',
      tableDoctor: 'सक्रिय तज्ज्ञ',
      tableRoom: 'खोली / मजला',
      tableServing: 'सध्याचा टोकन',
      tableWait: 'अंदाजे प्रतीक्षा',
      tableFee: 'फी',
      tableAction: 'कृती',
      bookBtn: 'बुक करा',
      facilitiesTitle: 'रुग्णालय सुविधा',
      facility1: '✓ २४×७ डायग्नोस्टिक पॅथॉलॉजी व रेडिओलॉजी विभाग',
      facility2: '✓ कॅशलेस TPA डेस्क (आयुष्मान भारत, स्टार, HDFC ERGO, ICICI लोम्बार्ड)',
      facility3: '✓ २४×७ इन-हाऊस फार्मसी व सेंट्रल ऑक्सिजन पुरवठा',
      facility4: '✓ कार्डिओव्हॅस्क्युलर आणि नवजात शिशु अतिदक्षता विभाग (NICU)',
      emergencyReadinessTitle: 'आपत्कालीन सज्जता',
      ambulanceFleet: 'रुग्णवाहिका ताफा:',
      emergencyStretchers: 'आपत्कालीन स्ट्रेचर्स:',
      traumaDesk: 'ट्रॉमा रिसुसिटेशन डेस्क: २४×७ सुरू',
      requestAmbulanceBtn: 'रुग्णवाहिका मागवा',
      available: '{count} उपलब्ध',
      ready: '{count} सज्ज',
      kmAway: '{distance} किमी अंतर',
      reviews: '({count} अभिप्राय)'
    },
    doctors: {
      title: 'तज्ज्ञ डॉक्टरांची यादी',
      subtitle: 'जोडलेल्या रुग्णालयांमधील प्रमाणित वैद्यकीय तज्ज्ञांचा सल्ला घ्या, थेट OPD रांग पहा आणि भेट बुक करा.',
      verifiedOnline: '{count} प्रमाणित तज्ज्ञ ऑनलाइन',
      filterByHospital: 'रुग्णालयानुसार फिल्टर करा:',
      allHospitals: 'सर्व जोडलेली रुग्णालये',
      specialtyDept: 'विशेषोपचार / विभाग:',
      allSpecialities: 'सर्व विशेषता',
      searchDoctorName: 'डॉक्टरांचे नाव शोधा:',
      searchPlaceholder: 'डॉक्टरांचे नाव, विशेषोपचार, विभाग किंवा रुग्णालय शोधा...',
      experience: '{years} वर्षे अनुभव',
      room: 'OPD खोली:',
      fee: 'तपासणी फी:',
      consultationFee: 'तपासणी फी:',
      languages: 'भाषा:',
      nextAvailable: 'पुढील उपलब्धता:',
      currentWait: 'OPD प्रतीक्षा:',
      bookConsultation: 'सल्लामसलत बुक करा →',
      viewProfile: 'माहिती पहा',
      noDoctorsFound: 'तुमच्या फिल्टर निकषांनुसार कोणतेही तज्ज्ञ डॉक्टर सापडले नाहीत.'
    },
    appointments: {
      title: 'डॉक्टर सल्लामसलत बुक करा',
      subtitle: 'रुग्णालय, तज्ज्ञ डॉक्टर, तारीख आणि वेळ निवडा. डिजिटल टोकन पावतीसह त्वरित खात्री मिळवा.',
      opdTimings: 'OPD वेळ: सकाळी ०८:३० – दुपारी ०२:००',
      step1: 'टप्पा १: रुग्णालय निवडा',
      step2: 'टप्पा २: सल्लागार तज्ज्ञ निवडा',
      step3: 'टप्पा ३: भेट तारीख आणि वेळ निवडा',
      step4: 'टप्पा ४: रुग्णाची माहिती आणि पुष्टी',
      availableDates: 'उपलब्ध तारखा (सप्टेंबर २०२६)',
      availableSlots: 'उपलब्ध सकाळचे स्लॉट',
      today: 'आज',
      fullName: 'रुग्णाचे पूर्ण नाव *',
      phone: 'मोबाईल नंबर *',
      email: 'ईमेल पत्ता:',
      age: 'वय:',
      gender: 'लिंग:',
      male: 'पुरुष',
      female: 'स्त्री',
      other: 'इतर',
      symptoms: 'मुख्य त्रास / भेटीचे कारण:',
      zeroCharges: 'शून्य बुकिंग शुल्क. सल्लामसलत फी थेट रुग्णालयाच्या कॅश काउंटरवर भरली जाते.',
      confirmBtn: 'अपॉइंटमेंट निश्चित करा आणि टोकन मिळवा',
      tokenGenerated: 'अपॉइंटमेंट निश्चित झाली!',
      printChecklist: 'भेट चेकलिस्ट प्रिंट करा',
      tokenSlip: 'डिजिटल OPD टोकन पावती'
    },
    patient: {
      title: 'रुग्ण डॅशबोर्ड',
      subtitle: 'थेट वेळेत तुमचा टोकन तपासा, सुरू असलेला क्रमांक पहा आणि ऑडिओ सूचना ऐका.',
      liveQueueTitle: 'थेट OPD रांग स्थिती',
      liveQueueSub: 'थेट वेळेत तुमचा टोकन तपासा, सुरू असलेला क्रमांक पहा आणि ऑडिओ सूचना ऐका.',
      greeting: 'शुभ प्रभात, {name}',
      activeVisitHospital: 'सक्रिय भेट रुग्णालय:',
      newLabReportAlert: 'नवीन लॅब अहवाल उपलब्ध आहे',
      viewReport: 'अहवाल पहा',
      slipHeader: 'थेट OPD सल्लामसलत टोकन पावती • GWS द्वारा समर्थित',
      yourToken: 'तुमचा नेमून दिलेला OPD टोकन',
      servingNow: 'सध्या सुरू असलेला',
      patientsAhead: 'तुमच्या आधीचे रुग्ण',
      estimatedWait: 'अंदाजे प्रतीक्षा',
      estimatedRange: 'अंदाजे कालावधी: {range} मिनिटे',
      activeDepartment: 'विभाग:',
      consultingDoctor: 'सल्लागार डॉक्टर:',
      roomNumber: 'OPD खोली:',
      refreshQueue: 'स्थिती रीफ्रेश करा',
      voiceAnnouncement: 'ऑडिओ सूचना सक्रिय आहे'
    },
    reports: {
      title: 'रुग्णालयांमधील प्रयोगशाळा अहवाल',
      subtitle: 'तुम्ही भेट दिलेल्या कोणत्याही रुग्णालयातील तुमचे प्रमाणित तपासणी अहवाल पहा आणि डाउनलोड करा.',
      privacyNotice: 'गोपनीय वैद्यकीय तपासणी अहवाल',
      filterAll: 'सर्व अहवाल',
      filterBlood: 'रक्त तपासणी',
      filterUrine: 'लघवी तपासणी',
      filterBiochem: 'बायोकेमिस्ट्री व लिपिड्स',
      filterThyroid: 'थायरॉईड व हार्मोन्स',
      searchPlaceholder: 'तपासणीचे नाव किंवा रुग्णालयानुसार अहवाल शोधा...',
      viewReport: 'अहवाल पहा',
      processing: 'प्रक्रियेत आहे',
      needHardCopy: 'मागील छापील प्रत किंवा पुन्हा तपासणीची गरज आहे?',
      contactLabDesk: 'लॅब डेस्कशी संपर्क साधा',
      certifiedNabl: 'NABL प्रमाणित डिजिटल लॅब अहवाल',
      parameter: 'तपासणी पॅरामीटर',
      value: 'तुमचे मूल्य',
      normalRange: 'जैविक संदर्भ मर्यादा',
      printReport: 'अहवाल प्रिंट करा',
      close: 'बंद करा'
    },
    icu: {
      title: 'ICU रुग्ण काळजी सारांश',
      subtitle: 'अतिदक्षता विभागात दाखल रुग्णांच्या कुटुंबियांसाठी थेट व सोप्या भाषेतील वैद्यकीय माहिती.',
      liaisonDesk: 'ICU कौटुंबिक संपर्क डेस्क:',
      visitingHours: 'भेटण्याची वेळ: संध्याकाळी ०४:३० – ०५:३०',
      callCounselor: 'ICU समुपदेशकाशी बोला',
      authorizedFamilyComm: 'अधिकृत कौटुंबिक संवाद',
      underCloseMonitoring: '● अतिदक्षतेखाली',
      lastUpdated: 'शेवटचे अद्यतन: आज सकाळी १०:४२ (मॉर्निंग राउंड्स)',
      patientName: 'रुग्णाचे नाव',
      hospitalLocation: 'रुग्णालय व ठिकाण',
      primaryIntensivist: 'मुख्य अतिदक्षता तज्ज्ञ',
      tabOverview: 'विहंगावलोकन',
      tabMedicines: 'औषधे',
      tabConditions: 'आरोग्य स्थिती',
      tabUpdates: 'डॉक्टर अद्यतने',
      vitalsTitle: 'थेट वाइटल्स आणि पॅरामीटर्स',
      plainSummaryTitle: 'डॉक्टरांचा सोप्या भाषेतील वैद्यकीय सारांश',
      audioSummary: 'ऑडिओ सारांश ऐका',
      requestCallback: 'डॉक्टरांच्या कॉलबॅकची विनंती करा',
      urgentHelpline: 'ICU समर्पित परिचारिका कक्ष: +91 (020) 2600 2404'
    },
    emergency: {
      title: '२४×७ आपत्कालीन हेल्पलाइन',
      subtitle: 'तातडीच्या आणि गंभीर परिस्थितीसाठी त्वरित संपर्क साधा. नेटवर्क रुग्णालयांमध्ये ACLS रुग्णवाहिका सज्ज आहेत.',
      hotline: '२४×७ आपत्कालीन हेल्पलाइन:',
      rapidDispatch: 'तातडीची आपत्कालीन मदत',
      returnHome: 'मुख्यपृष्ठावर परत जा',
      directHelpline: 'थेट हेल्पलाइन (लॉगिनची आवश्यकता नाही)',
      call108: '१०८ वर कॉल करा (राष्ट्रीय आपत्कालीन)',
      nationalAmbulance: 'राष्ट्रीय रुग्णवाहिका:',
      policeUniversal: 'पोलीस / सार्वत्रिक:',
      shantideepTrauma: 'शांतीदीप ट्रॉमा डेस्क:',
      emergencyReadiness: 'आपत्कालीन सज्जता',
      ambulancesAvailable: 'रुग्णवाहिका उपलब्ध',
      emergencyStretchers: 'आपत्कालीन स्ट्रेचर्स',
      wheelchairsReady: 'व्हीलचेअर्स सज्ज',
      emergencyDesk: 'आपत्कालीन कक्ष',
      requestAmbulance: 'कार्डियाक रुग्णवाहिका मागवा',
      locationInput: 'तुमचा सध्याचा पत्ता / ठिकाण:',
      contactNumber: 'संपर्क फोन नंबर:',
      patientCondition: 'रुग्णाची स्थिती / आपत्कालीन प्रकार:',
      dispatchBtn: 'तातडीने रुग्णवाहिका पाठवा 🚨'
    },
    map: {
      title: 'रुग्णालयातील मार्ग शोधा',
      subtitle: 'मजला निवडा आणि अंतर्गत दिशा पाहण्यासाठी खालील कोणत्याही खोलीवर क्लिक करा.',
      indoorGuidance: 'रुग्णालय अंतर्गत मार्गदर्शक',
      campusHelp: 'परिसर मदत: तळमजला काउंटर १',
      groundFloor: 'तळमजला (स्वागत कक्ष, आपत्कालीन, फार्मसी, डायग्नोस्टिक्स)',
      firstFloor: 'पहिला मजला (कार्डिओलॉजी, ऑर्थोपेडिक्स, मेडिसिन, बालरोग)',
      secondFloor: 'दुसरा मजला (ICU अतिदक्षता, शस्त्रक्रिया गृह, रुग्ण वॉर्ड)'
    },
    medicines: {
      title: 'आजचे औषध वेळापत्रक',
      subtitle: 'तुमचा दैनिक डोस तपासा, घेतलेल्या औषधावर खूण करा आणि वेळेवर औषधे घ्या.',
      prescriptionSchedule: 'औषध वेळापत्रक',
      addNewMedicine: '+ नवीन औषध जोडा',
      medicalAdvisory: 'महत्त्वाची वैद्यकीय सूचना: GWS औषध स्मरणपत्रे वैद्यकीय शिफारसी देत नाहीत किंवा प्रिस्क्रिप्शन बदलत नाहीत. केवळ डॉक्टरांच्या सल्ल्यानुसार योग्य डोस आणि वेळेवर औषधे घ्या.',
      addPrescribed: 'दिलेले औषध जोडा',
      medicineName: 'औषधाचे नाव:',
      dosageInstructions: 'डोस सूचना:',
      timing: 'वेळ:',
      saveMedicine: 'वेळापत्रक जतन करा'
    },
    reviews: {
      title: 'डॉक्टर अभिप्राय आणि रेटिंग',
      subtitle: 'GWS रुग्णालयांमध्ये OPD भेट आणि उपचारांनंतर रुग्णांचा खरा अभिप्राय.',
      verifiedFeedback: 'सत्यापित रुग्ण अभिप्राय',
      writeReview: '★ अभिप्राय लिहा',
      allSpecialists: 'सर्व तज्ज्ञ',
      commEmpathy: 'डॉक्टरांचा संवाद आणि काळजी:',
      waitTransparency: 'प्रतीक्षा वेळ पारदर्शकता (OPD):',
      clinicalCare: 'वैद्यकीय निदान आणि उपचार:',
      verifiedVisits: '१,८५०+ पेक्षा जास्त सत्यापित भेटी'
    },
    business: {
      tag: 'स्टार्टअप सादरीकरण आणि व्यावसायिक मॉडेल',
      title: '"आम्ही रुग्णालयांना पर्याय नाही, तर रुग्णांना त्यांच्याशी जोडतो."',
      subtitle: 'GWS हे बहु-रुग्णालय डिजिटल आरोग्य व्यासपीठ आहे. रुग्ण मोफत सेवा शोधू शकतात आणि प्रतीक्षा वेळेची तुलना करू शकतात. रुग्णालये त्यांचे कामकाज चालवण्यासाठी SaaS सदस्यता शुल्क देतात.',
      archLabel: 'प्लॅटफॉर्म रचना',
      archTitle: 'GWS कनेक्टेड रुग्णालय मॉडेल',
      archSub: 'रुग्ण शोध आणि रुग्णालयाची कार्यक्षमता यामधील अंतर GWS कसे कमी करते.'
    },
    login: {
      title: 'GWS मध्ये साइन इन करा',
      patientPortal: 'रुग्ण पोर्टल',
      doctorDesk: 'डॉक्टर डेस्क',
      hospitalAdmin: 'रुग्णालय व्यवस्थापक',
      patientSub: 'तुमचा OPD टोकन, प्रयोगशाळा अहवाल आणि औषध स्मरणपत्रे मिळवा.',
      doctorSub: 'क्लिनिकल रांगा व्यवस्थापित करा, रुग्णांना बोलवा आणि तपासणी अहवाल पहा.',
      hospitalSub: 'रुग्णालय प्रशासन, साधनसामग्री आणि SaaS सदस्यता व्यवस्थापन.',
      emailLabel: 'नोंदणीकृत ईमेल पत्ता:',
      passLabel: 'पासवर्ड:',
      rememberSession: 'माहिती लक्षात ठेवा',
      signInPatient: 'रुग्ण म्हणून लॉगिन करा →',
      signInDoctor: 'डॉक्टर कन्सोलमध्ये लॉगिन करा →',
      signInHospital: 'रुग्णालय पोर्टलमध्ये लॉगिन करा →'
    },
    footer: {
      forPatients: 'रुग्णांसाठी',
      searchHospitals: 'रुग्णालये शोधा',
      findDoctors: 'तज्ज्ञ डॉक्टर शोधा',
      bookOpd: 'OPD सल्लामसलत बुक करा',
      labReports: 'डिजिटल लॅब अहवाल',
      familyIcu: 'कौटुंबिक ICU ट्रॅकर',
      forHospitals: 'रुग्णालये आणि डॉक्टरांसाठी',
      registerHospital: 'रुग्णालय नोंदणी करा (SaaS)',
      doctorDesk: 'डॉक्टर OPD डेस्क',
      patientsRegister: 'डॉक्टर रुग्ण नोंदवही',
      hospitalAdmin: 'रुग्णालय प्रशासन डॅशबोर्ड',
      subscriptionPlans: 'सदस्यता योजना',
      emergencyServices: 'आपत्कालीन सेवा',
      emergencyText: 'शहर नेटवर्कमध्ये त्वरित २४×७ आपत्कालीन व कार्डियाक रुग्णवाहिका सेवा.',
      emergencyHelpline: 'आपत्कालीन हेल्पलाइन',
      nationalEmergency: 'राष्ट्रीय आपत्कालीन: 108 / 112',
      rapidResponse: 'GWS जलद प्रतिसाद: +91 (020) 2600 2400',
      prototypeBadge: 'कॉलेज हॅकॅथॉन प्रोटोटाइप',
      copyright: '© 2026 GWS प्लॅटफॉर्म • आरोग्य सेवा, आता एकाच ठिकाणी जोडलेली.',
      disclaimer: 'डेमो प्लॅटफॉर्म — दाखवलेली सर्व रुग्णालये, रुग्ण, डॉक्टर आणि अहवाल काल्पनिक आहेत.'
    }
  }
};

// Legacy Flat Translation Key Mapping for Backwards Compatibility
const GWS_LEGACY_I18N_MAP = {
  hospitalName: 'global.appName',
  brandTagline: 'global.brandTagline',
  navHome: 'nav.home',
  navAbout: 'global.appName',
  navHospitals: 'nav.hospitals',
  navDoctors: 'nav.doctors',
  navPatientServices: 'global.appName',
  navAppointments: 'nav.appointments',
  navLiveQueue: 'nav.liveQueue',
  navEmergency: 'nav.emergency',
  navMap: 'hospitalDetails.hospitalMapTitle',
  navReports: 'nav.reports',
  navMedicines: 'nav.reports',
  navFamilyAccess: 'nav.familyCare',
  navFamilyCare: 'nav.familyCare',
  navBusiness: 'nav.business',
  navReviews: 'doctors.title',
  heroTitle: 'home.heroTitle',
  heroSub: 'home.heroSub',
  searchPlaceholder: 'search.placeholder',
  findCareBtn: 'search.findCare'
};

function getGlobalLanguage() {
  try {
    return localStorage.getItem('gws_language') || (getAppState().language || 'en');
  } catch (e) {
    return 'en';
  }
}

function t(keyPath, params = {}) {
  const lang = getGlobalLanguage();
  const dict = GWS_TRANSLATIONS[lang] || GWS_TRANSLATIONS.en;
  
  let targetKey = keyPath;
  if (GWS_LEGACY_I18N_MAP[keyPath]) {
    targetKey = GWS_LEGACY_I18N_MAP[keyPath];
  }

  let val = targetKey.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : null, dict);

  if (val === null || val === undefined) {
    val = targetKey.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : null, GWS_TRANSLATIONS.en);
  }

  if (typeof val !== 'string') {
    return val || keyPath;
  }

  return val.replace(/\{(\w+)\}/g, (match, paramKey) => {
    return params[paramKey] !== undefined ? params[paramKey] : match;
  });
}

// --------------------------------------------------------------------------
// State Storage & Multi-Tab Broadcast Sync Engine
// --------------------------------------------------------------------------
function getAppState() {
  try {
    const saved = localStorage.getItem('gws_platform_state_v4');
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error('State load error:', e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_GWS_STATE));
}

function saveAppState(state) {
  try {
    localStorage.setItem('gws_platform_state_v4', JSON.stringify(state));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: 'GWS_PLATFORM_STATE_UPDATED', state });
    }
  } catch (e) {
    console.error('State save error:', e);
  }
}

// Broadcast Channel for Instant Multi-Tab Interactivity
let broadcastChannel = null;
if (typeof BroadcastChannel !== 'undefined') {
  broadcastChannel = new BroadcastChannel('gws_sync_channel_v4');
  broadcastChannel.onmessage = (event) => {
    if (event.data && event.data.type === 'GWS_PLATFORM_STATE_UPDATED') {
      onGlobalStateSync(event.data.state);
    } else if (event.data && event.data.type === 'GWS_LANG_CHANGED') {
      applyTranslations(event.data.lang);
    }
  };
}

window.addEventListener('storage', (e) => {
  if (e.key === 'gws_platform_state_v4' && e.newValue) {
    try {
      const state = JSON.parse(e.newValue);
      onGlobalStateSync(state);
    } catch (err) {}
  } else if (e.key === 'gws_language' && e.newValue) {
    applyTranslations(e.newValue);
  }
});

// Sound Generator for Hospital Announcement Chime
function playHospitalChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now);
    osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.18);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.85);

    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(783.99, now + 0.22);
    gain2.gain.setValueAtTime(0.14, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.22);
    osc2.stop(now + 1.1);
  } catch (e) {
    console.log('Audio chime active');
  }
}

// Global Notification Toast
function showHospitalToast(message, type = 'info') {
  let container = document.getElementById('hospital-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'hospital-toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `hospital-toast ${type === 'alert' ? 'toast-alert' : type === 'emergency' ? 'toast-emergency' : ''}`;
  toast.innerHTML = `
    <div style="flex-grow: 1;">
      <div style="font-weight: 700; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 2px;">
        GWS Notification
      </div>
      <div>${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --------------------------------------------------------------------------
// Public vs Protected Route & Reusable Login Modal System
// Note: Production implementation requires secure backend authentication,
// authorization, encryption, audit logging and compliance with healthcare regulations.
// --------------------------------------------------------------------------
const GWS_Auth = {
  getRole() {
    return sessionStorage.getItem('gwsRole') || (getAppState().currentUser ? getAppState().currentUser.role : null);
  },
  getPatientId() {
    return sessionStorage.getItem('patientId') || 'GWS-1024';
  },
  getDoctorId() {
    return sessionStorage.getItem('doctorId') || 'DOC-001';
  },
  getHospitalId() {
    return sessionStorage.getItem('hospitalId') || 'H001';
  },
  getUser() {
    const state = getAppState();
    return state.currentUser;
  },
  login(role, email, password, redirectUrl = null) {
    const state = getAppState();
    
    if (role === 'patient') {
      sessionStorage.setItem('gwsRole', 'patient');
      sessionStorage.setItem('patientId', 'GWS-1024');
      state.currentUser = {
        role: 'patient',
        patientId: 'GWS-1024',
        name: 'Rahul Sharma',
        email: email || 'patient@demo.com',
        phone: '+91 98765 43210'
      };
      saveAppState(state);
      if (redirectUrl) window.location.href = redirectUrl;
      else window.location.href = 'patient.html';
    } else if (role === 'doctor') {
      sessionStorage.setItem('gwsRole', 'doctor');
      sessionStorage.setItem('doctorId', 'DOC-001');
      sessionStorage.setItem('hospitalId', 'H001');
      state.currentUser = {
        role: 'doctor',
        doctorId: 'DOC-001',
        hospitalId: 'H001',
        name: 'Dr. Arjun Mehta',
        email: email || 'doctor@demo.com',
        dept: 'Cardiology'
      };
      saveAppState(state);
      if (redirectUrl) window.location.href = redirectUrl;
      else window.location.href = 'doctor.html';
    } else if (role === 'admin' || role === 'hospital') {
      sessionStorage.setItem('gwsRole', 'admin');
      sessionStorage.setItem('hospitalId', 'H001');
      state.currentUser = {
        role: 'admin',
        hospitalId: 'H001',
        name: 'Shantideep Administration',
        email: email || 'hospital@demo.com'
      };
      saveAppState(state);
      if (redirectUrl) window.location.href = redirectUrl;
      else window.location.href = 'hospital.html';
    }
  },
  logout() {
    sessionStorage.clear();
    const state = getAppState();
    state.currentUser = null;
    saveAppState(state);
    window.location.href = 'index.html';
  }
};

// Reusable GWS Modal Controller
const GWS_AuthModal = {
  activeTargetRole: 'patient',
  redirectAfterLogin: null,

  open(role = 'patient', redirectUrl = null) {
    this.activeTargetRole = role;
    this.redirectAfterLogin = redirectUrl || window.location.href;

    let overlay = document.getElementById('gws-auth-modal-overlay');
    if (!overlay) {
      this.injectModalHtml();
      overlay = document.getElementById('gws-auth-modal-overlay');
    }

    this.selectTab(role);
    overlay.classList.add('active');
  },

  close() {
    const overlay = document.getElementById('gws-auth-modal-overlay');
    if (overlay) overlay.classList.remove('active');
  },

  selectTab(role) {
    this.activeTargetRole = role;
    const tabPatient = document.getElementById('modal-tab-patient');
    const tabDoctor = document.getElementById('modal-tab-doctor');
    const tabHospital = document.getElementById('modal-tab-hospital');
    const subtitle = document.getElementById('modal-auth-subtitle');
    const submitBtn = document.getElementById('modal-auth-submit-btn');
    const emailInput = document.getElementById('modal-auth-email');
    const passInput = document.getElementById('modal-auth-pass');

    if (tabPatient) tabPatient.classList.toggle('active', role === 'patient');
    if (tabDoctor) tabDoctor.classList.toggle('active', role === 'doctor');
    if (tabHospital) tabHospital.classList.toggle('active', role === 'hospital' || role === 'admin');

    if (role === 'patient') {
      if (subtitle) subtitle.textContent = 'Medical reports, consultation notes, and health records contain private information.';
      if (submitBtn) submitBtn.textContent = 'Sign In as Patient →';
      if (emailInput) emailInput.value = 'patient@demo.com';
      if (passInput) passInput.value = 'patient123';
    } else if (role === 'doctor') {
      if (subtitle) subtitle.textContent = 'Access assigned patient profiles, diagnostic records, and OPD console.';
      if (submitBtn) submitBtn.textContent = 'Sign In to Doctor Console →';
      if (emailInput) emailInput.value = 'doctor@demo.com';
      if (passInput) passInput.value = 'doctor123';
    } else {
      if (subtitle) subtitle.textContent = 'Manage hospital operations, subscription tier, and OPD queue throughput.';
      if (submitBtn) submitBtn.textContent = 'Sign In to Hospital Portal →';
      if (emailInput) emailInput.value = 'hospital@demo.com';
      if (passInput) passInput.value = 'hospital123';
    }
  },

  injectModalHtml() {
    const div = document.createElement('div');
    div.id = 'gws-auth-modal-overlay';
    div.className = 'gws-modal-overlay';
    div.innerHTML = `
      <div class="gws-auth-card">
        <div style="background:var(--bg-cream); border-bottom:1px solid var(--border-subtle); padding:14px 20px; display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="hospital-emblem" style="width:26px; height:26px; background:#FCFBF9; padding:2px;">
              <img src="GWS_true_vector.svg" alt="GWS" style="width:100%; height:100%; object-fit:contain;">
            </div>
            <strong style="font-family:var(--font-sans); font-size:0.95rem; letter-spacing:0.02em;">SIGN IN TO CONTINUE</strong>
          </div>
          <button onclick="GWS_AuthModal.close()" style="font-size:1.4rem; line-height:1; color:var(--text-muted);">&times;</button>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; background:var(--bg-cream); border-bottom:1px solid var(--border-subtle);">
          <button id="modal-tab-patient" class="login-tab-btn active" onclick="GWS_AuthModal.selectTab('patient')">Patient</button>
          <button id="modal-tab-doctor" class="login-tab-btn" onclick="GWS_AuthModal.selectTab('doctor')">Doctor</button>
          <button id="modal-tab-hospital" class="login-tab-btn" onclick="GWS_AuthModal.selectTab('hospital')">Hospital</button>
        </div>

        <div style="padding:22px 20px;">
          <p id="modal-auth-subtitle" class="text-xs text-muted" style="margin:0 0 16px 0; line-height:1.5;">
            Medical reports and consultation records contain private patient information.
          </p>

          <form onsubmit="GWS_AuthModal.handleSubmit(event)">
            <div class="form-group">
              <label class="form-label" for="modal-auth-email">Email Address:</label>
              <input type="email" id="modal-auth-email" class="form-input" required value="patient@demo.com">
            </div>

            <div class="form-group">
              <label class="form-label" for="modal-auth-pass">Password:</label>
              <input type="password" id="modal-auth-pass" class="form-input" required value="patient123">
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="modal-auth-submit-btn">
              Sign In as Patient →
            </button>
          </form>

          <div style="background:var(--bg-cream); border:1px dashed var(--border-medium); border-radius:var(--radius-sm); padding:10px 12px; margin-top:14px; font-size:0.75rem; color:var(--text-muted);">
            <strong>Demo Credentials:</strong><br>
            • Patient: <code>patient@demo.com / patient123</code><br>
            • Doctor: <code>doctor@demo.com / doctor123</code><br>
            • Hospital: <code>hospital@demo.com / hospital123</code>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(div);
  },

  handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('modal-auth-email').value;
    const pass = document.getElementById('modal-auth-pass').value;
    GWS_Auth.login(this.activeTargetRole, email, pass, this.redirectAfterLogin);
  }
};

// Route Protection Guard
function requireAuthGuard(allowedRoles = ['patient', 'doctor', 'admin'], pageTitle = 'Protected Medical Records') {
  const currentRole = GWS_Auth.getRole();
  if (!currentRole || !allowedRoles.includes(currentRole)) {
    const mainContent = document.querySelector('main') || document.body;
    if (mainContent) {
      mainContent.innerHTML = `
        <div class="container" style="padding: 40px 20px 80px;">
          <div class="privacy-guard-container">
            <div style="font-size:2.4rem; margin-bottom:8px;">🔒</div>
            <span class="section-label" style="color:var(--accent-terracotta);">Authentication Required</span>
            <h2 style="margin:4px 0 10px 0;">Sign in to view ${pageTitle}</h2>
            <p class="text-sm text-muted" style="margin-bottom:20px; line-height:1.6;">
              Medical reports, clinical consultations, and health records contain private patient data. Please authenticate with your authorized account to proceed.
            </p>
            <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
              <button class="btn btn-primary" onclick="GWS_AuthModal.open('${allowedRoles[0]}', window.location.href)">
                Sign In (${allowedRoles[0].toUpperCase()})
              </button>
              <a href="index.html" class="btn btn-secondary">Go to Public Home</a>
            </div>
          </div>
        </div>
      `;
    }
    return false;
  }
  return true;
}

// --------------------------------------------------------------------------
// Map API-Ready Geolocation & Best Match Algorithm
// --------------------------------------------------------------------------
// Production Note: Production API keys should not be exposed in client-side code. Use a backend/proxy for secured API access.
const MAP_CONFIG = {
  mapProvider: 'OpenStreetMap / Leaflet / Mapbox Proxy',
  apiKey: 'DEMO_SECURE_BACKEND_PROXY_KEY',
  mapCenter: { lat: 18.5204, lng: 73.8567 }, // Pune Center
  defaultZoom: 12
};

// --------------------------------------------------------------------------
// Multi-Hospital Core Search & Directory Engine
// --------------------------------------------------------------------------
let GWS_CURRENT_USER_LOCATION = {
  lat: 18.5204,
  lng: 73.8567,
  city: 'Pune'
};

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in KM
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
}

function getAllHospitals(userLat = GWS_CURRENT_USER_LOCATION.lat, userLng = GWS_CURRENT_USER_LOCATION.lng) {
  const state = getAppState();
  let hospitals = state.hospitals || DEFAULT_GWS_STATE.hospitals;

  // Merge any registered hospitals from localStorage if saved under registeredHospitals
  try {
    const reg = JSON.parse(localStorage.getItem('registeredHospitals')) || [];
    reg.forEach(r => {
      if (!hospitals.some(h => h.id === r.id || (h.name && r.name && h.name.toLowerCase() === r.name.toLowerCase()))) {
        hospitals.push(r);
      }
    });
  } catch (e) {}

  const allDoctors = state.doctors || DEFAULT_GWS_STATE.doctors || [];

  return hospitals.map(h => {
    const dist = calculateDistance(userLat, userLng, h.lat || 18.5204, h.lng || 73.8567);
    
    // Resolve doctor names for this hospital
    let hospDocs = allDoctors.filter(d => d.hospitalId === h.id).map(d => d.name);
    if (h.departments && typeof h.departments === 'object' && !Array.isArray(h.departments)) {
      Object.values(h.departments).forEach(d => {
        if (d.doctor && !hospDocs.includes(d.doctor)) hospDocs.push(d.doctor);
      });
    }
    if (hospDocs.length === 0) {
      hospDocs = ['Dr. Arjun Mehta', 'Dr. Rohan Patel', 'Dr. Neha Shah'];
    }

    // Resolve departments list as clean array of strings
    let deptList = [];
    if (Array.isArray(h.departments)) {
      deptList = h.departments.map(d => typeof d === 'string' ? d : (d.name || 'General Medicine'));
    } else if (h.departments && typeof h.departments === 'object') {
      deptList = Object.values(h.departments).map(d => (d && d.name) ? d.name.replace(' OPD', '') : 'General Medicine');
    } else {
      deptList = ['Cardiology', 'Orthopaedics', 'General Medicine', 'Paediatrics'];
    }

    // Resolve services keywords for comprehensive search matching
    const isEmerg = (h.emergencyAvailable === true || h.emergency === true);
    const services = [];
    if (isEmerg) services.push('Emergency 24x7', 'Emergency', 'Trauma', 'Casualty', '24x7');
    if (h.labAvailable !== false) services.push('Diagnostics', 'Lab', 'Pathology', 'Blood Test', 'Urine Test');
    if (h.pharmacyAvailable !== false) services.push('Pharmacy', 'Medicine', 'Medical Store');
    if (h.ambulanceAvailable !== false) services.push('Ambulance', 'Emergency Dispatch');

    const waitMin = h.currentOpdWaitMin ?? h.waitingTime ?? h.avgWaitMin ?? 25;

    return {
      ...h,
      id: h.id || 'H001',
      name: h.name || 'Hospital',
      city: h.city || 'Pune',
      area: h.area || h.location || 'Pune Central',
      location: h.location || h.area || 'Pune Central',
      lat: h.lat || 18.5204,
      lng: h.lng || 73.8567,
      distance: dist,
      distanceKm: dist,
      rating: h.rating || 4.7,
      reviewCount: h.reviewCount || 120,
      departments: deptList,
      doctors: hospDocs,
      emergency: isEmerg,
      emergencyAvailable: isEmerg,
      waitingTime: waitMin,
      currentOpdWaitMin: waitMin,
      avgWaitMin: waitMin,
      accreditation: h.accreditation || 'NABH Accredited Healthcare Institution',
      tagline: h.tagline || (h.featuredSpecialty ? `Center of Excellence in ${h.featuredSpecialty}` : 'Excellence in Clinical Care'),
      services: services,
      nextAvailable: h.nextAvailable || '10:30 AM Today',
      nextApptSlot: h.nextApptSlot || '10:30 AM',
      emergencyResources: h.emergencyResources || { ambulancesAvailable: 2, stretchers: 8 },
      icu: h.icu || { totalBeds: 18, occupiedBeds: 14 }
    };
  });
}

function searchHospitals(searchTerm = '', filters = {}, sortBy = 'recommended') {
  const allHospitals = getAllHospitals(GWS_CURRENT_USER_LOCATION.lat, GWS_CURRENT_USER_LOCATION.lng);
  const term = (searchTerm || '').trim().toLowerCase();

  let results = allHospitals.filter(h => {
    // 1. Text Search across multiple fields
    if (term) {
      const searchableText = [
        h.name || '',
        h.city || '',
        h.area || '',
        h.location || '',
        ...(h.departments || []),
        ...(h.doctors || []),
        ...(h.services || [])
      ].join(' ').toLowerCase();

      if (!searchableText.includes(term)) {
        return false;
      }
    }

    // 2. Department filter
    if (filters.department && filters.department !== 'all') {
      const depTarget = filters.department.toLowerCase();
      const hasDept = (h.departments || []).some(d => d.toLowerCase().includes(depTarget));
      if (!hasDept) return false;
    }

    // 3. City filter
    if (filters.city && filters.city !== 'all') {
      if ((h.city || '').toLowerCase() !== filters.city.toLowerCase()) {
        return false;
      }
    }

    // 4. Max Distance filter
    if (filters.maxDistance && filters.maxDistance !== 'all') {
      const maxD = parseFloat(filters.maxDistance);
      if (h.distance > maxD) return false;
    }

    // 5. Max Waiting Time filter
    if (filters.maxWait && filters.maxWait !== 'all') {
      const maxW = parseInt(filters.maxWait, 10);
      if (h.waitingTime > maxW) return false;
    }

    // 6. Emergency Only filter
    if (filters.emergencyOnly) {
      if (!h.emergency) return false;
    }

    // 7. Minimum Rating filter
    if (filters.minRating && filters.minRating !== 'all') {
      const minR = parseFloat(filters.minRating);
      if (h.rating < minR) return false;
    }

    return true;
  });

  // Sorting
  if (sortBy === 'wait' || sortBy === 'shortest') {
    results.sort((a, b) => a.waitingTime - b.waitingTime);
  } else if (sortBy === 'nearest' || sortBy === 'distance') {
    results.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === 'rating' || sortBy === 'highest_rated') {
    results.sort((a, b) => b.rating - a.rating);
  } else {
    // Recommended / Best Match
    results.sort((a, b) => {
      const scoreA = (a.distance * 2.2) + (a.waitingTime * 0.7) - (a.rating * 4);
      const scoreB = (b.distance * 2.2) + (b.waitingTime * 0.7) - (b.rating * 4);
      return scoreA - scoreB;
    });
  }

  return results;
}

function createHospitalCard(h) {
  const card = document.createElement('div');
  card.className = 'hospital-compare-card';
  card.style.cssText = 'background:var(--bg-paper); border:1px solid var(--border-medium); border-top:4px solid var(--primary-green); border-radius:var(--radius-sm); padding:22px 24px; margin-bottom:16px; transition:all 0.2s ease;';

  const isFastest = h.waitingTime <= 20;
  const deptString = (h.departments || []).slice(0, 4).join(' • ');

  const currentWaitTxt = t('hospitals.currentWait', { time: h.waitingTime });
  const kmAwayTxt = t('hospitals.kmAway', { distance: h.distance });
  const reviewsTxt = t('hospitals.reviews', { count: h.reviewCount });
  const emergTxt = h.emergency ? t('hospitals.open247') : t('hospitals.dayOpd');
  const opdWaitLabel = t('hospitals.opdWait');
  const nextApptLabel = t('hospitals.nextAvailableAppt');
  const deptsLabel = t('hospitals.departments');
  const viewHospBtn = t('hospitals.viewHospital');
  const bookApptBtn = t('hospitals.bookAppointment');

  card.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px; flex-wrap:wrap; gap:8px;">
      <div>
        <span class="hospital-badge-wait ${isFastest ? 'hospital-badge-fastest' : ''}">⚡ ${currentWaitTxt}</span>
        <h3 style="margin:6px 0 2px 0; font-family:var(--font-serif); font-size:1.35rem;">
          <a href="hospital-details.html?id=${h.id}" style="color:var(--text-main); text-decoration:none;" onclick="setSelectedHospital('${h.id}', true); return false;">${h.name}</a>
        </h3>
        <div class="text-xs text-muted" style="margin-top:2px;">
          📍 ${h.area}, ${h.city} • <strong>${kmAwayTxt}</strong> • <span style="color:var(--accent-amber); font-weight:700;">★★★★★ ${h.rating}</span> ${reviewsTxt}
        </div>
      </div>
      <span class="utility-badge" style="background:${h.emergency ? 'var(--accent-success-light)' : 'var(--bg-cream)'}; color:${h.emergency ? 'var(--accent-success)' : 'var(--text-muted)'};">
        ${emergTxt}
      </span>
    </div>

    <div style="background:var(--bg-cream); padding:10px 14px; border-radius:var(--radius-sm); font-size:0.85rem; margin:12px 0;">
      <div style="display:flex; justify-content:space-between; margin-bottom:4px; flex-wrap:wrap;">
        <span class="text-muted">${opdWaitLabel}</span>
        <strong style="color:var(--accent-terracotta); font-family:var(--font-mono);">~${h.waitingTime} min</strong>
      </div>
      <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
        <span class="text-muted">${nextApptLabel}</span>
        <strong style="color:var(--primary-green); font-weight:600;">${h.nextAvailable}</strong>
      </div>
    </div>

    <div style="font-size:0.825rem; color:var(--text-muted); margin-bottom:16px;">
      <strong>${deptsLabel}</strong> ${deptString}
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; border-top:1px solid var(--border-subtle); padding-top:14px;">
      <button type="button" class="btn btn-secondary btn-sm" onclick="setSelectedHospital('${h.id}', true)">
        ${viewHospBtn}
      </button>
      <a href="appointments.html?hospital=${h.id}" class="btn btn-primary btn-sm" style="text-align:center;">
        ${bookApptBtn}
      </a>
    </div>
  `;

  return card;
}

function renderHospitals(hospitalsToRender, containerId = 'home-hospitals-container', searchTerm = '') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';

  const countBadge = document.getElementById('home-hospitals-count-badge') || document.getElementById('results-count-badge');
  if (countBadge) {
    countBadge.textContent = t('hospitals.hospitalsFound', { count: hospitalsToRender.length, plural: hospitalsToRender.length === 1 ? '' : 's' });
  }

  const titleEl = document.getElementById('home-search-title');
  const labelEl = document.getElementById('home-search-label');
  if (titleEl) {
    if (searchTerm && searchTerm.trim()) {
      const resultsWord = getGlobalLanguage() === 'hi' ? 'खोज परिणाम' : (getGlobalLanguage() === 'mr' ? 'शोध निकाल' : 'Search Results');
      titleEl.textContent = `${resultsWord} (${hospitalsToRender.length})`;
      if (labelEl) labelEl.textContent = t('hospitals.matching', { term: searchTerm.trim() });
    } else {
      titleEl.textContent = t('home.nearbyHospitals');
      if (labelEl) labelEl.textContent = t('home.connectedNetwork');
    }
  }

  if (hospitalsToRender.length === 0) {
    const noRes = document.createElement('div');
    noRes.className = 'no-results-box';
    noRes.style.cssText = 'background:var(--bg-paper); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:36px; text-align:center; margin:10px 0;';
    noRes.innerHTML = `
      <div style="font-size:2.2rem; margin-bottom:8px;">🏥</div>
      <h3 style="margin:0 0 6px 0;">${t('hospitals.noHospitalsFound')}</h3>
      <p class="text-muted" style="margin:0 0 14px 0;">
        ${t('hospitals.noHospitalsMatching', { term: escapeHtml(searchTerm || '') })}
      </p>
      <div style="background:var(--bg-cream); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:14px; max-width:420px; margin:0 auto 18px; font-size:0.85rem; text-align:left;">
        <strong>${t('hospitals.trySearchingFor')}</strong>
        <ul style="margin:6px 0 0 18px; padding:0; color:var(--text-muted); line-height:1.6;">
          <li>${t('hospitals.tipHospitalName')}</li>
          <li>${t('hospitals.tipDept')}</li>
          <li>${t('hospitals.tipDoctor')}</li>
          <li>${t('hospitals.tipService')}</li>
          <li>${t('hospitals.tipCity')}</li>
        </ul>
      </div>
      <button type="button" class="btn btn-secondary btn-sm" onclick="clearHospitalSearch()">
        [ ${t('hospitals.clearSearch')} ]
      </button>
    `;
    container.appendChild(noRes);
    return;
  }

  hospitalsToRender.forEach(h => {
    container.appendChild(createHospitalCard(h));
  });
}

function escapeHtml(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function handleHomeHospitalSearch(val) {
  const searchInput = document.getElementById('home-search-query');
  const searchTerm = (typeof val === 'string') ? val : (searchInput ? searchInput.value : '');
  const citySelect = document.getElementById('home-city-select');
  const city = citySelect ? citySelect.value : 'all';

  const results = searchHospitals(searchTerm, { city: city === 'Pune' ? 'all' : city });
  renderHospitals(results, 'home-hospitals-container', searchTerm);
}

function handleHomeHospitalSearchForm(e) {
  if (e) e.preventDefault();
  handleHomeHospitalSearch();
}

function clearHospitalSearch() {
  const homeInput = document.getElementById('home-search-query');
  const dirInput = document.getElementById('dir-search-input');
  
  if (homeInput) {
    homeInput.value = '';
    homeInput.focus();
    handleHomeHospitalSearch('');
  }
  if (dirInput) {
    dirInput.value = '';
    dirInput.focus();
    if (typeof applyFiltersAndRender === 'function') {
      applyFiltersAndRender();
    }
  }
}

function quickFilterHomeNeeds(category) {
  const searchInput = document.getElementById('home-search-query');
  if (searchInput) {
    searchInput.value = category;
  }
  handleHomeHospitalSearch(category);
  const sec = document.getElementById('hospital-search-results-section');
  if (sec) sec.scrollIntoView({ behavior: 'smooth' });
}

function selectCityLocation(cityName) {
  GWS_CURRENT_USER_LOCATION.city = cityName;
  if (cityName === 'Pune') {
    GWS_CURRENT_USER_LOCATION.lat = 18.5204;
    GWS_CURRENT_USER_LOCATION.lng = 73.8567;
  } else if (cityName === 'Mumbai') {
    GWS_CURRENT_USER_LOCATION.lat = 19.0760;
    GWS_CURRENT_USER_LOCATION.lng = 72.8777;
  } else if (cityName === 'Ahmedabad') {
    GWS_CURRENT_USER_LOCATION.lat = 23.0225;
    GWS_CURRENT_USER_LOCATION.lng = 72.5714;
  } else if (cityName === 'Jamnagar') {
    GWS_CURRENT_USER_LOCATION.lat = 22.4707;
    GWS_CURRENT_USER_LOCATION.lng = 70.0577;
  } else if (cityName === 'Surat') {
    GWS_CURRENT_USER_LOCATION.lat = 21.1702;
    GWS_CURRENT_USER_LOCATION.lng = 72.8311;
  }

  handleHomeHospitalSearch();
  if (typeof applyFiltersAndRender === 'function') {
    applyFiltersAndRender();
  }
}

function requestBrowserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        GWS_CURRENT_USER_LOCATION.lat = position.coords.latitude;
        GWS_CURRENT_USER_LOCATION.lng = position.coords.longitude;
        showHospitalToast('Location updated: calculating real-time distance', 'info');
        handleHomeHospitalSearch();
        if (typeof applyFiltersAndRender === 'function') {
          applyFiltersAndRender();
        }
      },
      (error) => {
        showHospitalToast('Location permission not granted. Using Pune default.', 'info');
        handleHomeHospitalSearch();
      }
    );
  } else {
    showHospitalToast('Using default city location (Pune)', 'info');
  }
}

function getSelectedHospital(state) {
  const s = state || getAppState();
  const urlParams = new URLSearchParams(window.location.search);
  const paramId = urlParams.get('id') || urlParams.get('hospital');
  const storedId = localStorage.getItem('selectedHospitalId') || localStorage.getItem('gws_selected_hospital_id') || 'H001';
  const targetId = paramId || storedId;

  const all = getAllHospitals();
  let rawHosp = all.find(h => h.id === targetId) || all[0];

  return {
    ...rawHosp,
    tagline: rawHosp.tagline || 'Excellence in Clinical Care • NABH Accredited',
    accreditation: rawHosp.accreditation || 'NABH Accredited Healthcare Institution',
    emergencyStatus: rawHosp.emergency ? 'OPEN 24×7' : 'Day OPD Only',
    emergencyResources: rawHosp.emergencyResources || { ambulancesAvailable: 2, stretchers: 8 },
    address: rawHosp.location + ', ' + rawHosp.city,
    distance: rawHosp.distance || 2.4,
    avgWaitMin: rawHosp.waitingTime || 28,
    departments: s.departments || DEFAULT_GWS_STATE.departments
  };
}

function setSelectedHospital(id, redirect = true) {
  localStorage.setItem('selectedHospitalId', id);
  localStorage.setItem('gws_selected_hospital_id', id);
  if (redirect) {
    window.location.href = `hospital-details.html?id=${id}`;
  }
}

function initializeHospitalDirectory() {
  const allHospitals = getAllHospitals();
  if (document.getElementById('home-hospitals-container')) {
    renderHospitals(allHospitals, 'home-hospitals-container');
  }

  const homeSearchInput = document.getElementById('home-search-query');
  if (homeSearchInput) {
    homeSearchInput.addEventListener('input', (e) => handleHomeHospitalSearch(e.target.value));
  }
}

// --------------------------------------------------------------------------
// Doctor Consultation Notes & Patient Record Functions
// --------------------------------------------------------------------------
function searchDoctorPatients(term = '', filter = 'all') {
  const state = getAppState();
  const lower = term.toLowerCase().trim();
  return state.patients.filter(p => {
    const matchesQuery = !lower || p.name.toLowerCase().includes(lower) || p.patientId.toLowerCase().includes(lower);
    if (!matchesQuery) return false;
    if (filter === 'today') return p.lastVisit.includes('18 Sep');
    if (filter === 'followup') return p.nextAppt !== '—';
    return true;
  });
}

function addConsultationNote(patientId, dept, complaint, notes) {
  const state = getAppState();
  const newHist = {
    historyId: `HIST-${Math.floor(100 + Math.random() * 900)}`,
    patientId: patientId || 'GWS-1024',
    hospitalId: 'H001',
    hospitalName: 'Shantideep Multispeciality Hospital',
    doctorId: 'DOC-001',
    doctorName: 'Dr. Arjun Mehta',
    department: dept || 'Cardiology',
    date: '18 September 2026',
    complaint: complaint || 'Follow-up consultation',
    notes: notes || 'Clinical assessment completed.',
    status: 'Completed'
  };

  state.medicalHistory.unshift(newHist);
  saveAppState(state);
  showHospitalToast('Consultation note recorded in patient history timeline.', 'info');
}

function addPatientUpdate(patientId, updateText, lang = 'en') {
  const state = getAppState();
  state.auditLog.unshift({
    time: new Date().toLocaleTimeString(),
    text: `Dr. Arjun Mehta posted clinical update for Patient ${patientId}: "${updateText}"`
  });
  saveAppState(state);
  showHospitalToast('Patient clinical update shared with authorized family portal.', 'info');
}

// --------------------------------------------------------------------------
// Hospital Registration SaaS & Queue Operations
// --------------------------------------------------------------------------
function registerHospital(formData) {
  const state = getAppState();
  const newId = `H00${state.hospitals.length + 1}`;
  const appId = `GWS-HOSP-${Math.floor(1000 + Math.random() * 9000)}`;

  const newHospital = {
    id: newId,
    name: formData.name || 'New Multispeciality Hospital',
    city: formData.city || 'Pune',
    location: formData.location || 'Pune Ring Road',
    lat: 18.5200 + (Math.random() - 0.5) * 0.08,
    lng: 73.8500 + (Math.random() - 0.5) * 0.08,
    rating: 4.6,
    reviewCount: 1,
    beds: parseInt(formData.beds, 10) || 100,
    emergencyAvailable: formData.emergencyAvailable ?? true,
    labAvailable: formData.labAvailable ?? true,
    pharmacyAvailable: formData.pharmacyAvailable ?? true,
    ambulanceAvailable: formData.ambulanceAvailable ?? true,
    currentOpdWaitMin: 25,
    plan: formData.plan || 'GWS Professional',
    planPrice: formData.planPrice || '₹30,000/month',
    planStatus: 'ACTIVE',
    phone: formData.phone || '+91 (020) 4000 1100',
    email: formData.email || 'admin@hospital.org',
    departments: formData.departments || ['General Medicine', 'Cardiology', 'Orthopaedics'],
    featuredSpecialty: formData.departments ? formData.departments[0] : 'General Medicine'
  };

  state.hospitals.push(newHospital);
  saveAppState(state);

  try {
    const reg = JSON.parse(localStorage.getItem('registeredHospitals')) || [];
    if (!reg.some(r => r.id === newHospital.id)) {
      reg.push(newHospital);
      localStorage.setItem('registeredHospitals', JSON.stringify(reg));
    }
  } catch (e) {}

  return { hospital: newHospital, applicationId: appId };
}

function addDoctorToHospital(hospitalId, doctorData) {
  const state = getAppState();
  const newDoc = {
    doctorId: `DOC-00${state.doctors.length + 1}`,
    hospitalId: hospitalId || 'H001',
    hospitalName: (state.hospitals.find(h => h.id === hospitalId) || state.hospitals[0]).name,
    name: doctorData.name || 'Dr. Consultant',
    specialization: doctorData.specialization || 'Consultant Specialist',
    department: doctorData.department || 'General Medicine',
    qualifications: doctorData.qualifications || 'MBBS, MD',
    experienceYears: parseInt(doctorData.experienceYears, 10) || 8,
    room: doctorData.room || 'Room 101',
    rating: 4.7,
    reviewCount: 1,
    nextAvailable: 'Today, 11:00 AM',
    currentOpdWaitMin: 20,
    consultationFee: doctorData.fee || '₹500',
    languages: ['English', 'हिन्दी', 'मराठी'],
    opdTimings: doctorData.opdTimings || '09:00 AM – 01:00 PM'
  };

  state.doctors.push(newDoc);
  saveAppState(state);
  showHospitalToast(`Added ${newDoc.name} to hospital specialist roster`, 'info');
}

function setOpdQueueStatus(deptKey, newStatus) {
  const state = getAppState();
  state.queueStatus = newStatus;
  saveAppState(state);
  showHospitalToast(`OPD Queue Status: ${newStatus}`, 'info');
}

function renderPublicDoctorDirectory(hospitalFilter = 'all', deptFilter = 'all', searchTerm = '') {
  const state = getAppState();
  const container = document.getElementById('public-doctors-grid');
  if (!container) return;

  const lower = searchTerm.toLowerCase().trim();
  let list = state.doctors || [];

  if (hospitalFilter !== 'all') {
    list = list.filter(d => d.hospitalId === hospitalFilter);
  }
  if (deptFilter !== 'all') {
    list = list.filter(d => d.department.toLowerCase() === deptFilter.toLowerCase());
  }
  if (lower) {
    list = list.filter(d => 
      d.name.toLowerCase().includes(lower) || 
      d.department.toLowerCase().includes(lower) || 
      d.hospitalName.toLowerCase().includes(lower) ||
      d.specialization.toLowerCase().includes(lower)
    );
  }

  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">${t('doctors.noDoctorsFound')}</div>`;
    return;
  }

  list.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    card.style.cssText = 'background:var(--bg-paper); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:22px; display:flex; flex-direction:column; justify-content:space-between;';
    
    const expText = t('doctors.experience', { years: doc.experienceYears });
    const waitLabel = t('doctors.currentWait');
    const feeLabel = t('doctors.consultationFee');
    const bookBtnText = t('doctors.bookConsultation');
    const reviewsText = t('hospitals.reviews', { count: doc.reviewCount });

    card.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <span class="utility-badge" style="font-size:0.7rem; background:var(--bg-cream); margin-bottom:4px; display:inline-block;">${doc.department.toUpperCase()}</span>
            <h3 style="margin:0 0 2px 0; font-family:var(--font-serif); font-size:1.25rem;">${doc.name}</h3>
            <div class="text-xs text-muted">${doc.qualifications}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.9rem; font-weight:700; color:var(--accent-terracotta);">★ ${doc.rating}</div>
            <div class="text-xs text-muted">${reviewsText}</div>
          </div>
        </div>

        <div style="background:var(--bg-cream); padding:10px 12px; border-radius:var(--radius-sm); font-size:0.85rem; margin:12px 0;">
          <div style="font-weight:600; color:var(--primary-green); margin-bottom:2px;">${doc.hospitalName}</div>
          <div class="text-xs text-muted">${doc.room} • ${expText}</div>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.8rem; margin-bottom:16px;">
          <div>
            <span class="text-muted">${waitLabel}</span><br>
            <strong style="color:var(--accent-terracotta);">~${doc.currentOpdWaitMin} mins</strong>
          </div>
          <div>
            <span class="text-muted">${feeLabel}</span><br>
            <strong>${doc.consultationFee}</strong>
          </div>
        </div>
      </div>

      <div style="border-top:1px solid var(--border-subtle); padding-top:14px; display:flex; gap:10px;">
        <a href="appointments.html?doctor=${doc.doctorId}" class="btn btn-primary btn-block btn-sm">
          ${bookBtnText}
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// Manage Subscription & Add Doctor Modals (hospital.html)
// --------------------------------------------------------------------------
function openManageSubscriptionModal() {
  const modal = document.getElementById('manage-subscription-modal');
  if (modal) modal.classList.add('active');
}

function closeManageSubscriptionModal() {
  const modal = document.getElementById('manage-subscription-modal');
  if (modal) modal.classList.remove('active');
}

function saveSubscriptionTier(tierName, price) {
  const state = getAppState();
  const hosp = state.hospitals.find(h => h.id === 'H001') || state.hospitals[0];
  hosp.plan = tierName;
  hosp.planPrice = price;
  saveAppState(state);
  showHospitalToast(`Subscription tier updated to ${tierName} (${price})`, 'info');
  closeManageSubscriptionModal();
  setTimeout(() => window.location.reload(), 600);
}

function openAddDoctorModal() {
  const modal = document.getElementById('add-doctor-modal');
  if (modal) modal.classList.add('active');
}

function closeAddDoctorModal() {
  const modal = document.getElementById('add-doctor-modal');
  if (modal) modal.classList.remove('active');
}

function saveNewDoctorFromForm(e) {
  e.preventDefault();
  const name = document.getElementById('doc-name')?.value || 'Dr. Specialist';
  const dept = document.getElementById('doc-dept')?.value || 'General Medicine';
  const qual = document.getElementById('doc-qual')?.value || 'MBBS, MD';
  const exp = document.getElementById('doc-exp')?.value || '10';
  const room = document.getElementById('doc-room')?.value || 'Room 102';
  const fee = document.getElementById('doc-fee')?.value || '₹500';

  addDoctorToHospital('H001', {
    name, department: dept, specialization: dept, qualifications: qual,
    experienceYears: exp, room, fee
  });

  closeAddDoctorModal();
}

// --------------------------------------------------------------------------
// Geolocation Nearby Discovery (index.html & map.html)
// --------------------------------------------------------------------------
function renderHomeDiscoveryCards(userLat = 18.5204, userLng = 73.8567) {
  const container = document.getElementById('home-hospitals-grid');
  if (!container) return;

  const nearby = getNearbyHospitals(userLat, userLng);
  container.innerHTML = '';

  nearby.forEach((h, idx) => {
    const card = document.createElement('div');
    card.className = 'hospital-card';
    card.style.cssText = 'background:var(--bg-paper); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:20px; display:flex; flex-direction:column; justify-content:space-between; position:relative;';

    const isBest = idx === 0;
    const viewDetailsText = t('hospitals.viewHospital');
    const bookOpdText = t('hospitals.bookAppointment');
    const reviewsText = t('hospitals.reviews', { count: h.reviewCount });

    card.innerHTML = `
      <div>
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            ${isBest ? '<div class="best-match-badge" style="margin-bottom:6px;">★ BEST MATCH • NEAREST & LOWEST WAIT</div>' : ''}
            <h3 style="margin:0 0 2px 0; font-family:var(--font-serif); font-size:1.25rem;">
              <a href="hospital-details.html?id=${h.id}" style="color:var(--text-main); text-decoration:none;">${h.name}</a>
            </h3>
            <div class="text-xs text-muted">${h.location}, ${h.city}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:700; color:var(--accent-terracotta);">★ ${h.rating}</div>
            <div class="text-xs text-muted">${reviewsText}</div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); background:var(--bg-cream); border-radius:var(--radius-sm); padding:10px; margin:12px 0; text-align:center; font-size:0.8rem;">
          <div>
            <div class="text-muted text-xs">Distance</div>
            <strong style="font-family:var(--font-mono); color:var(--primary-green); font-size:1rem;">${h.distanceKm} km</strong>
          </div>
          <div>
            <div class="text-muted text-xs">OPD Wait</div>
            <strong style="font-family:var(--font-mono); color:var(--accent-terracotta); font-size:1rem;">${h.currentOpdWaitMin} min</strong>
          </div>
          <div>
            <div class="text-muted text-xs">Beds</div>
            <strong style="font-family:var(--font-mono);">${h.beds}</strong>
          </div>
        </div>

        <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:14px;">
          ${(h.departments || []).slice(0, 4).map(d => `<span class="utility-badge" style="font-size:0.68rem; padding:2px 6px;">${d}</span>`).join('')}
        </div>
      </div>

      <div style="border-top:1px solid var(--border-subtle); padding-top:12px; display:flex; gap:8px;">
        <a href="hospital-details.html?id=${h.id}" class="btn btn-secondary btn-sm" style="flex:1; text-align:center;">${viewDetailsText}</a>
        <a href="appointments.html?hospital=${h.id}" class="btn btn-primary btn-sm" style="flex:1; text-align:center;">${bookOpdText}</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// Doctor Desk Live Queue Controller (doctor.html)
// --------------------------------------------------------------------------
function doctorCallNextPatient() {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  
  if (!dept || !dept.queue) return;

  const currentIdx = dept.queue.findIndex(p => p.status === 'serving');
  const nextIdx = dept.queue.findIndex(p => p.status === 'next');

  if (currentIdx !== -1) {
    dept.queue[currentIdx].status = 'completed';
  }

  let newlyCalledToken = null;
  let newlyCalledName = null;

  if (nextIdx !== -1) {
    dept.queue[nextIdx].status = 'serving';
    dept.currentServingNum = parseInt(dept.queue[nextIdx].token.replace(/[^0-9]/g, ''), 10);
    newlyCalledToken = dept.queue[nextIdx].token;
    newlyCalledName = dept.queue[nextIdx].name;

    const waitingList = dept.queue.filter(p => p.status === 'waiting');
    if (waitingList.length > 0) waitingList[0].status = 'next';
  } else {
    const waitingIdx = dept.queue.findIndex(p => p.status === 'waiting');
    if (waitingIdx !== -1) {
      dept.queue[waitingIdx].status = 'serving';
      dept.currentServingNum = parseInt(dept.queue[waitingIdx].token.replace(/[^0-9]/g, ''), 10);
      newlyCalledToken = dept.queue[waitingIdx].token;
      newlyCalledName = dept.queue[waitingIdx].name;

      const nextWaiting = dept.queue.find((p, idx) => idx > waitingIdx && p.status === 'waiting');
      if (nextWaiting) nextWaiting.status = 'next';
    } else {
      const nextNum = dept.currentServingNum + 1;
      const tokStr = `${dept.prefix}-${nextNum}`;
      dept.currentServingNum = nextNum;
      dept.queue.push({
        token: tokStr,
        name: 'Walk-in Patient',
        status: 'serving',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      newlyCalledToken = tokStr;
      newlyCalledName = 'Walk-in Patient';
    }
  }

  const nowTime = new Date().toLocaleTimeString();
  state.auditLog.unshift({
    time: nowTime,
    text: `${dept.doctor} called Token ${newlyCalledToken} (${newlyCalledName}) into ${dept.room}`
  });
  if (state.auditLog.length > 20) state.auditLog.pop();

  saveAppState(state);
  playHospitalChime();
  showHospitalToast(`Called Token ${newlyCalledToken} (${newlyCalledName}) into ${dept.room}`, 'info');
  renderDoctorDesk();
}

function doctorRecallCurrent() {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  const current = dept.queue.find(p => p.status === 'serving');
  if (current) {
    playHospitalChime();
    showHospitalToast(`Repeat Call: Token ${current.token} (${current.name}) to ${dept.room}`, 'alert');
  }
}

function doctorAddWalkin() {
  const name = prompt("Enter Patient Full Name for walk-in OPD registration:", "New Walk-in Patient");
  if (!name) return;

  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  const maxTokenNum = dept.queue.reduce((max, p) => {
    const num = parseInt(p.token.replace(/[^0-9]/g, ''), 10);
    return num > max ? num : max;
  }, dept.currentServingNum);

  const newToken = `${dept.prefix}-${maxTokenNum + 1}`;
  const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  dept.queue.push({
    token: newToken,
    name: name,
    status: 'waiting',
    time: now
  });

  state.auditLog.unshift({
    time: new Date().toLocaleTimeString(),
    text: `OPD Desk issued Walk-in Token ${newToken} for ${name} (${dept.name})`
  });

  saveAppState(state);
  showHospitalToast(`Generated Walk-in Token ${newToken} for ${name}`, 'info');
  renderDoctorDesk();
}

function renderDoctorDesk() {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  if (!dept) return;

  const currentServingEl = document.getElementById('doc-serving-token');
  const currentPatientNameEl = document.getElementById('doc-serving-name');
  const currentServingTimeEl = document.getElementById('doc-serving-time');
  const queueTableBody = document.getElementById('doc-queue-tbody');

  const currentPatient = dept.queue.find(p => p.status === 'serving') || {
    token: `${dept.prefix}-${dept.currentServingNum}`,
    name: 'Session In Progress',
    time: '—'
  };

  if (currentServingEl) currentServingEl.textContent = currentPatient.token;
  if (currentPatientNameEl) currentPatientNameEl.textContent = currentPatient.name;
  if (currentServingTimeEl) currentServingTimeEl.textContent = `Called at: ${currentPatient.time || '—'}`;

  if (queueTableBody) {
    queueTableBody.innerHTML = '';
    const activeAndWaiting = dept.queue.filter(p => p.status !== 'completed');

    activeAndWaiting.forEach((item, index) => {
      const tr = document.createElement('tr');
      if (item.status === 'serving') tr.className = 'serving-row';

      const estWaitMin = item.status === 'serving' ? '—' : `~${Math.round(index * dept.avgWaitPerPatientMin)} min`;
      const pillClass = item.status === 'serving' ? 'pill-next' : item.status === 'next' ? 'pill-next' : 'pill-waiting';
      const statusLabel = item.status === 'serving' ? 'Now Serving' : item.status === 'next' ? 'Next Due' : 'In Queue';

      tr.innerHTML = `
        <td><span class="token-tag">${item.token}</span></td>
        <td><strong>${item.name}</strong></td>
        <td><span class="status-pill ${pillClass}">${statusLabel}</span></td>
        <td style="font-family: var(--font-mono);">${estWaitMin}</td>
        <td>
          ${item.status === 'serving' 
            ? '<button class="btn btn-sm btn-terracotta" onclick="doctorRecallCurrent()">Repeat</button>' 
            : `<button class="btn btn-sm btn-secondary" onclick="doctorCallSpecificToken('${item.token}')">Call</button>`}
        </td>
      `;
      queueTableBody.appendChild(tr);
    });
  }
}

function doctorCallSpecificToken(targetToken) {
  const state = getAppState();
  const dept = state.departments[state.activeDept || 'cardiology'];
  
  const current = dept.queue.find(p => p.status === 'serving');
  if (current) current.status = 'completed';

  const target = dept.queue.find(p => p.token === targetToken);
  if (target) {
    target.status = 'serving';
    dept.currentServingNum = parseInt(target.token.replace(/[^0-9]/g, ''), 10);
    
    state.auditLog.unshift({
      time: new Date().toLocaleTimeString(),
      text: `${dept.doctor} directly called Token ${target.token} (${target.name})`
    });

    saveAppState(state);
    playHospitalChime();
    showHospitalToast(`Called Token ${target.token} (${target.name})`, 'info');
    renderDoctorDesk();
  }
}

// --------------------------------------------------------------------------
// Multi-Language Toggle System & Central Language Provider
// --------------------------------------------------------------------------
function setGlobalLanguage(lang) {
  try {
    localStorage.setItem('gws_language', lang);
  } catch (e) {}

  const state = getAppState();
  state.language = lang;
  saveAppState(state);

  applyTranslations(lang);

  if (broadcastChannel) {
    broadcastChannel.postMessage({ type: 'GWS_LANG_CHANGED', lang });
  }

  const langNames = { en: 'English', hi: 'हिन्दी (Hindi)', mr: 'मराठी (Marathi)' };
  showHospitalToast(`Language switched to ${langNames[lang] || lang}`, 'info');
}

function applyTranslations(lang) {
  const currentLang = lang || getGlobalLanguage();

  // 1. Update language switcher buttons
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  // 2. Translate text elements with [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translated = t(key);
    if (translated && translated !== key) {
      el.textContent = translated;
    }
  });

  // 3. Translate input placeholders with [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('placeholder', translated);
    }
  });

  // 4. Translate title and aria-labels
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('title', translated);
    }
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const translated = t(key);
    if (translated && translated !== key) {
      el.setAttribute('aria-label', translated);
    }
  });

  // 5. Re-render dynamic active page components in current language
  if (typeof handleHomeHospitalSearch === 'function' && document.getElementById('home-hospitals-container')) {
    handleHomeHospitalSearch();
  }
  if (typeof applyFiltersAndRender === 'function' && document.getElementById('hospitals-list-container')) {
    applyFiltersAndRender();
  }
  if (typeof renderPublicDoctorDirectory === 'function' && document.getElementById('public-doctors-grid')) {
    const hosp = document.getElementById('doc-hosp-filter') ? document.getElementById('doc-hosp-filter').value : 'all';
    const dept = document.getElementById('doc-dept-filter') ? document.getElementById('doc-dept-filter').value : 'all';
    const term = document.getElementById('doc-search-text') ? document.getElementById('doc-search-text').value : '';
    renderPublicDoctorDirectory(hosp, dept, term);
  }
  if (typeof renderHospitalDetails === 'function' && document.getElementById('hub-hosp-title')) {
    renderHospitalDetails();
  }
  if (typeof renderHospitalOptions === 'function' && document.getElementById('hospital-selector-cards')) {
    renderHospitalOptions();
    if (typeof renderDoctorOptions === 'function') renderDoctorOptions();
  }
  if (typeof renderLiveQueue === 'function' && document.getElementById('serving-token-number')) {
    renderLiveQueue();
  }
  if (typeof renderLabReports === 'function' && document.getElementById('lab-reports-list-container')) {
    renderLabReports(typeof activeCategory !== 'undefined' ? activeCategory : 'all');
  }
  if (typeof renderIcuVitals === 'function' && document.getElementById('icu-vitals-container')) {
    renderIcuVitals();
  }
  if (typeof renderDoctorDesk === 'function' && document.getElementById('doc-serving-token')) {
    renderDoctorDesk();
  }
  if (typeof renderHospitalOperations === 'function' && document.getElementById('admin-hospital-name')) {
    renderHospitalOperations();
  }
  if (typeof renderHomeDiscoveryCards === 'function' && document.getElementById('home-hospitals-grid')) {
    renderHomeDiscoveryCards();
  }
  if (typeof renderMedicineReminders === 'function' && document.getElementById('medicines-schedule-list')) {
    renderMedicineReminders();
  }
  if (typeof renderReviews === 'function' && document.getElementById('doctor-reviews-list')) {
    renderReviews();
  }
  if (typeof renderFloorPlan === 'function' && document.getElementById('floor-rooms-grid')) {
    renderFloorPlan(typeof currentFloor !== 'undefined' ? currentFloor : 0);
  }
}

// Auto-initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(getGlobalLanguage());
});

function toggleMobileNav() {
  const nav = document.getElementById('main-nav');
  if (nav) nav.classList.toggle('mobile-active');
}

// --------------------------------------------------------------------------
// Lab Reports Rendering & Report Modal Viewer (reports.html)
// --------------------------------------------------------------------------
function renderLabReports(category = 'all') {
  const state = getAppState();
  const listEl = document.getElementById('lab-reports-list-container');
  if (!listEl) return;

  const currentRole = GWS_Auth.getRole();
  // Privacy check: If not logged in as patient or doctor, show login prompt
  if (!currentRole) {
    listEl.innerHTML = `
      <div class="privacy-guard-container" style="margin: 20px 0;">
        <div style="font-size:2.2rem; margin-bottom:8px;">🔒</div>
        <span class="section-label" style="color:var(--accent-terracotta);">Confidential Medical Records</span>
        <h3 style="margin:4px 0 8px 0;">Patient Authentication Required</h3>
        <p class="text-sm text-muted" style="margin-bottom:18px; max-width:480px; margin-left:auto; margin-right:auto;">
          Pathology and laboratory test reports contain sensitive personal medical diagnostic data. Please sign in to verify your identity.
        </p>
        <button class="btn btn-primary" onclick="GWS_AuthModal.open('patient', 'reports.html')">
          Sign In as Patient (Rahul Sharma) →
        </button>
      </div>
    `;
    return;
  }

  let reports = state.labReports || [];
  if (category !== 'all') {
    reports = reports.filter(r => r.category === category);
  }

  listEl.innerHTML = '';
  if (reports.length === 0) {
    listEl.innerHTML = '<div style="text-align:center; padding:32px; color:var(--text-muted);">No reports found in this category.</div>';
    return;
  }

  reports.forEach(rep => {
    const card = document.createElement('div');
    card.className = 'report-item-card';
    card.innerHTML = `
      <div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
          <span class="utility-badge" style="font-size:0.7rem; background:var(--bg-cream);">${rep.hospitalName}</span>
          <h4 style="margin:0; font-size:1.05rem;">${rep.title}</h4>
          ${rep.isNew ? '<span class="utility-badge" style="background:var(--accent-terracotta-light); color:var(--accent-terracotta-dark); border-color:var(--accent-terracotta);">NEW</span>' : ''}
        </div>
        <div class="text-xs text-muted">
          Sample Collected: <strong>${rep.date}</strong> • Doctor: <strong>${rep.doctorName}</strong> • Patient: ${rep.patientName} (${rep.patientId})
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="status-pill ${rep.status === 'Available' ? 'pill-completed' : 'pill-waiting'}">
          ${rep.status}
        </span>
        ${rep.status === 'Available' 
          ? `<button class="btn btn-sm btn-primary" onclick="openReportViewer('${rep.reportId || rep.id}')">View Report</button>` 
          : `<button class="btn btn-sm btn-secondary" disabled>Processing</button>`}
      </div>
    `;
    listEl.appendChild(card);
  });
}

function openReportViewer(reportId) {
  const state = getAppState();
  const rep = (state.labReports || []).find(r => (r.reportId === reportId || r.id === reportId)) || state.labReports[0];
  if (!rep) return;

  const modal = document.getElementById('report-viewer-modal');
  const body = document.getElementById('report-viewer-content');
  if (!modal || !body) return;

  let paramRows = '';
  if (rep.parameters && rep.parameters.length > 0) {
    paramRows = rep.parameters.map(p => `
      <tr style="border-bottom: 1px solid var(--border-subtle);">
        <td style="padding:10px 14px; font-weight:600;">${p.name}</td>
        <td style="padding:10px 14px; font-family:var(--font-mono); font-weight:700; color:var(--primary-green);">${p.value}</td>
        <td style="padding:10px 14px; font-size:0.85rem; color:var(--text-muted);">${p.normal}</td>
      </tr>
    `).join('');
  } else {
    paramRows = `<tr><td colspan="3" style="padding:16px; text-align:center; color:var(--text-muted);">Test processing in pathology division.</td></tr>`;
  }

  body.innerHTML = `
    <div style="background:var(--primary-green); color:#ffffff; padding:18px 24px; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <span class="utility-badge" style="background:rgba(255,255,255,0.15); color:#ffffff; border-color:rgba(255,255,255,0.3);">
          NABL ACCREDITED DIGITAL DIAGNOSTIC REPORT
        </span>
        <h3 style="color:#ffffff; margin:6px 0 0 0; font-family:var(--font-serif);">${rep.title}</h3>
      </div>
      <button onclick="closeReportViewer()" style="color:#ffffff; font-size:1.6rem; line-height:1; background:none; border:none; cursor:pointer;">&times;</button>
    </div>

    <div style="padding:24px;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; background:var(--bg-cream); border:1px solid var(--border-subtle); padding:14px 18px; border-radius:var(--radius-sm); margin-bottom:20px; font-size:0.85rem;">
        <div>
          <div><strong>Patient Name:</strong> ${rep.patientName || 'Rahul Sharma'}</div>
          <div><strong>Patient ID / ABHA:</strong> ${rep.patientId || 'GWS-1024'}</div>
          <div><strong>Referring Doctor:</strong> ${rep.doctorName || 'Dr. Arjun Mehta'}</div>
        </div>
        <div>
          <div><strong>Hospital:</strong> ${rep.hospitalName}</div>
          <div><strong>Collection Date:</strong> ${rep.date}</div>
          <div><strong>Verification:</strong> <span style="color:var(--accent-success); font-weight:700;">✓ Digitally Certified</span></div>
        </div>
      </div>

      <h4 style="margin:0 0 10px 0; font-size:0.95rem;">Test Parameter Analysis</h4>
      <div style="border:1px solid var(--border-subtle); border-radius:var(--radius-sm); overflow:hidden; margin-bottom:20px;">
        <table style="width:100%; border-collapse:collapse; text-align:left;">
          <thead>
            <tr style="background:var(--bg-cream); border-bottom:2px solid var(--border-medium); font-size:0.8rem; text-transform:uppercase;">
              <th style="padding:10px 14px;">Parameter Name</th>
              <th style="padding:10px 14px;">Observed Value</th>
              <th style="padding:10px 14px;">Biological Reference Interval</th>
            </tr>
          </thead>
          <tbody>
            ${paramRows}
          </tbody>
        </table>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; border-top:1px solid var(--border-subtle); padding-top:16px;">
        <div class="text-xs text-muted">
          Verified by: Senior Pathologist, NABL Certified Laboratory • Report ID: <code>${rep.reportId || rep.id}</code>
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn btn-secondary btn-sm" onclick="window.print()">🖨️ Print Report</button>
          <button class="btn btn-primary btn-sm" onclick="showHospitalToast('Digital PDF downloaded to device storage', 'info')">📥 Download Certified PDF</button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeReportViewer() {
  const modal = document.getElementById('report-viewer-modal');
  if (modal) modal.classList.remove('active');
}

// --------------------------------------------------------------------------
// Doctor Assigned Patients Table (patients.html)
// --------------------------------------------------------------------------
function renderDoctorPatients(searchTerm = '', filterTab = 'all') {
  const tbody = document.getElementById('doctor-patients-tbody');
  if (!tbody) return;

  const currentRole = GWS_Auth.getRole();
  if (currentRole !== 'doctor' && currentRole !== 'admin') {
    requireAuthGuard(['doctor', 'admin'], 'Doctor Patient Register');
    return;
  }

  const filtered = searchDoctorPatients(searchTerm, filterTab);
  tbody.innerHTML = '';

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:24px; color:var(--text-muted);">No patients found matching criteria.</td></tr>`;
    return;
  }

  filtered.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding:12px 16px;"><span class="token-tag" style="background:var(--bg-cream);">${p.patientId}</span></td>
      <td style="padding:12px 16px;">
        <strong>${p.name}</strong>
        <div class="text-xs text-muted">${p.phone}</div>
      </td>
      <td style="padding:12px 16px;">${p.age} yrs / ${p.gender}</td>
      <td style="padding:12px 16px;"><span class="utility-badge" style="background:var(--bg-offwhite);">${p.bloodGroup}</span></td>
      <td style="padding:12px 16px;">
        <div>${p.lastVisit}</div>
        <div class="text-xs text-muted">${p.primaryDept}</div>
      </td>
      <td style="padding:12px 16px; text-align:right;">
        <a href="patient-history.html?id=${p.patientId}" class="btn btn-primary btn-sm">
          View Patient Profile →
        </a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// --------------------------------------------------------------------------
// Patient Clinical History Page (patient-history.html)
// --------------------------------------------------------------------------
function renderPatientHistoryPage() {
  const state = getAppState();
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = urlParams.get('id') || 'GWS-1024';

  const patient = state.patients.find(p => p.patientId === patientId) || state.patients[0];
  if (!patient) return;

  // Header Details
  const nameEl = document.getElementById('hist-patient-name');
  const idEl = document.getElementById('hist-patient-id');
  const detailsEl = document.getElementById('hist-patient-details');
  const bloodEl = document.getElementById('hist-blood-group');

  if (nameEl) nameEl.textContent = patient.name;
  if (idEl) idEl.textContent = `ID: ${patient.patientId} • ABHA: 91-4829-1029-4401`;
  if (detailsEl) detailsEl.textContent = `${patient.age} Yrs • ${patient.gender} • Phone: ${patient.phone} • Email: ${patient.email}`;
  if (bloodEl) bloodEl.textContent = patient.bloodGroup;

  // Timeline entries
  const timelineEl = document.getElementById('patient-history-timeline');
  if (timelineEl) {
    const historyList = state.medicalHistory.filter(h => h.patientId === patient.patientId);
    timelineEl.innerHTML = '';
    if (historyList.length === 0) {
      timelineEl.innerHTML = '<div class="text-muted" style="padding:16px;">No previous consultation records found.</div>';
    } else {
      historyList.forEach(hist => {
        const item = document.createElement('div');
        item.className = 'timeline-entry';
        item.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-content-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:8px;">
              <span class="timeline-date-tag">${hist.date}</span>
              <span class="utility-badge" style="background:var(--bg-cream); font-size:0.75rem;">${hist.department} • ${hist.hospitalName}</span>
            </div>
            <h4 style="margin:0 0 6px 0; font-size:1.05rem;">Chief Complaint: ${hist.complaint}</h4>
            <p class="text-sm" style="margin:0 0 10px 0; line-height:1.6; color:var(--text-main);">
              ${hist.notes}
            </p>
            <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:var(--text-muted); border-top:1px solid var(--border-subtle); padding-top:8px;">
              <span>Consulting Doctor: <strong>${hist.doctorName}</strong> (${hist.doctorId})</span>
              <span class="status-pill pill-completed">${hist.status}</span>
            </div>
          </div>
        `;
        timelineEl.appendChild(item);
      });
    }
  }

  // Lab reports for this patient
  const repListEl = document.getElementById('patient-associated-reports');
  if (repListEl) {
    const reps = state.labReports.filter(r => r.patientId === patient.patientId);
    repListEl.innerHTML = '';
    if (reps.length === 0) {
      repListEl.innerHTML = '<div class="text-muted" style="padding:12px;">No lab reports ordered yet.</div>';
    } else {
      reps.forEach(r => {
        const d = document.createElement('div');
        d.style.cssText = 'background:var(--bg-cream); border:1px solid var(--border-subtle); padding:12px 16px; border-radius:var(--radius-sm); margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;';
        d.innerHTML = `
          <div>
            <strong>${r.title}</strong>
            <div class="text-xs text-muted">${r.date} • ${r.hospitalName}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="openReportViewer('${r.reportId}')">View Diagnostic Data →</button>
        `;
        repListEl.appendChild(d);
      });
    }
  }
}

// --------------------------------------------------------------------------
// Consultation Note & Patient Update Modals
// --------------------------------------------------------------------------
function openAddNoteModal() {
  const modal = document.getElementById('add-consultation-modal');
  if (modal) modal.classList.add('active');
}

function closeAddNoteModal() {
  const modal = document.getElementById('add-consultation-modal');
  if (modal) modal.classList.remove('active');
}

function saveConsultationNoteFromForm(e) {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = urlParams.get('id') || 'GWS-1024';
  const dept = document.getElementById('note-dept')?.value || 'Cardiology';
  const complaint = document.getElementById('note-complaint')?.value || '';
  const notes = document.getElementById('note-notes')?.value || '';

  addConsultationNote(patientId, dept, complaint, notes);
  closeAddNoteModal();
  renderPatientHistoryPage();
}

function openAddUpdateModal() {
  const modal = document.getElementById('add-update-modal');
  if (modal) modal.classList.add('active');
}

function closeAddUpdateModal() {
  const modal = document.getElementById('add-update-modal');
  if (modal) modal.classList.remove('active');
}

function savePatientUpdateFromForm(e) {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const patientId = urlParams.get('id') || 'GWS-1024';
  const text = document.getElementById('update-text')?.value || '';

  addPatientUpdate(patientId, text);
  closeAddUpdateModal();
}

// --------------------------------------------------------------------------
// Hospital Operations & Telemetry (hospital.html)
// --------------------------------------------------------------------------
function renderHospitalOperations() {
  const tbody = document.getElementById('admin-departments-tbody');
  if (!tbody) return;

  const state = getAppState();
  const depts = state.departments;
  tbody.innerHTML = '';

  const waitingWord = getGlobalLanguage() === 'hi' ? 'प्रतीक्षारत' : (getGlobalLanguage() === 'mr' ? 'प्रतीक्षेत' : 'waiting');
  const minPatientWord = getGlobalLanguage() === 'hi' ? 'मिनट / मरीज' : (getGlobalLanguage() === 'mr' ? 'मिनिट / रुग्ण' : 'min / patient');
  const openDeskWord = getGlobalLanguage() === 'hi' ? 'डेस्क खोलें →' : (getGlobalLanguage() === 'mr' ? 'डेस्क उघडा →' : 'Open Desk →');

  Object.keys(depts).forEach(key => {
    const d = depts[key];
    const waitingCount = d.queue.filter(p => p.status === 'waiting' || p.status === 'next').length;
    const serving = d.queue.find(p => p.status === 'serving');

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="padding:12px 16px;"><strong>${d.name}</strong><br><span class="text-xs text-muted">${d.room}</span></td>
      <td style="padding:12px 16px;">${d.doctor}</td>
      <td style="padding:12px 16px;"><span class="token-tag">${serving ? serving.token : `${d.prefix}-${d.currentServingNum}`}</span></td>
      <td style="padding:12px 16px; font-family:var(--font-mono); font-weight:700;">${waitingCount} ${waitingWord}</td>
      <td style="padding:12px 16px;">${d.avgWaitPerPatientMin} ${minPatientWord}</td>
      <td style="padding:12px 16px;"><span class="utility-badge" style="background:${d.status === 'Active' ? 'var(--accent-success-light)' : 'var(--bg-cream)'}; color:${d.status === 'Active' ? 'var(--accent-success)' : 'var(--text-main)'};">${d.status}</span></td>
      <td style="padding:12px 16px; text-align:right;">
        <a href="doctor.html" class="btn btn-secondary btn-sm">${openDeskWord}</a>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// --------------------------------------------------------------------------
// Medicine Reminders Controller (medicines.html)
// --------------------------------------------------------------------------
function renderMedicineReminders() {
  const container = document.getElementById('medicines-schedule-list');
  if (!container) return;

  const state = getAppState();
  const list = state.medicines || DEFAULT_GWS_STATE.medicines;
  container.innerHTML = '';

  const takenWord = getGlobalLanguage() === 'hi' ? 'लिया गया' : (getGlobalLanguage() === 'mr' ? 'घेतले' : 'Taken');
  const upcomingWord = getGlobalLanguage() === 'hi' ? 'आगामी' : (getGlobalLanguage() === 'mr' ? 'आगामी' : 'Upcoming');
  const markTakenWord = getGlobalLanguage() === 'hi' ? '✓ लिया गया चिह्नित करें' : (getGlobalLanguage() === 'mr' ? '✓ घेतले म्हणून खूण करा' : '✓ Mark Taken');
  const undoWord = getGlobalLanguage() === 'hi' ? 'पूर्ववत करें' : (getGlobalLanguage() === 'mr' ? 'पूर्ववत करा' : 'Undo');

  list.forEach(med => {
    const card = document.createElement('div');
    card.className = 'medicine-item-card';
    card.style.cssText = 'background:var(--bg-paper); border:1px solid var(--border-medium); border-radius:var(--radius-sm); padding:16px 20px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;';
    const isTaken = med.status === 'taken';

    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:14px;">
        <div style="width:40px; height:40px; border-radius:50%; background:${isTaken ? 'var(--accent-success-light)' : 'var(--bg-cream)'}; display:flex; align-items:center; justify-content:center; font-size:1.2rem; color:${isTaken ? 'var(--accent-success)' : 'var(--text-muted)'};">
          ${isTaken ? '✓' : '💊'}
        </div>
        <div>
          <strong style="font-size:1.05rem; ${isTaken ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${med.name}</strong>
          <div class="text-xs text-muted">${med.instructions} • <strong>${med.time}</strong></div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:10px;">
        <span class="status-pill ${isTaken ? 'pill-completed' : 'pill-waiting'}">
          ${isTaken ? takenWord : upcomingWord}
        </span>
        <button type="button" class="btn btn-sm ${isTaken ? 'btn-secondary' : 'btn-primary'}" onclick="toggleMedicineStatus(${med.id})">
          ${isTaken ? undoWord : markTakenWord}
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleMedicineStatus(medId) {
  const state = getAppState();
  const med = (state.medicines || []).find(m => m.id === medId);
  if (med) {
    med.status = med.status === 'taken' ? 'upcoming' : 'taken';
    saveAppState(state);
    renderMedicineReminders();
    showHospitalToast(`Medication ${med.name} status updated`, 'info');
  }
}

function openAddMedicineModal() {
  const modal = document.getElementById('add-medicine-modal');
  if (modal) modal.classList.add('active');
}

function closeAddMedicineModal() {
  const modal = document.getElementById('add-medicine-modal');
  if (modal) modal.classList.remove('active');
}

function handleAddMedicineSubmit(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('new-med-name')?.value;
  const dose = document.getElementById('new-med-dose')?.value;
  const time = document.getElementById('new-med-time')?.value || '08:00 AM';

  if (!name) return;

  const state = getAppState();
  if (!state.medicines) state.medicines = [];

  const newMed = {
    id: Date.now(),
    name,
    instructions: dose || 'Take as prescribed',
    time,
    status: 'upcoming'
  };

  state.medicines.push(newMed);
  saveAppState(state);
  closeAddMedicineModal();
  renderMedicineReminders();
  showHospitalToast(`Added ${name} to daily medicine schedule`, 'info');
}

function onGlobalStateSync(state) {
  renderDoctorDesk();
  if (typeof renderPatientDashboard === 'function') renderPatientDashboard();
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  const state = getAppState();
  applyTranslations(state.language || 'en');
  if (document.getElementById('doc-serving-token')) renderDoctorDesk();
});

