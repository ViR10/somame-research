export interface TeamMember {
  id: string;
  name: string;
  role: string;
  officialTitle: string;
  department: string;
  institution: string;
  affiliation: string;
  image: string;
  bio: string;
  areasOfFocus: string[];
  email: string;
  linkedin?: string;
  portfolio?: string;
  batch?: string;
  year?: string;
  isAdvisor?: boolean;
}

export const advisorData: TeamMember = {
  id: 'advisor',
  name: 'Dr. Khushnuda Nur',
  role: 'Society Advisor — SOMAME',
  officialTitle: 'Assistant Professor, Department of Metallurgical & Materials Engineering (MME)',
  department: 'Department of Metallurgical & Materials Engineering (MME)',
  institution: 'University of Engineering and Technology (UET), Lahore',
  affiliation: 'Society of Metallurgical and Material Engineers (SOMAME)',
  image: '/advisor.png',
  bio: 'Assistant Professor in MME at UET Lahore and official Society Advisor of SOMAME. Provides senior academic guidance, institutional leadership, and strategic mentorship to SOMAME and its student research ecosystem, fostering scientific rigor, methodology, and research culture.',
  areasOfFocus: [
    'Society Guidance & Governance',
    'Metallurgical & Materials Engineering',
    'Scientific Methodology & Integrity',
    'Advanced Characterization',
  ],
  email: 'khushnuda.nur@uet.edu.pk',
  linkedin: 'https://www.linkedin.com/in/khushnuda-nur-b4932b224',
  isAdvisor: true,
};

export const directorData: TeamMember = {
  id: 'director',
  name: 'Fatima Imran',
  role: 'Director — Team Research',
  officialTitle: 'Director — SOMAME Team Research',
  department: 'Department of Metallurgical & Materials Engineering (MME)',
  institution: 'University of Engineering and Technology (UET), Lahore',
  affiliation: 'SOMAME Research Directorate',
  image: '/director.png',
  bio: 'Leads the strategic vision of SOMAME Team Research, coordinating academic milestones, research culture development, and institutional partnerships within the MME Department at UET Lahore.',
  areasOfFocus: [
    'Research Strategy',
    'Student Research Culture',
    'Interdisciplinary Collaborations',
  ],
  email: 'director.research@somame.org',
  batch: '2023–2027',
  year: 'Final Year',
};

export const coDirectorsData: TeamMember[] = [
  {
    id: 'co-director-abdullah',
    name: 'Abdullah Waris',
    role: 'Co-Director — Team Research',
    officialTitle: 'Co-Director — SOMAME Team Research',
    department: 'Department of Metallurgical & Materials Engineering (MME)',
    institution: 'University of Engineering and Technology (UET), Lahore',
    affiliation: 'SOMAME Research Directorate',
    image: '/abdullah.png',
    bio: 'Oversees student research development, coordination of research domains, and bridging theoretical learning with structured scientific inquiry at SOMAME Team Research.',
    areasOfFocus: [
      'Research Direction',
      'Student Development',
      'Scientific Initiatives',
    ],
    email: 'abdullah.research@somame.org',
    batch: '2024–2028',
    year: '3rd Year',
  },
  {
    id: 'co-director-adeel',
    name: 'Adeel Shahid',
    role: 'Co-Director — Team Research',
    officialTitle: 'Co-Director — SOMAME Team Research',
    department: 'Department of Metallurgical & Materials Engineering (MME)',
    institution: 'University of Engineering and Technology (UET), Lahore',
    affiliation: 'SOMAME Research Directorate',
    image: '/adeel.png',
    bio: 'Coordinates technical research initiatives, exploration of computational and AI tools in Materials Science, and team operations at SOMAME Team Research.',
    areasOfFocus: [
      'AI × Materials Exploration',
      'Technical Initiatives',
      'Research Operations',
    ],
    email: 'adeel.research@somame.org',
    portfolio: 'https://adeelshahid.netlify.app',
    batch: '2024–2028',
    year: '3rd Year',
  },
];

export const leadershipData: TeamMember[] = [
  advisorData,
  directorData,
  ...coDirectorsData,
];
