export interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface StudentTier {
  level: string;
  targetAudience: string;
  needs: string[];
}

export const siteConfig = {
  name: 'SOMAME Research',
  subtitle: 'Team Research',
  siteUrl: 'https://somameresearch.netlify.app',
  department: 'Department of Metallurgical & Materials Engineering (MME)',
  institution: 'University of Engineering and Technology (UET), Lahore',
  departmentUrl: 'https://mme.uet.edu.pk/',
  secretariat: 'SOMAME Secretariat, Department of Metallurgical and Materials Engineering, UET Lahore',
  email: 'somameuet@gmail.com',
  phone: '+92 334 4105453',

  logos: {
    somame: '/somame-logo.png',
    department: '/logo.png',
    favicon: '/somame-logo.png',
  },

  socialLinks: {
    linkedin: 'https://www.linkedin.com/company/somame-uet/',
    instagram: 'https://www.instagram.com/somameuetofficial?stkn=dWM4eDE0b2UzdnE4',
    facebook: 'https://www.facebook.com/share/1FGSPNdCpV/',
    departmentWebsite: 'https://mme.uet.edu.pk/',
  },

  developer: {
    name: 'ViR Developers',
    url: 'https://virdevelopers.netlify.app',
  },

  philosophy: 'Learn → Explore → Practice → Compete → Achieve → Research',
  coreTagline: 'Research × Materials Engineering × Artificial Intelligence',

  aiFluencyCourse: {
    title: 'AI Fluency: Framework & Foundations',
    shortTitle: 'Anthropic AI Fluency (4D Framework)',
    provider: 'Anthropic Academy',
    url: 'https://anthropic.skilljar.com/ai-fluency-framework-foundations',
    partners: 'Ringling College of Art and Design & University College Cork',
    instructors: 'Prof. Rick Dakan & Prof. Joseph Feller with Anthropic',
    tagline: 'Learn to collaborate with AI systems effectively, efficiently, ethically, and safely.',
    description:
      'For understanding and responsibly utilizing AI in scientific materials research, this foundational course is the essential prerequisite students must complete first before deploying models or conducting computational experiments.',
    specs: {
      lectures: 14,
      duration: '1.1 hours of video',
      quizzes: 1,
      cost: '100% Free',
      credential: 'Certificate of completion',
    },
    framework4D: [
      {
        name: 'Delegation',
        summary: 'Strategic task assignment & scoping',
        materialsApplication: 'Determining which materials literature mining or descriptor tasks are suited for AI versus physical lab synthesis.',
      },
      {
        name: 'Description',
        summary: 'Context-rich prompting & scientific framing',
        materialsApplication: 'Framing crystal lattice parameters, stoichiometry, and thermodynamic constraints with precise metallurgical terminology.',
      },
      {
        name: 'Discernment',
        summary: 'Critical output evaluation & hallucination checks',
        materialsApplication: 'Detecting synthetic hallucinated citations and verifying thermodynamic plausibility against phase equilibria.',
      },
      {
        name: 'Diligence',
        summary: 'Academic integrity, ethics & reproducibility',
        materialsApplication: 'Ensuring computational reproducibility, transparent documentation, and ethical compliance in student publications.',
      },
    ],
  },

  coreValues: [
    {
      title: 'Scientific Integrity',
      subtitle: 'Evidence-Based Research',
      description: 'Research must be strictly grounded in empirical evidence, transparent methodology, and uncompromised scientific truth.',
      iconName: 'ShieldCheck',
    },
    {
      title: 'Curiosity',
      subtitle: 'Inquiry-Driven Thinking',
      description: 'Encouraging students to ask precise, meaningful questions about physical materials, crystal structures, and computational possibilities.',
      iconName: 'Compass',
    },
    {
      title: 'Evidence-Based Thinking',
      subtitle: 'Rigor Over Speculation',
      description: 'Understanding physical laws, phase equilibria, and dataset limits before jumping to premature scientific conclusions.',
      iconName: 'CheckCircle2',
    },
    {
      title: 'Collaboration',
      subtitle: 'Synergistic Teamwork',
      description: 'Scientific discovery is accelerated when metallurgical domain knowledge pairs seamlessly with computational and data expertise.',
      iconName: 'Users',
    },
    {
      title: 'Continuous Learning',
      subtitle: 'Iterative Skill Growth',
      description: 'Research capability is not innate; it is cultivated progressively through paper reading, coding, experimentation, and revision.',
      iconName: 'BookOpen',
    },
    {
      title: 'Responsible Technology',
      subtitle: 'Ethical AI Deployment',
      description: 'Leveraging AI as a cognitive accelerator for literature synthesis and data mining without ever replacing human scientific judgment.',
      iconName: 'Cpu',
    },
  ] as CoreValue[],

  targetUsers: [
    {
      level: 'First-Semester Students',
      targetAudience: 'Freshmen & New Entrants',
      needs: [
        'Fundamental introduction to what scientific research actually is',
        'Understanding how AI interfaces with physical materials',
        'Building scientific literacy and learning to read research literature',
      ],
    },
    {
      level: 'Intermediate Students',
      targetAudience: '3rd – 5th Semester Undergraduates',
      needs: [
        'Methodology workshops & scientific hypothesis formulation',
        'Exposure to computational materials tools & Python libraries',
        'Understanding phase diagrams, descriptors, and quantitative metallography',
      ],
    },
    {
      level: 'Senior Students',
      targetAudience: '6th – 8th Semester Undergraduates',
      needs: [
        'Advanced computational materials research directions',
        'Participation in national/international student technical challenges',
        'Preparation of technical reports, datasets, and peer-reviewed papers',
      ],
    },
  ] as StudentTier[],
};
