export interface ResearchArea {
  id: string;
  code: string;
  title: string;
  iconName: string;
  description: string;
  sampleQuestions: string[];
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  output: string;
}

export const researchAreasData: ResearchArea[] = [
  {
    id: 'materials-science-metallurgy',
    code: 'AREA 01',
    title: 'Materials Science & Metallurgy',
    iconName: 'Layers',
    description: 'Fundamental study of physical metallurgy, phase equilibria, alloy design, heat treatment thermodynamics, and mechanical behavior across metallic systems.',
    sampleQuestions: [
      'How do solid solution strengthening mechanisms correlate with dislocation mobility in high-entropy alloys?',
      'Can thermodynamic phase modeling predict the suppression of deleterious intermetallic sigma phases?',
    ],
  },
  {
    id: 'materials-characterization',
    code: 'AREA 02',
    title: 'Materials Characterization',
    iconName: 'Microscope',
    description: 'Investigating microstructures, crystallographic textures, fracture surfaces, and defect dynamics using advanced optical microscopy, SEM, XRD, and spectroscopy.',
    sampleQuestions: [
      'What grain boundary misorientations govern intergranular corrosion susceptibility in stainless steel?',
      'How does local residual stress distribution influence fatigue crack propagation rates?',
    ],
  },
  {
    id: 'computational-materials-science',
    code: 'AREA 03',
    title: 'Computational Materials Science',
    iconName: 'Monitor',
    description: 'Simulating atomic structures, phase field kinetics, finite element stress fields, and electronic structures through computational models and density functional theory concepts.',
    sampleQuestions: [
      'How do atomic solute interactions alter grain boundary energy during recrystallization?',
      'Can molecular dynamics simulations predict dislocation nucleation stress in nanostructured metals?',
    ],
  },
  {
    id: 'materials-informatics',
    code: 'AREA 04',
    title: 'Materials Informatics',
    iconName: 'Database',
    description: 'Mining open crystallographic repositories (MP, Citrine, AFLOW), feature engineering elemental descriptors, and managing tabular materials property datasets.',
    sampleQuestions: [
      'Which physical descriptors (valence electron concentration, atomic size mismatch) best predict bulk modulus?',
      'How can data curation pipelines clean noisy literature datasets for model training?',
    ],
  },
  {
    id: 'ai-for-materials',
    code: 'AREA 05',
    title: 'Artificial Intelligence for Materials',
    iconName: 'Cpu',
    description: 'Applying machine learning regressors, deep neural networks, and computer vision models to property prediction, phase segmentation, and composition screening.',
    sampleQuestions: [
      'How accurately can convolutional neural networks segment metallographic phases according to ASTM E112?',
      'Can machine learning regression identify non-linear composition-property relationships in multi-component alloys?',
    ],
  },
  {
    id: 'advanced-emerging-materials',
    code: 'AREA 06',
    title: 'Advanced & Emerging Materials',
    iconName: 'Sparkles',
    description: 'Exploring next-generation materials including high-entropy alloys, nanocomposites, energy storage materials, biomaterials, and additive manufacturing powders.',
    sampleQuestions: [
      'What powder morphology variations govern melt pool stability in selective laser melting (SLM)?',
      'How do secondary phases influence ionic conductivity in solid-state battery electrolytes?',
    ],
  },
];

export const researchWorkflowData: WorkflowStep[] = [
  {
    step: 1,
    title: 'Problem Identification',
    description: 'Recognizing real-world engineering bottlenecks, degradation challenges, or property trade-offs in materials applications.',
    output: 'Clear Problem Statement',
  },
  {
    step: 2,
    title: 'Literature Synthesis',
    description: 'Conducting thorough scientific paper searches, mapping historical breakthroughs, and reading peer-reviewed journal articles.',
    output: 'State-of-the-Art Review',
  },
  {
    step: 3,
    title: 'Research Question & Hypothesis',
    description: 'Formulating precise, testable research hypotheses grounded in physical metallurgy and thermodynamics.',
    output: 'Formulated Research Question',
  },
  {
    step: 4,
    title: 'Methodology Design',
    description: 'Structuring rigorous experimental protocols, computational models, or data science workflows to evaluate the hypothesis.',
    output: 'Structured Methodology Plan',
  },
  {
    step: 5,
    title: 'Data Collection & Experimentation',
    description: 'Executing lab synthesis, metallographic preparation, mechanical testing, or data mining from open materials repositories.',
    output: 'Validated Dataset / Observations',
  },
  {
    step: 6,
    title: 'Analysis & Interpretation',
    description: 'Applying quantitative statistics, microstructural phase analysis, or machine learning models to analyze results.',
    output: 'Analytical Insights',
  },
  {
    step: 7,
    title: 'Scientific Validation',
    description: 'Verifying findings against physical domain laws (thermodynamics, kinetics) and presenting to academic advisors for review.',
    output: 'Faculty Verified Finding',
  },
  {
    step: 8,
    title: 'Scientific Communication',
    description: 'Documenting findings in structured technical reports, open-source repositories, or peer-reviewed journal submissions.',
    output: 'Published Research Record',
  },
];
