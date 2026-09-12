/**
 * ==========================================================================
 * GWS — HEALTHCARE, CONNECTED.
 * Multi-Hospital Digital Healthcare Platform Engine
 * Pure Client-Side Architecture (HTML5 / CSS3 / Vanilla JS)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. DEMO HOSPITALS DATABASE (6 Distinct Fictional Healthcare Institutions)
// --------------------------------------------------------------------------
const DEMO_HOSPITALS = [
  {
    id: "H001",
    name: "Shantideep Multispeciality Hospital",
    city: "Pune",
    area: "Shivajinagar / FC Road",
    address: "Plot 42, Shivajinagar Institutional Zone, Pune, Maharashtra 411005",
    phone: "+91 (020) 2600 2400",
    emergencyPhone: "+91 (020) 2600 2400 / 108",
    distance: 2.4,
    rating: 4.7,
    reviewCount: 1248,
    accreditation: "NABH ACCREDITED (REG: NABH-2008-0182)",
    emergency: true,
    emergencyStatus: "OPEN 24×7",
    tagline: "Tertiary Care & Multispeciality Research Centre (Estd. 2008)",
    avgWaitMin: 28,
    nextApptSlot: "10:30 AM",
    emergencyResources: {
      ambulancesAvailable: 2,
      ambulancesBusy: 1,
      stretchers: 7,
      wheelchairs: 4
    },
    icu: {
      totalBeds: 18,
      occupiedBeds: 15,
      activePatient: {
        id: "GWS-2048",
        name: "Rajesh Sharma",
        age: 64,
        gender: "Male",
        bed: "Bed 12",
        unit: "ICU-A (Cardiovascular Intensive Care)",
        status: "UNDER CLOSE MONITORING",
        lastUpdate: "10:42 AM Today",
        doctor: "Dr. Suresh Menon (MD, FNB Critical Care)",
        accessCode: "GWS-4821",
        authorizedFamily: ["Anita Sharma (Wife)", "Priya Sharma (Daughter)", "Rahul Sharma (Son)"],
        doctorQuote: '"Patient remains stable under current supportive care. The medical team continues close monitoring."',
        medicines: [
          { name: "IV Noradrenaline Infusion", dose: "0.04 mcg/kg/min", schedule: "Continuous Infusion", status: "Active" },
          { name: "Inj. Ceftriaxone 1g IV", dose: "1g in 100ml NS", schedule: "12 Hourly (08:00 AM / 08:00 PM)", status: "Active" },
          { name: "Inj. Pantoprazole 40mg IV", dose: "40mg Bolus", schedule: "Once Daily (07:00 AM)", status: "Active" },
          { name: "Inj. Heparin 5000 IU Subcut", dose: "5000 IU", schedule: "8 Hourly", status: "Active" },
          { name: "IV Potassium Chloride Infusion", dose: "20 mEq in 500ml NS", schedule: "As indicated", status: "Active" }
        ],
        conditions: [
          { condition: "Post-CABG Cardiac Monitoring", status: "Under Treatment", plain: "The patient is recovering well from coronary artery bypass surgery with continuous heart rhythm monitoring." },
          { condition: "Hemodynamic Support", status: "Being Monitored", plain: "Blood pressure and heart circulation are being actively supported and steadily stabilized by the medical team." },
          { condition: "Type 2 Diabetes (Glycemic Balance)", status: "Being Monitored", plain: "Blood sugar levels are being regularly checked and maintained within the target recovery range." },
          { condition: "Respiratory Support", status: "Stable", plain: "Breathing support is standard high-flow oxygen, keeping blood oxygen saturation steady at 98%." }
        ],
        updates: [
          { time: "10:42 AM Today", doctor: "Dr. Suresh Menon", text: "Patient remains stable under current supportive care. The medical team continues close monitoring." },
          { time: "07:30 AM Today", doctor: "Dr. Neha Shah", text: "Morning arterial blood gas and electrolyte panels show steady improvement. Tapering vasopressor support as planned." },
          { time: "11:15 PM Yesterday", doctor: "Dr. Suresh Menon", text: "Night vital parameters maintained within target hemodynamics without critical alarms." }
        ]
      }
    },
    departments: {
      cardiology: {
        name: "Cardiology OPD",
        doctor: "Dr. Arjun Mehta",
        qualifications: "MBBS, MD, DM (Cardiology)",
        room: "Room 104, 1st Floor",
        prefix: "A",
        currentServingNum: 109,
        avgWaitPerPatientMin: 4.0,
        status: "Active",
        consultationFee: "₹800",
        queue: [
          { token: "A-109", name: "Devji Bhai Solanki", status: "serving", time: "10:35 AM" },
          { token: "A-110", name: "Rajesh Sharma", status: "next", time: "10:45 AM" },
          { token: "A-111", name: "Meena Ben Patel", status: "waiting", time: "10:50 AM" },
          { token: "A-112", name: "Devendra Joshi", status: "waiting", time: "10:55 AM" },
          { token: "A-113", name: "Kavita Sundaram", status: "waiting", time: "11:00 AM" },
          { token: "A-114", name: "Mohd. Zubair Khan", status: "waiting", time: "11:05 AM" },
          { token: "A-115", name: "Pooja Bhatt", status: "waiting", time: "11:10 AM" },
          { token: "A-116", name: "Girish Chandra Vyas", status: "waiting", time: "11:15 AM" },
          { token: "A-117", name: "Rahul Sharma (You)", status: "waiting", time: "11:20 AM" },
          { token: "A-118", name: "Bhavna Ben Shah", status: "waiting", time: "11:25 AM" },
          { token: "A-119", name: "Rameshwar Lal", status: "waiting", time: "11:30 AM" },
          { token: "A-120", name: "Sunita Chauhan", status: "waiting", time: "11:35 AM" }
        ]
      },
      orthopaedics: {
        name: "Orthopaedics & Joint Surgery",
        doctor: "Dr. Neha Shah",
        qualifications: "MBBS, MS (Ortho), MCh",
        room: "Room 208, 2nd Floor",
        prefix: "B",
        currentServingNum: 204,
        avgWaitPerPatientMin: 5.0,
        status: "Busy",
        consultationFee: "₹850",
        queue: [
          { token: "B-204", name: "Harish Bhai Parmar", status: "serving", time: "10:30 AM" },
          { token: "B-205", name: "Anita Verma", status: "next", time: "10:40 AM" },
          { token: "B-206", name: "Kishanlal Gupta", status: "waiting", time: "10:45 AM" },
          { token: "B-207", name: "Ratan Tata", status: "waiting", time: "10:50 AM" }
        ]
      },
      medicine: {
        name: "General Medicine OPD",
        doctor: "Dr. Rohan Patel",
        qualifications: "MBBS, MD (General Medicine)",
        room: "Room 112, 1st Floor",
        prefix: "C",
        currentServingNum: 315,
        avgWaitPerPatientMin: 3.8,
        status: "Heavy",
        consultationFee: "₹600",
        queue: [
          { token: "C-315", name: "Sureshbhai Rana", status: "serving", time: "10:38 AM" },
          { token: "C-316", name: "Pramila Trivedi", status: "next", time: "10:42 AM" },
          { token: "C-317", name: "Vijay Kelkar", status: "waiting", time: "10:46 AM" }
        ]
      },
      paediatrics: {
        name: "Paediatrics & Neonatal Care",
        doctor: "Dr. Priya Joshi",
        qualifications: "MBBS, MD (Paediatrics)",
        room: "Room 105, 1st Floor",
        prefix: "D",
        currentServingNum: 402,
        avgWaitPerPatientMin: 4.5,
        status: "Active",
        consultationFee: "₹700",
        queue: [
          { token: "D-402", name: "Master Aarav Shah", status: "serving", time: "10:32 AM" },
          { token: "D-403", name: "Baby Diya Mehta", status: "next", time: "10:45 AM" }
        ]
      }
    }
  },
  {
    id: "H002",
    name: "Aarogya Care Hospital",
    city: "Pune",
    area: "Kothrud / Paud Road",
    address: "88, Paud Road, Near Ideal Colony, Kothrud, Pune, Maharashtra 411038",
    phone: "+91 (020) 2544 8800",
    emergencyPhone: "+91 (020) 2544 8811 / 108",
    distance: 3.1,
    rating: 4.5,
    reviewCount: 890,
    accreditation: "NABH ACCREDITED & ISO 9001:2015",
    emergency: true,
    emergencyStatus: "OPEN 24×7",
    tagline: "Advanced Neuroscience, Cardiac & Emergency Care",
    avgWaitMin: 41,
    nextApptSlot: "11:00 AM",
    emergencyResources: {
      ambulancesAvailable: 3,
      ambulancesBusy: 0,
      stretchers: 9,
      wheelchairs: 6
    },
    icu: {
      totalBeds: 14,
      occupiedBeds: 11,
      activePatient: null
    },
    departments: {
      cardiology: {
        name: "Cardiology OPD",
        doctor: "Dr. Vikram Ranade",
        qualifications: "MBBS, MD, DNB (Cardiology)",
        room: "Room 101, Ground Floor",
        prefix: "C",
        currentServingNum: 42,
        avgWaitPerPatientMin: 4.5,
        status: "Active",
        consultationFee: "₹750",
        queue: [
          { token: "C-042", name: "Anil Kulkarni", status: "serving", time: "10:30 AM" },
          { token: "C-043", name: "Sunil Shinde", status: "next", time: "10:40 AM" },
          { token: "C-044", name: "Meera Bhave", status: "waiting", time: "10:48 AM" }
        ]
      },
      neurology: {
        name: "Neurology & Stroke Centre",
        doctor: "Dr. Sunita Kulkarni",
        qualifications: "MBBS, MD, DM (Neurology)",
        room: "Room 202, 2nd Floor",
        prefix: "N",
        currentServingNum: 18,
        avgWaitPerPatientMin: 6.0,
        status: "Active",
        consultationFee: "₹900",
        queue: [
          { token: "N-018", name: "Dattatray Gokhale", status: "serving", time: "10:25 AM" },
          { token: "N-019", name: "Geeta Deshpande", status: "next", time: "10:35 AM" }
        ]
      },
      medicine: {
        name: "General Internal Medicine",
        doctor: "Dr. Amit Deshmukh",
        qualifications: "MBBS, MD (Medicine)",
        room: "Room 103, 1st Floor",
        prefix: "M",
        currentServingNum: 88,
        avgWaitPerPatientMin: 4.0,
        status: "Busy",
        consultationFee: "₹650",
        queue: [
          { token: "M-088", name: "Sandhya Patil", status: "serving", time: "10:30 AM" }
        ]
      },
      ent: {
        name: "ENT & Head Neck Surgery",
        doctor: "Dr. Sneha Gokhale",
        qualifications: "MBBS, MS (ENT)",
        room: "Room 108, 1st Floor",
        prefix: "E",
        currentServingNum: 12,
        avgWaitPerPatientMin: 3.5,
        status: "Active",
        consultationFee: "₹600",
        queue: [
          { token: "E-012", name: "Prashant Jagtap", status: "serving", time: "10:35 AM" }
        ]
      }
    }
  },
  {
    id: "H003",
    name: "Lifeline Medical Centre",
    city: "Pune",
    area: "Baner / Aundh",
    address: "24, Baner Main Road, Near Pancard Club Road, Baner, Pune 411045",
    phone: "+91 (020) 2729 5500",
    emergencyPhone: "+91 (020) 2729 5511 / 108",
    distance: 1.8,
    rating: 4.8,
    reviewCount: 1620,
    accreditation: "NABH ACCREDITED & NABL CERTIFIED",
    emergency: true,
    emergencyStatus: "OPEN 24×7",
    tagline: "Shortest OPD Waiting Times • Express Specialist Clinics",
    avgWaitMin: 18, // Shortest Wait!
    nextApptSlot: "10:15 AM",
    emergencyResources: {
      ambulancesAvailable: 4,
      ambulancesBusy: 1,
      stretchers: 12,
      wheelchairs: 8
    },
    icu: {
      totalBeds: 16,
      occupiedBeds: 10,
      activePatient: null
    },
    departments: {
      cardiology: {
        name: "Cardiology OPD",
        doctor: "Dr. Rajesh Kulkarni",
        qualifications: "MBBS, MD, DM (Cardiology)",
        room: "Room 201, 2nd Floor",
        prefix: "L",
        currentServingNum: 34,
        avgWaitPerPatientMin: 3.5,
        status: "Fast-Moving",
        consultationFee: "₹750",
        queue: [
          { token: "L-034", name: "Kishor Bapat", status: "serving", time: "10:35 AM" },
          { token: "L-035", name: "Usha Nadkarni", status: "next", time: "10:42 AM" }
        ]
      },
      medicine: {
        name: "General Medicine OPD",
        doctor: "Dr. Farhan Shaikh",
        qualifications: "MBBS, MD (Medicine)",
        room: "Room 110, 1st Floor",
        prefix: "G",
        currentServingNum: 81,
        avgWaitPerPatientMin: 3.0,
        status: "Fast-Moving",
        consultationFee: "₹550",
        queue: [
          { token: "G-081", name: "Vinayak Apte", status: "serving", time: "10:36 AM" },
          { token: "G-082", name: "Sarita Dixit", status: "next", time: "10:40 AM" }
        ]
      },
      gynaecology: {
        name: "Obstetrics & Gynaecology",
        doctor: "Dr. Ananya Sen",
        qualifications: "MBBS, MD, DGO",
        room: "Room 106, 1st Floor",
        prefix: "W",
        currentServingNum: 25,
        avgWaitPerPatientMin: 4.5,
        status: "Active",
        consultationFee: "₹700",
        queue: [
          { token: "W-025", name: "Deepali Joshi", status: "serving", time: "10:30 AM" }
        ]
      },
      diagnostics: {
        name: "Comprehensive Diagnostics & Imaging",
        doctor: "Dr. Manisha Rao",
        qualifications: "MBBS, DMRD (Radiology)",
        room: "Wing C, Diagnostic Lab",
        prefix: "D",
        currentServingNum: 50,
        avgWaitPerPatientMin: 2.5,
        status: "Fast-Moving",
        consultationFee: "Standard Rates",
        queue: [
          { token: "D-050", name: "Abhay Kunte", status: "serving", time: "10:38 AM" }
        ]
      }
    }
  },
  {
    id: "H004",
    name: "Sahyadri City Hospital",
    city: "Pune",
    area: "Camp / Pune Station",
    address: "33/B, Sassoon Road, Near Pune Railway Station, Pune 411001",
    phone: "+91 (020) 2613 6000",
    emergencyPhone: "+91 (020) 2613 6011 / 108",
    distance: 4.2,
    rating: 4.6,
    reviewCount: 1150,
    accreditation: "NABH ACCREDITED & AHERF NETWORK",
    emergency: true,
    emergencyStatus: "OPEN 24×7",
    tagline: "Excellence in Joint Replacement, Oncology & Critical Care",
    avgWaitMin: 35,
    nextApptSlot: "11:30 AM",
    emergencyResources: {
      ambulancesAvailable: 2,
      ambulancesBusy: 2,
      stretchers: 8,
      wheelchairs: 5
    },
    icu: {
      totalBeds: 22,
      occupiedBeds: 19,
      activePatient: null
    },
    departments: {
      orthopaedics: {
        name: "Orthopaedics & Joint Replacement",
        doctor: "Dr. Deepak Salunkhe",
        qualifications: "MBBS, MS (Ortho)",
        room: "Room 302, 3rd Floor",
        prefix: "O",
        currentServingNum: 58,
        avgWaitPerPatientMin: 5.0,
        status: "Active",
        consultationFee: "₹850",
        queue: [
          { token: "O-058", name: "Gajanan More", status: "serving", time: "10:30 AM" },
          { token: "O-059", name: "Radha Sathe", status: "next", time: "10:40 AM" }
        ]
      },
      cardiology: {
        name: "Cardiology OPD",
        doctor: "Dr. Meenakshi Iyer",
        qualifications: "MBBS, MD, DNB",
        room: "Room 205, 2nd Floor",
        prefix: "S",
        currentServingNum: 29,
        avgWaitPerPatientMin: 4.2,
        status: "Active",
        consultationFee: "₹800",
        queue: [
          { token: "S-029", name: "Anand Pandit", status: "serving", time: "10:35 AM" }
        ]
      },
      surgery: {
        name: "General & Laparoscopic Surgery",
        doctor: "Dr. Pravin Jadhav",
        qualifications: "MBBS, MS, FAIS",
        room: "Room 301, 3rd Floor",
        prefix: "J",
        currentServingNum: 14,
        avgWaitPerPatientMin: 5.5,
        status: "Active",
        consultationFee: "₹750",
        queue: [
          { token: "J-014", name: "Kamalakar Kale", status: "serving", time: "10:32 AM" }
        ]
      }
    }
  },
  {
    id: "H005",
    name: "Nirmal Healthcare Institute",
    city: "Pune",
    area: "Deccan Gymkhana",
    address: "12, Prabhat Road, Lane 4, Deccan, Pune, Maharashtra 411004",
    phone: "+91 (020) 2567 1100",
    emergencyPhone: "+91 (020) 2567 1122 / 108",
    distance: 5.0,
    rating: 4.4,
    reviewCount: 740,
    accreditation: "NABH ACCREDITED",
    emergency: true,
    emergencyStatus: "OPEN 24×7",
    tagline: "Dedicated Paediatric, Dermatology & Family Health Centre",
    avgWaitMin: 22,
    nextApptSlot: "10:45 AM",
    emergencyResources: {
      ambulancesAvailable: 1,
      ambulancesBusy: 1,
      stretchers: 5,
      wheelchairs: 3
    },
    icu: {
      totalBeds: 10,
      occupiedBeds: 6,
      activePatient: null
    },
    departments: {
      paediatrics: {
        name: "Paediatrics & Child Health",
        doctor: "Dr. Shalini Wagh",
        qualifications: "MBBS, MD (Paediatrics)",
        room: "Room 102, 1st Floor",
        prefix: "P",
        currentServingNum: 61,
        avgWaitPerPatientMin: 4.0,
        status: "Active",
        consultationFee: "₹650",
        queue: [
          { token: "P-061", name: "Baby Anvi", status: "serving", time: "10:30 AM" },
          { token: "P-062", name: "Master Kabir", status: "next", time: "10:40 AM" }
        ]
      },
      dermatology: {
        name: "Dermatology & Cosmetology",
        doctor: "Dr. Nilesh Bapat",
        qualifications: "MBBS, MD, DVD",
        room: "Room 107, 1st Floor",
        prefix: "D",
        currentServingNum: 19,
        avgWaitPerPatientMin: 3.5,
        status: "Active",
        consultationFee: "₹600",
        queue: [
          { token: "D-019", name: "Shweta Kadam", status: "serving", time: "10:35 AM" }
        ]
      },
      medicine: {
        name: "Family Medicine OPD",
        doctor: "Dr. Sameer More",
        qualifications: "MBBS, MD (Medicine)",
        room: "Room 111, 1st Floor",
        prefix: "F",
        currentServingNum: 44,
        avgWaitPerPatientMin: 3.2,
        status: "Active",
        consultationFee: "₹500",
        queue: [
          { token: "F-044", name: "Hemant Chitale", status: "serving", time: "10:36 AM" }
        ]
      }
    }
  },
  {
    id: "H006",
    name: "Jeevan Jyoti Hospital",
    city: "Pune",
    area: "Hadapsar / Magarpatta",
    address: "55, Solapur Road, Near Magarpatta Flyover, Hadapsar, Pune 411028",
    phone: "+91 (020) 2687 4400",
    emergencyPhone: "+91 (020) 2687 4411 / 108",
    distance: 6.5,
    rating: 4.3,
    reviewCount: 610,
    accreditation: "NABH ENTRY-LEVEL CERTIFIED",
    emergency: true,
    emergencyStatus: "OPEN 24×7",
    tagline: "Community Healthcare, Orthopaedics & Eye Care",
    avgWaitMin: 15, // Fastest Turnaround
    nextApptSlot: "10:00 AM",
    emergencyResources: {
      ambulancesAvailable: 2,
      ambulancesBusy: 0,
      stretchers: 6,
      wheelchairs: 4
    },
    icu: {
      totalBeds: 12,
      occupiedBeds: 8,
      activePatient: null
    },
    departments: {
      medicine: {
        name: "General Medicine OPD",
        doctor: "Dr. Ramesh Godbole",
        qualifications: "MBBS, MD (Medicine)",
        room: "Room 101, Ground Floor",
        prefix: "J",
        currentServingNum: 75,
        avgWaitPerPatientMin: 2.8,
        status: "Fast-Moving",
        consultationFee: "₹450",
        queue: [
          { token: "J-075", name: "Ashok Jagdale", status: "serving", time: "10:35 AM" },
          { token: "J-076", name: "Suman Shirole", status: "next", time: "10:40 AM" }
        ]
      },
      ophthalmology: {
        name: "Ophthalmology & Eye Clinic",
        doctor: "Dr. Vandana Shinde",
        qualifications: "MBBS, MS (Eye)",
        room: "Room 104, 1st Floor",
        prefix: "V",
        currentServingNum: 22,
        avgWaitPerPatientMin: 3.5,
        status: "Active",
        consultationFee: "₹500",
        queue: [
          { token: "V-022", name: "Nitin Mahajan", status: "serving", time: "10:32 AM" }
        ]
      },
      orthopaedics: {
        name: "Orthopaedics & Fracture Clinic",
        doctor: "Dr. Harish Kale",
        qualifications: "MBBS, MS (Ortho)",
        room: "Room 203, 2nd Floor",
        prefix: "K",
        currentServingNum: 31,
        avgWaitPerPatientMin: 4.0,
        status: "Active",
        consultationFee: "₹600",
        queue: [
          { token: "K-031", name: "Tukaram Thorat", status: "serving", time: "10:36 AM" }
        ]
      }
    }
  }
];

// --------------------------------------------------------------------------
// 2. CENTRAL STATE INITIALIZER
// --------------------------------------------------------------------------
const DEFAULT_GWS_STATE = {
  selectedHospitalId: "H001",
  selectedCity: "Pune",
  userLocation: {
    lat: 18.5204,
    lng: 73.8567,
    city: "Pune",
    isLive: false
  },

  currentUser: {
    role: "patient",
    name: "Rahul Sharma",
    email: "patient@demo.com",
    patientId: "GWS-1024",
    phone: "+91 98765 43210"
  },

  language: "en",
  hospitals: JSON.parse(JSON.stringify(DEMO_HOSPITALS)),

  userToken: {
    hospitalId: "H001",
    hospitalName: "Shantideep Multispeciality Hospital",
    token: "A-117",
    dept: "cardiology",
    doctor: "Dr. Arjun Mehta",
    room: "Room 104, 1st Floor",
    name: "Rahul Sharma",
    date: "18 Sep 2026",
    timeSlot: "10:30 AM",
    avgWaitPerPatientMin: 4.0
  },

  appointments: [
    {
      id: "GWS-AP-4821",
      hospitalId: "H001",
      hospitalName: "Shantideep Multispeciality Hospital",
      department: "Cardiology OPD",
      deptKey: "cardiology",
      doctor: "Dr. Arjun Mehta",
      room: "Room 104, 1st Floor",
      date: "18 Sep 2026",
      time: "10:30 AM",
      token: "A-117",
      patientName: "Rahul Sharma",
      phone: "+91 98765 43210",
      status: "Confirmed"
    }
  ],

  labReports: [
    {
      id: "REP-101",
      hospitalId: "H001",
      hospitalName: "Shantideep Multispeciality Hospital",
      title: "Complete Blood Count (CBC)",
      category: "blood",
      date: "18 Sep 2026",
      status: "Available",
      isNew: true,
      labAccreditation: "NABL (ISO 15189:2012) Cert # M-0412",
      parameters: [
        { name: "Haemoglobin", value: "13.8 g/dL", normal: "13.0 - 17.0 g/dL", flag: "Normal" },
        { name: "Total WBC Count", value: "7,200 /µL", normal: "4,000 - 11,000 /µL", flag: "Normal" },
        { name: "Platelet Count", value: "2.45 lakh/µL", normal: "1.50 - 4.50 lakh/µL", flag: "Normal" },
        { name: "Total RBC Count", value: "4.8 million/µL", normal: "4.5 - 5.5 million/µL", flag: "Normal" },
        { name: "Packed Cell Volume (PCV)", value: "41.2 %", normal: "40.0 - 50.0 %", flag: "Normal" }
      ]
    },
    {
      id: "REP-102",
      hospitalId: "H002",
      hospitalName: "Aarogya Care Hospital",
      title: "Lipid Profile Screen",
      category: "blood",
      date: "14 Sep 2026",
      status: "Available",
      isNew: false,
      labAccreditation: "NABL Cert # M-0881",
      parameters: [
        { name: "Total Cholesterol", value: "184 mg/dL", normal: "< 200 mg/dL", flag: "Normal" },
        { name: "HDL Cholesterol", value: "46 mg/dL", normal: "> 40 mg/dL", flag: "Normal" },
        { name: "LDL Cholesterol", value: "112 mg/dL", normal: "< 100 mg/dL", flag: "Borderline" },
        { name: "Triglycerides", value: "142 mg/dL", normal: "< 150 mg/dL", flag: "Normal" }
      ]
    },
    {
      id: "REP-103",
      hospitalId: "H001",
      hospitalName: "Shantideep Multispeciality Hospital",
      title: "Thyroid Function Test (TFT)",
      category: "blood",
      date: "08 Sep 2026",
      status: "Available",
      isNew: false,
      labAccreditation: "NABL (ISO 15189:2012)",
      parameters: [
        { name: "TSH (Ultrasensitive)", value: "2.45 µIU/mL", normal: "0.40 - 4.20 µIU/mL", flag: "Normal" },
        { name: "Free T3", value: "3.1 pg/mL", normal: "2.3 - 4.2 pg/mL", flag: "Normal" },
        { name: "Free T4", value: "1.18 ng/dL", normal: "0.80 - 1.80 ng/dL", flag: "Normal" }
      ]
    },
    {
      id: "REP-104",
      hospitalId: "H003",
      hospitalName: "Lifeline Medical Centre",
      title: "Glycated Haemoglobin (HbA1c)",
      category: "blood",
      date: "03 Sep 2026",
      status: "Available",
      isNew: false,
      labAccreditation: "NABL Express Lab # L-110",
      parameters: [
        { name: "HbA1c", value: "5.9 %", normal: "< 5.7 % Normal, 5.7-6.4 % Prediabetes", flag: "Borderline" },
        { name: "Estimated Avg Glucose (eAG)", value: "123 mg/dL", normal: "< 140 mg/dL", flag: "Normal" }
      ]
    },
    {
      id: "REP-105",
      hospitalId: "H001",
      hospitalName: "Shantideep Multispeciality Hospital",
      title: "Urine Routine & Microscopic",
      category: "urine",
      date: "20 Sep 2026",
      status: "Processing",
      isNew: false,
      labAccreditation: "NABL (ISO 15189:2012)",
      parameters: []
    }
  ],

  medicines: [
    { id: 1, name: "Metformin 500mg", instructions: "Take with morning meal", time: "08:00 AM", frequency: "Daily", status: "taken" },
    { id: 2, name: "Atorvastatin 20mg", instructions: "Take post dinner", time: "02:00 PM", frequency: "Daily", status: "upcoming" },
    { id: 3, name: "Pantoprazole 40mg", instructions: "Take 30 mins before dinner", time: "09:00 PM", frequency: "Daily", status: "upcoming" }
  ],

  reviews: [
    {
      id: "REV-1",
      doctorName: "Dr. Arjun Mehta",
      hospitalName: "Shantideep Multispeciality Hospital",
      department: "Cardiology",
      patientInitials: "R.S.",
      rating: 5,
      communication: 5,
      waitingTime: 4,
      professionalism: 5,
      comment: "Dr. Mehta explained the ECG and echo findings with great clarity. Live queue tracking reduced unnecessary waiting in the OPD hallway.",
      date: "12 Sep 2026"
    },
    {
      id: "REV-2",
      doctorName: "Dr. Neha Shah",
      hospitalName: "Shantideep Multispeciality Hospital",
      department: "Orthopaedics",
      patientInitials: "A.V.",
      rating: 5,
      communication: 5,
      waitingTime: 5,
      professionalism: 5,
      comment: "Excellent diagnosis for knee osteoarthritis. The visit checklist prepared beforehand saved 15 minutes of paperwork.",
      date: "10 Sep 2026"
    }
  ],

  activeEmergencyDispatches: []
};

// --------------------------------------------------------------------------
// 3. MULTI-LINGUAL DICTIONARY (English, हिन्दी, मराठी)
// --------------------------------------------------------------------------
const GWS_TRANSLATIONS = {
  en: {
    brandTagline: "Healthcare, connected.",
    navHome: "Home",
    navFindCare: "Find Care",
    navHospitals: "Hospitals",
    navDoctors: "Doctors",
    navAppointments: "Appointments",
    navLiveQueue: "Live Queue",
    navReports: "Lab Reports",
    navMedicines: "Medicines",
    navFamilyCare: "Family Care",
    navBusiness: "How GWS Works",
    navEmergency: "24×7 Emergency",
    heroTitle: "Find the right care, without the unnecessary waiting.",
    heroSub: "Search hospitals, compare availability, book appointments and stay updated throughout your visit.",
    searchPlaceholder: "Search doctors, departments or hospitals...",
    findCareBtn: "FIND CARE",
    useLocationBtn: "Use my location",
    viewHospitalBtn: "VIEW HOSPITAL",
    bookApptBtn: "BOOK APPOINTMENT",
    liveOpdWait: "OPD Waiting Time",
    nextSlot: "Next Available",
    emergencyOpen: "Emergency 24×7",
    patientsAhead: "Patients Ahead",
    estimatedWait: "Estimated Wait",
    nowServing: "NOW SERVING",
    yourToken: "YOUR TOKEN",
    callNextPatient: "CALL NEXT PATIENT",
    printChecklist: "PRINT CHECKLIST",
    printReport: "PRINT REPORT",
    downloadReport: "DOWNLOAD",
    icuMonitoring: "UNDER CLOSE MONITORING",
    demoDisclaimer: "Demo platform — all hospitals, patients, doctors and reports shown are fictional."
  },
  hi: {
    brandTagline: "स्वास्थ्य सेवा, आपस में जुड़ी हुई।",
    navHome: "होम",
    navFindCare: "इलाज खोजें",
    navHospitals: "अस्पताल",
    navDoctors: "डॉक्टर्स",
    navAppointments: "अपॉइंटमेंट",
    navLiveQueue: "लाइव कतार स्थिति",
    navReports: "लैब रिपोर्ट्स",
    navMedicines: "दवा रिमाइंडर",
    navFamilyCare: "पारिवारिक देखभाल (ICU)",
    navBusiness: "GWS कैसे काम करता है",
    navEmergency: "24×7 आपातकालीन",
    heroTitle: "सही स्वास्थ्य सेवा पाएं, बिना किसी अतिरिक्त इंतजार के।",
    heroSub: "अस्पतालों को खोजें, उपलब्धता और प्रतीक्षा समय की तुलना करें, अपॉइंटमेंट बुक करें और पूरी यात्रा में सूचित रहें।",
    searchPlaceholder: "डॉक्टर, विभाग या अस्पताल खोजें...",
    findCareBtn: "देखभाल खोजें",
    useLocationBtn: "मेरी लोकेशन उपयोग करें",
    viewHospitalBtn: "अस्पताल देखें",
    bookApptBtn: "अपॉइंटमेंट बुक करें",
    liveOpdWait: "ओपीडी प्रतीक्षा समय",
    nextSlot: "अगली उपलब्धता",
    emergencyOpen: "आपातकालीन 24×7 खुला",
    patientsAhead: "आपसे आगे मरीज",
    estimatedWait: "अनुमानित प्रतीक्षा",
    nowServing: "वर्तमान सेवा में",
    yourToken: "आपका टोकन",
    callNextPatient: "अगला मरीज बुलाएं",
    printChecklist: "चेकलिस्ट प्रिंट करें",
    printReport: "रिपोर्ट प्रिंट करें",
    downloadReport: "डाउनलोड",
    icuMonitoring: "नजदीकी निगरानी में",
    demoDisclaimer: "डेमो प्लेटफॉर्म — सभी अस्पताल, मरीज, डॉक्टर और रिपोर्ट काल्पनिक हैं।"
  },
  mr: {
    brandTagline: "आरोग्य सेवा, एकमेकांशी जोडलेली.",
    navHome: "मुख्यपृष्ठ",
    navFindCare: "उपचार शोधा",
    navHospitals: "रुग्णालये",
    navDoctors: "तज्ज्ञ डॉक्टर्स",
    navAppointments: "भेटीची वेळ (Appointments)",
    navLiveQueue: "थेट रांग स्थिती (Live Queue)",
    navReports: "प्रयोगशाळेचे अहवाल (Lab Reports)",
    navMedicines: "औषध स्मरणपत्र (Medicines)",
    navFamilyCare: "कुटुंबीयांसाठी माहिती (ICU)",
    navBusiness: "GWS कसे कार्य करते",
    navEmergency: "२४×७ आपत्कालीन सेवा",
    heroTitle: "योग्य उपचार मिळवा, नाहक प्रतीक्षा न करता.",
    heroSub: "रुग्णालये शोधा, प्रतीक्षा वेळ व डॉक्टरांची उपलब्धता तपासा, भेटीची वेळ निश्चित करा आणि उपचारादरम्यान जोडलेले राहा.",
    searchPlaceholder: "डॉक्टर, विभाग किंवा रुग्णालय शोधा...",
    findCareBtn: "उपचार शोधा",
    useLocationBtn: "माझे स्थान वापरा",
    viewHospitalBtn: "रुग्णालय पहा",
    bookApptBtn: "भेटीची वेळ बुक करा",
    liveOpdWait: "ओपीडी प्रतीक्षा वेळ",
    nextSlot: "पुढील उपलब्ध वेळ",
    emergencyOpen: "आपत्कालीन २४×७ सुरू",
    patientsAhead: "पुढील रुग्ण संख्या",
    estimatedWait: "अंदाजे प्रतीक्षा वेळ",
    nowServing: "सध्या सुरू असलेला टोकन",
    yourToken: "तुमचा टोकन क्रमांक",
    callNextPatient: "पुढील रुग्ण बोलवा",
    printChecklist: "चेकलिस्ट प्रिंट करा",
    printReport: "अहवाल प्रिंट करा",
    downloadReport: "डाउनलोड",
    icuMonitoring: "बारकाईने देखरेखीखाली",
    demoDisclaimer: "डेमो प्रणाली — सर्व रुग्णालये, रुग्ण, डॉक्टर्स आणि अहवाल काल्पनिक आहेत."
  }
};

// --------------------------------------------------------------------------
// 4. STORAGE & MULTI-TAB BROADCAST REAL-TIME SYNC
// --------------------------------------------------------------------------
const STORAGE_KEY = "gws_platform_multi_hospital_v4";

function getAppState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.hospitals || parsed.hospitals.length < 6) {
        parsed.hospitals = JSON.parse(JSON.stringify(DEMO_HOSPITALS));
      }
      return parsed;
    }
  } catch (e) {
    console.error("State load error:", e);
  }
  const initialState = JSON.parse(JSON.stringify(DEFAULT_GWS_STATE));
  saveAppState(initialState);
  return initialState;
}

function saveAppState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (broadcastChannel) {
      broadcastChannel.postMessage({ type: "GWS_STATE_UPDATED", state });
    }
  } catch (e) {
    console.error("State save error:", e);
  }
}

// Multi-Tab Broadcast Channel
let broadcastChannel = null;
if (typeof BroadcastChannel !== "undefined") {
  broadcastChannel = new BroadcastChannel("gws_platform_sync_channel");
  broadcastChannel.onmessage = (event) => {
    if (event.data && event.data.type === "GWS_STATE_UPDATED") {
      onGlobalStateSync(event.data.state);
    }
  };
}

// Fallback Window Storage Event Listener
window.addEventListener("storage", (e) => {
  if (e.key === STORAGE_KEY && e.newValue) {
    try {
      const state = JSON.parse(e.newValue);
      onGlobalStateSync(state);
    } catch (err) {}
  }
});

// Sound Generator for Hospital Announcement Chime
function playHospitalChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Tone 1: C5 (523.25 Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(523.25, now);
    osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.18);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.85);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.85);

    // Tone 2: G5 (783.99 Hz)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(783.99, now + 0.22);
    gain2.gain.setValueAtTime(0.14, now + 0.22);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.1);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.22);
    osc2.stop(now + 1.1);
  } catch (e) {
    console.log("Audio chime ready");
  }
}

// Toast Notifications
function showHospitalToast(message, type = "info") {
  let container = document.getElementById("hospital-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "hospital-toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `hospital-toast ${type === "alert" ? "toast-alert" : type === "emergency" ? "toast-emergency" : ""}`;
  toast.innerHTML = `
    <div style="flex-grow: 1;">
      <div style="font-weight: 700; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 2px;">
        GWS • Live Hospital Sync
      </div>
      <div style="font-size: 0.9rem;">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --------------------------------------------------------------------------
// 5. HOSPITAL & LOCATION MANAGEMENT
// --------------------------------------------------------------------------
function getSelectedHospital(state = null) {
  const s = state || getAppState();
  const hospitalId = s.selectedHospitalId || "H001";
  return s.hospitals.find(h => h.id === hospitalId) || s.hospitals[0];
}

function setSelectedHospital(hospitalId, redirect = false) {
  const state = getAppState();
  state.selectedHospitalId = hospitalId;
  saveAppState(state);
  if (redirect) {
    window.location.href = "hospital-details.html";
  } else {
    onGlobalStateSync(state);
  }
}

const CITY_COORDINATES = {
  "Pune": { lat: 18.5204, lng: 73.8567 },
  "Mumbai": { lat: 19.0760, lng: 72.8777 },
  "Ahmedabad": { lat: 23.0225, lng: 72.5714 },
  "Jamnagar": { lat: 22.4707, lng: 70.0577 },
  "Surat": { lat: 21.1702, lng: 72.8311 }
};

function selectCityLocation(cityName) {
  const state = getAppState();
  state.selectedCity = cityName;
  if (CITY_COORDINATES[cityName]) {
    state.userLocation = {
      lat: CITY_COORDINATES[cityName].lat,
      lng: CITY_COORDINATES[cityName].lng,
      city: cityName,
      isLive: false
    };
  }
  if (cityName === "Pune") {
    state.hospitals.forEach((h, idx) => {
      const baseDistances = [2.4, 3.1, 1.8, 4.2, 5.0, 6.5];
      h.distance = baseDistances[idx % baseDistances.length];
    });
  } else {
    state.hospitals.forEach((h, idx) => {
      const baseDistances = [1.5, 2.8, 3.4, 4.9, 6.2, 8.1];
      h.distance = baseDistances[idx % baseDistances.length];
    });
  }
  saveAppState(state);
  showHospitalToast(`Location set to ${cityName}. Nearby hospitals updated.`, "info");
  onGlobalStateSync(state);
}

function requestBrowserLocation(callback) {
  if (!navigator.geolocation) {
    showHospitalToast("Geolocation is not supported by your browser. Using city default.", "info");
    if (callback) callback(false);
    return;
  }

  showHospitalToast("Detecting your location...", "info");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const state = getAppState();
      state.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        city: "Detected Location",
        isLive: true
      };
      state.hospitals.forEach((h, idx) => {
        const base = [2.1, 3.4, 1.6, 3.9, 4.8, 6.0];
        h.distance = base[idx % base.length];
      });
      saveAppState(state);
      showHospitalToast("Location access granted! Distances calculated.", "info");
      onGlobalStateSync(state);
      if (callback) callback(true);
    },
    (error) => {
      console.warn("Geolocation permission not granted / error:", error.message);
      showHospitalToast("Location access denied. Using demo city location.", "info");
      if (callback) callback(false);
    },
    { timeout: 8000 }
  );
}

// --------------------------------------------------------------------------
// 6. MULTI-HOSPITAL SEARCH & FILTERING ENGINE
// --------------------------------------------------------------------------
function searchHospitals(query = "", filters = {}, sortBy = "recommended") {
  const state = getAppState();
  let list = [...state.hospitals];

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    list = list.filter(h => {
      if (h.name.toLowerCase().includes(q)) return true;
      if (h.area.toLowerCase().includes(q)) return true;
      if (h.city.toLowerCase().includes(q)) return true;
      if (h.tagline.toLowerCase().includes(q)) return true;

      const deptMatch = Object.values(h.departments).some(d => 
        d.name.toLowerCase().includes(q) ||
        d.doctor.toLowerCase().includes(q) ||
        d.qualifications.toLowerCase().includes(q)
      );
      if (deptMatch) return true;

      if (q.includes("cardio") || q.includes("heart")) return !!h.departments.cardiology;
      if (q.includes("ortho") || q.includes("bone") || q.includes("joint")) return !!h.departments.orthopaedics;
      if (q.includes("child") || q.includes("paediatr") || q.includes("baby")) return !!h.departments.paediatrics;
      if (q.includes("neuro") || q.includes("brain") || q.includes("stroke")) return !!h.departments.neurology;
      if (q.includes("blood") || q.includes("lab") || q.includes("test") || q.includes("diagnost")) return true;
      if (q.includes("emergency") || q.includes("ambulance") || q.includes("icu")) return h.emergency === true;

      return false;
    });
  }

  if (filters.department && filters.department !== "all") {
    const depKey = filters.department.toLowerCase();
    list = list.filter(h => {
      return Object.keys(h.departments).some(k => k.toLowerCase().includes(depKey) || h.departments[k].name.toLowerCase().includes(depKey));
    });
  }

  if (filters.maxDistance && filters.maxDistance !== "all") {
    const maxD = parseFloat(filters.maxDistance);
    if (!isNaN(maxD)) {
      list = list.filter(h => h.distance <= maxD);
    }
  }

  if (filters.maxWait && filters.maxWait !== "all") {
    const maxW = parseInt(filters.maxWait, 10);
    if (!isNaN(maxW)) {
      list = list.filter(h => h.avgWaitMin <= maxW);
    }
  }

  if (filters.emergencyOnly) {
    list = list.filter(h => h.emergency === true);
  }

  if (filters.minRating && filters.minRating !== "all") {
    const minR = parseFloat(filters.minRating);
    if (!isNaN(minR)) {
      list = list.filter(h => h.rating >= minR);
    }
  }

  if (sortBy === "nearest") {
    list.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === "wait") {
    list.sort((a, b) => a.avgWaitMin - b.avgWaitMin);
  } else if (sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "appointment") {
    list.sort((a, b) => a.nextApptSlot.localeCompare(b.nextApptSlot));
  } else {
    list.sort((a, b) => (b.rating / (b.distance + 1)) - (a.rating / (a.distance + 1)));
  }

  return list;
}

// --------------------------------------------------------------------------
// 7. DOCTOR CONSULTATION & LIVE QUEUE PROGRESSION
// --------------------------------------------------------------------------
function doctorCallNextPatient(hospitalId = null, deptKey = "cardiology") {
  const state = getAppState();
  const targetHospitalId = hospitalId || state.selectedHospitalId || "H001";
  const hospital = state.hospitals.find(h => h.id === targetHospitalId);
  if (!hospital || !hospital.departments[deptKey]) return;

  const dept = hospital.departments[deptKey];
  const queue = dept.queue;

  const currentServingIndex = queue.findIndex(q => q.status === "serving");
  if (currentServingIndex !== -1) {
    queue[currentServingIndex].status = "completed";
  }

  const nextPatientIndex = queue.findIndex(q => q.status === "next" || q.status === "waiting");
  if (nextPatientIndex !== -1) {
    queue[nextPatientIndex].status = "serving";
    const nextTokenNum = parseInt(queue[nextPatientIndex].token.replace(/\D/g, ""), 10);
    dept.currentServingNum = nextTokenNum;

    const followingIndex = queue.findIndex((q, idx) => idx > nextPatientIndex && q.status === "waiting");
    if (followingIndex !== -1) {
      queue[followingIndex].status = "next";
    }

    saveAppState(state);
    playHospitalChime();
    showHospitalToast(`Calling Token ${queue[nextPatientIndex].token} (${queue[nextPatientIndex].name}) into ${dept.room}`, "info");
    onGlobalStateSync(state);
  } else {
    dept.currentServingNum += 1;
    const newToken = `${dept.prefix}-${dept.currentServingNum}`;
    queue.push({
      token: newToken,
      name: `Walk-in Patient (${newToken})`,
      status: "serving",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    saveAppState(state);
    playHospitalChime();
    showHospitalToast(`Calling Next Token ${newToken} into ${dept.room}`, "info");
    onGlobalStateSync(state);
  }
}

function doctorRecallCurrent(hospitalId = null, deptKey = "cardiology") {
  const state = getAppState();
  const targetHospitalId = hospitalId || state.selectedHospitalId || "H001";
  const hospital = state.hospitals.find(h => h.id === targetHospitalId);
  if (!hospital || !hospital.departments[deptKey]) return;

  const dept = hospital.departments[deptKey];
  const serving = dept.queue.find(q => q.status === "serving");
  const token = serving ? serving.token : `${dept.prefix}-${dept.currentServingNum}`;
  playHospitalChime();
  showHospitalToast(`Announcement repeated for Token ${token} • ${dept.room}`, "info");
}

function doctorAddWalkin(hospitalId = null, deptKey = "cardiology") {
  const state = getAppState();
  const targetHospitalId = hospitalId || state.selectedHospitalId || "H001";
  const hospital = state.hospitals.find(h => h.id === targetHospitalId);
  if (!hospital || !hospital.departments[deptKey]) return;

  const dept = hospital.departments[deptKey];
  const lastNum = dept.queue.reduce((max, item) => {
    const num = parseInt(item.token.replace(/\D/g, ""), 10);
    return isNaN(num) ? max : Math.max(max, num);
  }, dept.currentServingNum);

  const walkinToken = `${dept.prefix}-${lastNum + 1}`;
  const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  dept.queue.push({
    token: walkinToken,
    name: `Walk-in Patient`,
    status: "waiting",
    time: nowTime
  });

  saveAppState(state);
  showHospitalToast(`Added Walk-In Token: ${walkinToken}`, "info");
  onGlobalStateSync(state);
}

// --------------------------------------------------------------------------
// 8. APPOINTMENT BOOKING & CHECKLIST GENERATION
// --------------------------------------------------------------------------
const DEPARTMENT_CHECKLISTS = {
  cardiology: {
    title: "Cardiology Consultation Checklist",
    items: [
      "Previous ECG, 2D Echocardiography, or TMT test reports",
      "Current prescription list with exact dosages of blood pressure / cardiac medications",
      "Recent lipid profile and fasting blood glucose reports",
      "Government photo ID & Health Insurance (TPA / Ayushman Bharat card)",
      "List of any allergies or previous surgical interventions"
    ]
  },
  orthopaedics: {
    title: "Orthopaedics & Joint Care Checklist",
    items: [
      "Recent X-ray films, MRI, or CT scans of the affected joint / spine",
      "Previous orthopaedic prescriptions and physical therapy records",
      "History of previous joint surgeries, fractures, or implants",
      "Government photo ID & cashless insurance documentation",
      "Wear comfortable loose clothing suitable for mobility assessment"
    ]
  },
  medicine: {
    title: "General Medicine Consultation Checklist",
    items: [
      "Complete summary of current symptoms and temperature / blood pressure logs",
      "All active daily prescription medicines (including herbal / OTC supplements)",
      "Recent Complete Blood Count (CBC) and metabolic blood reports",
      "Government ID and hospital registration card"
    ]
  },
  paediatrics: {
    title: "Paediatrics & Child Care Checklist",
    items: [
      "Official Child Immunization Card / Vaccination record book",
      "Birth weight, current growth records, and developmental milestones",
      "Recent temperature chart and current paediatric syrup dosages",
      "Parent / Guardian Government ID & Health Card"
    ]
  },
  neurology: {
    title: "Neurology Consultation Checklist",
    items: [
      "Previous Brain MRI / CT scans and EEG tracings",
      "Seizure / Headache diary documenting frequency and duration",
      "Current anti-epileptic or neurological medications list",
      "Government photo ID & insurance details"
    ]
  },
  default: {
    title: "General OPD Visit Checklist",
    items: [
      "Previous medical summaries and recent lab diagnostic reports",
      "List of current medications and allergies",
      "Government photo ID & Insurance policy card",
      "Hospital registration token number"
    ]
  }
};

function bookAppointment(appointmentData) {
  const state = getAppState();
  const apptId = `GWS-AP-${Math.floor(1000 + Math.random() * 9000)}`;

  const hospital = state.hospitals.find(h => h.id === appointmentData.hospitalId) || state.hospitals[0];
  const dept = hospital.departments[appointmentData.deptKey] || Object.values(hospital.departments)[0];
  
  const prefix = dept.prefix || "A";
  const tokenNum = (dept.currentServingNum || 100) + dept.queue.length + 1;
  const token = `${prefix}-${tokenNum}`;

  const newAppt = {
    id: apptId,
    hospitalId: hospital.id,
    hospitalName: hospital.name,
    department: dept.name,
    deptKey: appointmentData.deptKey,
    doctor: appointmentData.doctor || dept.doctor,
    room: dept.room,
    date: appointmentData.date || "18 Sep 2026",
    time: appointmentData.time || "10:30 AM",
    token: token,
    patientName: appointmentData.patientName || state.currentUser.name || "Rahul Sharma",
    phone: appointmentData.phone || "+91 98765 43210",
    status: "Confirmed"
  };

  state.selectedHospitalId = hospital.id;
  state.userToken = {
    hospitalId: hospital.id,
    hospitalName: hospital.name,
    token: token,
    dept: appointmentData.deptKey,
    doctor: newAppt.doctor,
    room: dept.room,
    name: newAppt.patientName,
    date: newAppt.date,
    timeSlot: newAppt.time,
    avgWaitPerPatientMin: dept.avgWaitPerPatientMin || 4.0
  };

  dept.queue.push({
    token: token,
    name: `${newAppt.patientName} (You)`,
    status: "waiting",
    time: newAppt.time
  });

  state.appointments.unshift(newAppt);
  saveAppState(state);
  return newAppt;
}

// --------------------------------------------------------------------------
// 9. ICU FAMILY CARE & PLAIN LANGUAGE EXPLANATIONS
// --------------------------------------------------------------------------
// Future integration: connect this function to an LLM API.
function generateSimpleExplanation(medicalText) {
  const lower = medicalText.toLowerCase();
  if (lower.includes("stable") || lower.includes("supportive care")) {
    return "The patient's condition is currently stable and the medical team is continuing to monitor them closely. Vital signs are within expected supportive ranges.";
  }
  if (lower.includes("tapering") || lower.includes("weaning") || lower.includes("improvement")) {
    return "The medical team reports steady improvement. They are carefully reducing supportive medications as the patient's body recovers strength.";
  }
  if (lower.includes("post-cabg") || lower.includes("cardiac")) {
    return "The patient is recovering well after heart surgery with continuous rhythm monitoring in the ICU.";
  }
  return "The patient remains under active clinical observation. The critical care team is supervising all vitals and medication schedules.";
}

// --------------------------------------------------------------------------
// 10. AUTHENTICATION & ROLE-BASED ACCESS
// --------------------------------------------------------------------------
function requireRole(expectedRole) {
  const state = getAppState();
  const user = state.currentUser;

  // Development / Demo helper
  // Production authentication must be handled server-side.
  if (!user || !user.role) {
    window.location.href = `login.html?required=${expectedRole}`;
    return false;
  }

  if (expectedRole === "patient" && user.role !== "patient") {
    alert(`You are currently signed in as: ${user.role}. Redirecting to login.`);
    window.location.href = "login.html";
    return false;
  }
  if (expectedRole === "doctor" && user.role !== "doctor") {
    alert(`You are currently signed in as: ${user.role}. Doctor access required.`);
    window.location.href = "login.html";
    return false;
  }
  if (expectedRole === "admin" && user.role !== "admin") {
    alert(`You are currently signed in as: ${user.role}. Hospital administrator access required.`);
    window.location.href = "login.html";
    return false;
  }

  return true;
}

function handleLoginSubmit(role, email, password) {
  const state = getAppState();
  
  if (role === "doctor") {
    state.currentUser = {
      role: "doctor",
      name: "Dr. Arjun Mehta",
      email: email || "doctor@demo.com",
      qualifications: "MBBS, MD, DM (Cardiology)",
      hospitalId: "H001",
      hospitalName: "Shantideep Multispeciality Hospital",
      department: "Cardiology OPD",
      room: "Room 104"
    };
    saveAppState(state);
    window.location.href = "doctor.html";
  } else if (role === "admin") {
    state.currentUser = {
      role: "admin",
      name: "Hospital Administrator",
      email: email || "admin@demo.com",
      hospitalId: "H001",
      hospitalName: "Shantideep Multispeciality Hospital"
    };
    saveAppState(state);
    window.location.href = "hospital.html";
  } else {
    state.currentUser = {
      role: "patient",
      name: "Rahul Sharma",
      email: email || "patient@demo.com",
      patientId: "GWS-1024",
      phone: "+91 98765 43210"
    };
    saveAppState(state);
    window.location.href = "patient.html";
  }
}

function handleLogout() {
  const state = getAppState();
  state.currentUser = {
    role: null,
    name: "Guest",
    email: null
  };
  saveAppState(state);
  window.location.href = "index.html";
}

// --------------------------------------------------------------------------
// 11. MULTILINGUAL TRANSLATIONS
// --------------------------------------------------------------------------
function setGlobalLanguage(lang) {
  if (!GWS_TRANSLATIONS[lang]) return;
  const state = getAppState();
  state.language = lang;
  saveAppState(state);
  applyTranslations(lang);

  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function applyTranslations(lang) {
  const dict = GWS_TRANSLATIONS[lang] || GWS_TRANSLATIONS.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });
}

// --------------------------------------------------------------------------
// 12. DEMO RESET HELPER
// --------------------------------------------------------------------------
function resetDemoState() {
  if (confirm("Reset demo data to initial demonstration state? All queues, appointments, and requests will reset.")) {
    const freshState = JSON.parse(JSON.stringify(DEFAULT_GWS_STATE));
    saveAppState(freshState);
    showHospitalToast("Demonstration state has been reset to defaults.", "info");
    setTimeout(() => {
      window.location.reload();
    }, 400);
  }
}

// --------------------------------------------------------------------------
// 13. UI RENDERERS FOR INDIVIDUAL PAGES
// --------------------------------------------------------------------------

// DOCTOR WORKSPACE RENDERER
function renderDoctorDesk() {
  const state = getAppState();
  const hospital = state.hospitals.find(h => h.id === (state.currentUser.hospitalId || state.selectedHospitalId || "H001")) || state.hospitals[0];
  const dept = hospital.departments.cardiology || Object.values(hospital.departments)[0];
  const serving = dept.queue.find(q => q.status === "serving");

  const servingTokenEl = document.getElementById("doc-serving-token");
  const servingNameEl = document.getElementById("doc-serving-name");
  const servingTimeEl = document.getElementById("doc-serving-time");
  const queueTableBody = document.getElementById("doc-queue-tbody");
  const hospitalNameEl = document.getElementById("doc-hospital-name");
  const deptRoomEl = document.getElementById("doc-dept-room");

  if (hospitalNameEl) hospitalNameEl.textContent = `${hospital.name} • Doctor Portal`;
  if (deptRoomEl) deptRoomEl.textContent = `${dept.name} — ${dept.room}`;

  if (servingTokenEl && serving) {
    servingTokenEl.textContent = serving.token;
    if (servingNameEl) servingNameEl.textContent = serving.name;
    if (servingTimeEl) servingTimeEl.textContent = `Called at: ${serving.time}`;
  }

  if (queueTableBody) {
    queueTableBody.innerHTML = "";
    dept.queue.forEach(item => {
      const tr = document.createElement("tr");
      const isServing = item.status === "serving";
      const isNext = item.status === "next";
      const isCompleted = item.status === "completed";

      let statusBadge = `<span class="status-pill pill-waiting">Waiting</span>`;
      if (isServing) statusBadge = `<span class="status-pill pill-serving">In Room</span>`;
      if (isNext) statusBadge = `<span class="status-pill pill-next">Next</span>`;
      if (isCompleted) statusBadge = `<span class="status-pill pill-completed">Completed</span>`;

      tr.innerHTML = `
        <td style="font-family:var(--font-mono); font-weight:700; ${isServing ? 'color:var(--accent-terracotta);' : ''}">${item.token}</td>
        <td><strong>${item.name}</strong></td>
        <td>${item.time}</td>
        <td>${statusBadge}</td>
        <td style="text-align:right;">
          ${!isCompleted && !isServing ? `<button class="btn btn-sm btn-secondary" onclick="doctorCallSpecificToken('${item.token}')">Call In</button>` : ''}
          ${isServing ? `<span class="text-xs" style="color:var(--primary-green); font-weight:700;">● Active</span>` : ''}
        </td>
      `;
      queueTableBody.appendChild(tr);
    });
  }
}

function doctorCallSpecificToken(targetToken) {
  const state = getAppState();
  const hospital = state.hospitals.find(h => h.id === (state.currentUser.hospitalId || state.selectedHospitalId || "H001"));
  if (!hospital) return;
  const dept = hospital.departments.cardiology;
  const queue = dept.queue;

  const currentServing = queue.find(q => q.status === "serving");
  if (currentServing) currentServing.status = "completed";

  const target = queue.find(q => q.token === targetToken);
  if (target) {
    target.status = "serving";
    dept.currentServingNum = parseInt(targetToken.replace(/\D/g, ""), 10) || dept.currentServingNum;
    saveAppState(state);
    playHospitalChime();
    showHospitalToast(`Called Token ${target.token} (${target.name})`, "info");
    onGlobalStateSync(state);
  }
}

// PATIENT WORKSPACE RENDERER
function renderPatientDashboard() {
  const state = getAppState();
  const userTok = state.userToken || {
    hospitalId: "H001",
    token: "A-117",
    dept: "cardiology"
  };

  const hospital = state.hospitals.find(h => h.id === (userTok.hospitalId || state.selectedHospitalId || "H001")) || state.hospitals[0];
  const dept = hospital.departments[userTok.dept] || hospital.departments.cardiology || Object.values(hospital.departments)[0];
  
  const servingItem = dept.queue.find(q => q.status === "serving");
  const servingToken = servingItem ? servingItem.token : `${dept.prefix}-${dept.currentServingNum}`;
  const servingNum = parseInt(servingToken.replace(/\D/g, ""), 10);
  const userTokenNum = parseInt(userTok.token.replace(/\D/g, ""), 10);
  
  const patientsAhead = Math.max(0, userTokenNum - servingNum);
  const avgTime = dept.avgWaitPerPatientMin || 4.0;
  const estimatedWaitMin = Math.round(patientsAhead * avgTime);
  const minRange = Math.max(1, Math.round(estimatedWaitMin * 0.8));
  const maxRange = Math.round(estimatedWaitMin * 1.2) + 2;

  // Update DOM Elements
  const myTokenEl = document.getElementById("patient-my-token");
  const curServingEl = document.getElementById("patient-current-serving");
  const aheadEl = document.getElementById("patient-patients-ahead");
  const estWaitEl = document.getElementById("patient-est-wait-min");
  const estRangeEl = document.getElementById("patient-est-range");
  const hospitalNameEl = document.getElementById("patient-hospital-name");
  const deptNameEl = document.getElementById("patient-dept-name");
  const doctorNameEl = document.getElementById("patient-doctor-name");
  const roomEl = document.getElementById("patient-room-name");
  const bannerHospitalEl = document.getElementById("patient-active-hospital-pill");

  if (myTokenEl) myTokenEl.textContent = userTok.token;
  if (curServingEl) curServingEl.textContent = servingToken;
  if (aheadEl) aheadEl.textContent = patientsAhead;
  if (estWaitEl) estWaitEl.textContent = `${estimatedWaitMin} min`;
  if (estRangeEl) estRangeEl.textContent = `${minRange}–${maxRange} min`;
  if (hospitalNameEl) hospitalNameEl.textContent = hospital.name;
  if (deptNameEl) deptNameEl.textContent = dept.name;
  if (doctorNameEl) doctorNameEl.textContent = dept.doctor;
  if (roomEl) roomEl.textContent = dept.room;
  if (bannerHospitalEl) bannerHospitalEl.textContent = hospital.name;

  // Queue visual breakdown items
  const queueVisualEl = document.getElementById("patient-queue-visual-list");
  if (queueVisualEl) {
    queueVisualEl.innerHTML = "";
    dept.queue.slice(0, 10).forEach(item => {
      const li = document.createElement("div");
      const isMyToken = item.token === userTok.token;
      const isServing = item.status === "serving";

      li.className = `queue-step-item ${isServing ? 'step-serving' : ''} ${isMyToken ? 'step-me' : ''}`;
      li.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:8px 12px; margin-bottom:6px; border-radius:4px; border:1px solid var(--border-subtle); background:" + (isServing ? "var(--accent-terracotta-light)" : isMyToken ? "var(--primary-green-light)" : "var(--bg-paper)");
      
      li.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-family:var(--font-mono); font-weight:700; ${isServing ? 'color:var(--accent-terracotta);' : isMyToken ? 'color:var(--primary-green);' : ''}">${item.token}</span>
          <span style="font-size:0.875rem; font-weight:${isMyToken ? '700' : '500'};">${item.name}</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="text-xs text-muted">${item.time}</span>
          ${isServing ? '<span class="utility-badge" style="background:var(--accent-terracotta); color:#fff; font-size:0.7rem;">NOW SERVING</span>' : ''}
          ${isMyToken ? '<span class="utility-badge" style="background:var(--primary-green); color:#fff; font-size:0.7rem;">YOUR TOKEN</span>' : ''}
        </div>
      `;
      queueVisualEl.appendChild(li);
    });
  }
}

// LAB REPORTS RENDERER
function renderLabReports(category = "all") {
  const state = getAppState();
  const listContainer = document.getElementById("lab-reports-list-container");
  if (!listContainer) return;

  const currentHospitalId = state.selectedHospitalId || "all";
  let filtered = state.labReports;

  if (category !== "all") {
    filtered = filtered.filter(r => r.category === category);
  }

  listContainer.innerHTML = "";
  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">No reports found matching your criteria.</div>`;
    return;
  }

  filtered.forEach(rep => {
    const card = document.createElement("div");
    card.className = "report-item-card";
    card.innerHTML = `
      <div>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px; flex-wrap:wrap;">
          <span class="utility-badge" style="font-size:0.7rem; background:var(--bg-cream);">${rep.hospitalName}</span>
          <h4 style="margin:0; font-size:1.05rem;">${rep.title}</h4>
          ${rep.isNew ? '<span class="utility-badge" style="background:var(--accent-terracotta-light); color:var(--accent-terracotta-dark); border-color:var(--accent-terracotta);">NEW</span>' : ''}
        </div>
        <div class="text-xs text-muted">
          Sample Collected: <strong>${rep.date}</strong> • Category: ${rep.category.toUpperCase()} • Patient: Rahul Sharma (GWS-1024)
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:12px;">
        <span class="status-pill ${rep.status === 'Available' ? 'pill-completed' : 'pill-waiting'}">
          ${rep.status}
        </span>
        ${rep.status === 'Available' 
          ? `<button class="btn btn-sm btn-primary" onclick="openReportViewer('${rep.id}')">View Report</button>` 
          : `<button class="btn btn-sm btn-secondary" disabled>Processing</button>`}
      </div>
    `;
    listContainer.appendChild(card);
  });
}

function openReportViewer(reportId) {
  const state = getAppState();
  const rep = state.labReports.find(r => r.id === reportId);
  if (!rep) return;

  const modal = document.getElementById("report-viewer-modal");
  const content = document.getElementById("report-viewer-content");
  if (!modal || !content) return;

  let tableRows = "";
  if (rep.parameters && rep.parameters.length > 0) {
    tableRows = rep.parameters.map(p => `
      <tr>
        <td style="font-weight:600;">${p.name}</td>
        <td style="font-family:var(--font-mono); font-weight:700;">${p.value}</td>
        <td style="color:var(--text-muted); font-size:0.85rem;">${p.normal}</td>
        <td>
          <span class="utility-badge" style="${p.flag === 'Normal' ? 'background:var(--accent-success-light); color:var(--accent-success);' : 'background:var(--accent-amber-light); color:var(--accent-amber);'}">
            ${p.flag || 'Normal'}
          </span>
        </td>
      </tr>
    `).join("");
  } else {
    tableRows = `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">Report sample under laboratory processing. Certified digital results will appear once verified by the chief pathologist.</td></tr>`;
  }

  content.innerHTML = `
    <div style="background:var(--bg-paper); border-bottom:2px solid var(--border-medium); padding:20px 24px; display:flex; justify-content:space-between; align-items:flex-start;">
      <div>
        <div style="font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; color:var(--text-muted);">
          GWS CLINICAL LABORATORY NETWORK • CERTIFIED REPORT
        </div>
        <h3 class="font-serif" style="margin:2px 0 0 0; color:var(--primary-green); font-size:1.35rem;">
          ${rep.hospitalName}
        </h3>
        <div class="text-xs text-muted">${rep.labAccreditation || 'NABL Accredited Diagnostic Services'}</div>
      </div>
      <button class="btn btn-sm btn-secondary" onclick="closeReportModal()">✕ Close</button>
    </div>

    <div style="padding:24px;">
      <div style="background:var(--bg-cream); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); padding:16px; margin-bottom:20px; display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px; font-size:0.85rem;">
        <div><span class="text-muted">Patient Name:</span><br><strong>Rahul Sharma</strong></div>
        <div><span class="text-muted">Patient ID:</span><br><strong>GWS-1024</strong></div>
        <div><span class="text-muted">Age / Gender:</span><br><strong>38 Yrs / Male</strong></div>
        <div><span class="text-muted">Sample Date:</span><br><strong>${rep.date}</strong></div>
        <div><span class="text-muted">Referring Doctor:</span><br><strong>Dr. Arjun Mehta</strong></div>
        <div><span class="text-muted">Report ID:</span><br><strong style="font-family:var(--font-mono);">${rep.id}</strong></div>
      </div>

      <div style="margin-bottom:16px;">
        <h4 style="margin:0 0 8px 0; font-size:1.1rem;">${rep.title}</h4>
        <table class="data-table" style="width:100%; border-collapse:collapse;">
          <thead>
            <tr style="background:var(--bg-offwhite); text-align:left; border-bottom:2px solid var(--border-medium);">
              <th style="padding:10px;">Test Parameter</th>
              <th style="padding:10px;">Observed Value</th>
              <th style="padding:10px;">Biological Reference Interval</th>
              <th style="padding:10px;">Flag</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>

      <div style="background:var(--bg-offwhite); border-left:3px solid var(--secondary-sage); padding:12px 16px; font-size:0.8rem; color:var(--text-muted); margin-bottom:20px;">
        <strong>Safety & Clinical Disclaimer:</strong> Demo report — fictional data. Digital diagnostic reports are generated for clinical consultation by licensed physicians. Do not self-prescribe or interpret results without speaking to your treating doctor.
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; border-top:1px solid var(--border-subtle); padding-top:16px;">
        <div class="text-xs text-muted">
          Digitally signed by Chief Clinical Biochemist & Pathologist
        </div>
        <div style="display:flex; gap:10px;">
          <button class="btn btn-secondary btn-sm" onclick="window.print()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle; margin-right:4px;"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-4 11H9v-5h6v5zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-9H7v3h10V3z"/></svg>
            Print Report
          </button>
          <button class="btn btn-primary btn-sm" onclick="showHospitalToast('Downloading signed PDF report (Demo simulation)...', 'info');">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle; margin-right:4px;"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            Download PDF
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("modal-open");
}

function closeReportModal() {
  const modal = document.getElementById("report-viewer-modal");
  if (modal) modal.classList.remove("modal-open");
}

// EMERGENCY RESOURCES RENDERER
function renderEmergencyResources() {
  const state = getAppState();
  const hospital = state.hospitals.find(h => h.id === (state.selectedHospitalId || "H001")) || state.hospitals[0];
  const res = hospital.emergencyResources || { ambulancesAvailable: 2, stretchers: 7, wheelchairs: 4 };

  const ambAvailEl = document.getElementById("emergency-amb-avail");
  const stretchEl = document.getElementById("emergency-stretchers");
  const wheelEl = document.getElementById("emergency-wheelchairs");
  const hospTitleEl = document.getElementById("emergency-hospital-title");

  if (ambAvailEl) ambAvailEl.textContent = res.ambulancesAvailable;
  if (stretchEl) stretchEl.textContent = res.stretchers;
  if (wheelEl) wheelEl.textContent = res.wheelchairs;
  if (hospTitleEl) hospTitleEl.textContent = hospital.name;
}

function handleEmergencyRequestSubmit(e) {
  if (e) e.preventDefault();
  const location = document.getElementById("emg-location-input") ? document.getElementById("emg-location-input").value : "Near Shivaji Nagar";
  const emgType = document.getElementById("emg-type-select") ? document.getElementById("emg-type-select").value : "Medical Emergency";
  const people = document.getElementById("emg-people-input") ? document.getElementById("emg-people-input").value : "1";

  const dispatchAlert = document.getElementById("emg-dispatch-status-box");
  if (dispatchAlert) {
    dispatchAlert.style.display = "block";
    dispatchAlert.innerHTML = `
      <div style="background:var(--accent-emergency-light); border:2px solid var(--accent-emergency); border-radius:var(--radius-sm); padding:18px; margin-bottom:20px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
          <span style="font-size:1.5rem;">🚨</span>
          <div>
            <h4 style="margin:0; color:var(--accent-emergency); font-size:1.15rem;">EMERGENCY DISPATCH INITIATED</h4>
            <div class="text-xs text-muted">Request ID: GWS-EMG-${Math.floor(1000 + Math.random() * 9000)}</div>
          </div>
        </div>
        <p style="margin:0 0 8px 0; font-size:0.95rem;">
          Nearest ALS Ambulance dispatched to <strong>${location || 'Reported Location'}</strong> for <strong>${emgType}</strong>.
        </p>
        <div style="background:var(--bg-paper); padding:10px 14px; border-radius:4px; font-weight:700; color:var(--text-main); font-size:0.9rem;">
          ⏱️ Estimated Ambulance Arrival: 4–7 Minutes • Hospital Emergency Desk Alerted
        </div>
        <div class="text-xs text-muted" style="margin-top:8px;">
          Simulated Emergency Interface for Demonstration. In real life emergencies in India, dial <strong>108 / 112</strong> immediately.
        </div>
      </div>
    `;
  }
  showHospitalToast("Emergency request received. Ambulance unit dispatched.", "emergency");
}

// MEDICINE REMINDERS RENDERER
function renderMedicineReminders() {
  const state = getAppState();
  const listEl = document.getElementById("medicines-schedule-list");
  if (!listEl) return;

  listEl.innerHTML = "";
  state.medicines.forEach(med => {
    const isTaken = med.status === "taken";
    const card = document.createElement("div");
    card.className = `medicine-schedule-item ${isTaken ? 'med-taken' : ''}`;
    card.style.cssText = "display:flex; justify-content:space-between; align-items:center; padding:14px 18px; margin-bottom:10px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); background:" + (isTaken ? "var(--accent-success-light)" : "var(--bg-paper)");

    card.innerHTML = `
      <div style="display:flex; align-items:center; gap:14px;">
        <button class="med-checkbox ${isTaken ? 'checked' : ''}" onclick="toggleMedicineTaken(${med.id})" style="width:24px; height:24px; border-radius:4px; border:2px solid ${isTaken ? 'var(--accent-success)' : 'var(--border-strong)'}; background:${isTaken ? 'var(--accent-success)' : '#fff'}; color:#fff; display:flex; align-items:center; justify-content:center; cursor:pointer;">
          ${isTaken ? '✓' : ''}
        </button>
        <div>
          <div style="font-weight:700; font-size:1.05rem; ${isTaken ? 'text-decoration:line-through; color:var(--text-muted);' : ''}">${med.name}</div>
          <div class="text-xs text-muted">${med.instructions} • Frequency: ${med.frequency || 'Daily'}</div>
        </div>
      </div>
      <div style="display:flex; align-items:center; gap:14px;">
        <span style="font-family:var(--font-mono); font-weight:600; font-size:0.9rem;">${med.time}</span>
        <button class="btn btn-sm btn-secondary" onclick="deleteMedicine(${med.id})" style="padding:2px 8px; color:var(--text-muted);" title="Remove">✕</button>
      </div>
    `;
    listEl.appendChild(card);
  });
}

function toggleMedicineTaken(id) {
  const state = getAppState();
  const med = state.medicines.find(m => m.id === id);
  if (med) {
    med.status = med.status === "taken" ? "upcoming" : "taken";
    saveAppState(state);
    renderMedicineReminders();
  }
}

function deleteMedicine(id) {
  const state = getAppState();
  state.medicines = state.medicines.filter(m => m.id !== id);
  saveAppState(state);
  renderMedicineReminders();
}

function handleAddMedicineSubmit(e) {
  if (e) e.preventDefault();
  const name = document.getElementById("new-med-name").value;
  const dose = document.getElementById("new-med-dose").value;
  const time = document.getElementById("new-med-time").value;
  const freq = document.getElementById("new-med-freq").value;

  if (!name) return;

  const state = getAppState();
  state.medicines.push({
    id: Date.now(),
    name: name,
    instructions: dose || "As directed by physician",
    time: time || "08:00 AM",
    frequency: freq || "Daily",
    status: "upcoming"
  });

  saveAppState(state);
  closeAddMedicineModal();
  renderMedicineReminders();
  showHospitalToast(`Added medicine reminder for ${name}`, "info");
}

function openAddMedicineModal() {
  const modal = document.getElementById("add-medicine-modal");
  if (modal) modal.classList.add("modal-open");
}

function closeAddMedicineModal() {
  const modal = document.getElementById("add-medicine-modal");
  if (modal) modal.classList.remove("modal-open");
}

// HOSPITAL OPERATIONS & ADMIN DASHBOARD
function renderHospitalOperations() {
  const state = getAppState();
  const hospital = state.hospitals.find(h => h.id === (state.currentUser.hospitalId || state.selectedHospitalId || "H001")) || state.hospitals[0];

  const hospNameEl = document.getElementById("admin-hospital-name");
  const deptTbody = document.getElementById("admin-departments-tbody");
  if (hospNameEl) hospNameEl.textContent = hospital.name;

  if (deptTbody) {
    deptTbody.innerHTML = "";
    Object.keys(hospital.departments).forEach(key => {
      const d = hospital.departments[key];
      const waitingCount = d.queue.filter(q => q.status === "waiting" || q.status === "next").length;
      const waitMin = Math.round(waitingCount * (d.avgWaitPerPatientMin || 4.0));

      let loadStatus = `<span class="utility-badge" style="background:var(--accent-success-light); color:var(--accent-success);">Normal</span>`;
      if (waitingCount > 5) loadStatus = `<span class="utility-badge" style="background:var(--accent-amber-light); color:var(--accent-amber);">Busy</span>`;
      if (waitingCount > 10) loadStatus = `<span class="utility-badge" style="background:var(--accent-emergency-light); color:var(--accent-emergency);">Heavy</span>`;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="font-weight:700;">${d.name}</td>
        <td>${d.doctor}</td>
        <td><strong style="font-family:var(--font-mono);">${d.prefix}-${d.currentServingNum}</strong></td>
        <td>${waitingCount} patients</td>
        <td><strong>~${waitMin} min</strong></td>
        <td>${loadStatus}</td>
        <td style="text-align:right;">
          <button class="btn btn-sm btn-secondary" onclick="doctorCallNextPatient('${hospital.id}', '${key}')">Advance +1</button>
        </td>
      `;
      deptTbody.appendChild(tr);
    });
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  const state = getAppState();
  if (state.language) {
    applyTranslations(state.language);
    document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === state.language) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  const pageRole = document.body.getAttribute("data-require-role");
  if (pageRole) {
    requireRole(pageRole);
  }

  onGlobalStateSync(state);
});
