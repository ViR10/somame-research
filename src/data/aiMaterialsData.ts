export interface AIApplication {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  iconName: string;
}

export interface AIResearchSkill {
  title: string;
  description: string;
  category: string;
}

export const aiPipelineSteps = [
  {
    stage: 'Materials',
    label: 'Domain Input',
    description: 'Physical alloys, crystal lattices, microstructure samples, thermal processing histories.',
    color: 'border-[#E5E7EB] bg-white text-[#0F172A]',
  },
  {
    stage: 'Data',
    label: 'Feature Extraction',
    description: 'Tabular property datasets, elemental descriptors, SEM micrographs, diffraction patterns.',
    color: 'border-blue-200 bg-blue-50/60 text-[#2563EB]',
  },
  {
    stage: 'Machine Learning',
    label: 'Computation & Training',
    description: 'Regression models, neural networks, computer vision segmentation, decision trees.',
    color: 'border-[#E5E7EB] bg-white text-[#0F172A]',
  },
  {
    stage: 'Prediction / Analysis',
    label: 'Model Inference',
    description: 'Screening thousands of composition candidates, predicting hardness or phase boundary.',
    color: 'border-blue-200 bg-blue-50/60 text-[#2563EB]',
  },
  {
    stage: 'Materials Insight',
    label: 'Scientific Discovery',
    description: 'Uncovering non-linear composition-property relationships and high-throughput candidates.',
    color: 'border-slate-800 bg-slate-900 text-white',
  },
  {
    stage: 'Experimental Validation',
    label: 'Physical Verification',
    description: 'Targeted laboratory synthesis and metallographic testing to confirm predictions.',
    color: 'border-emerald-200 bg-emerald-50/80 text-emerald-900',
  },
];

export const aiApplicationsData: AIApplication[] = [
  {
    id: 'property-prediction',
    title: 'Property Prediction',
    category: 'Regression & Modeling',
    description: 'Using machine learning regression to correlate elemental descriptors with hardness, tensile strength, thermal conductivity, and corrosion resistance.',
    impact: 'Accelerates property evaluation without physical destructive testing for candidate alloys.',
    iconName: 'Activity',
  },
  {
    id: 'alloy-exploration',
    title: 'Alloy & Composition Exploration',
    category: 'Generative & Screening',
    description: 'High-throughput pre-screening of multi-component phase space to identify promising solid solution regions in high-entropy alloys.',
    impact: 'Narrows down search space from millions of combinations to viable experimental candidates.',
    iconName: 'Compass',
  },
  {
    id: 'microstructure-analysis',
    title: 'Microstructure Analysis',
    category: 'Computer Vision',
    description: 'Applying convolutional neural networks for automated metallographic grain size segmentation, phase fraction counting, and inclusion rating.',
    impact: 'Eliminates human subjectivity in optical micrographs and standardizes ASTM grain measurement.',
    iconName: 'Eye',
  },
  {
    id: 'phase-analysis',
    title: 'Phase Analysis',
    category: 'Pattern Recognition',
    description: 'Automating X-ray diffraction (XRD) peak indexing and phase matching using pattern recognition models trained on crystallographic databases.',
    impact: 'Rapid identification of complex multiphase mixtures in heat-treated alloys.',
    iconName: 'Layers',
  },
  {
    id: 'process-optimization',
    title: 'Process Optimization',
    category: 'Surrogate Modeling',
    description: 'Data-driven optimization of thermal heat treatment schedules, quenching rates, and sintering parameters to maximize mechanical performance.',
    impact: 'Reduces energy consumption and thermal trial-and-error in furnace cycles.',
    iconName: 'Cpu',
  },
  {
    id: 'materials-informatics',
    title: 'Materials Informatics',
    category: 'Data Mining',
    description: 'Mining open repositories (Materials Project, Citrine, OQMD) and laboratory logs to curate structured, clean datasets for computational research.',
    impact: 'Transforms historical research papers into machine-readable datasets.',
    iconName: 'Database',
  },
  {
    id: 'scientific-data-analysis',
    title: 'Scientific Data Analysis',
    category: 'Analytics & Viz',
    description: 'Using automated statistical pipelines to parse stress-strain curves, DSC thermograms, and electrochemical impedance spectroscopy (EIS) data.',
    impact: 'Standardizes experimental data interpretation across student research groups.',
    iconName: 'BarChart2',
  },
];

export const aiResearchSkillsData: AIResearchSkill[] = [
  {
    title: 'AI Fundamentals',
    description: 'Supervised vs. unsupervised learning, regression metrics (RMSE, R²), cross-validation, and avoiding overfitting.',
    category: 'Theory',
  },
  {
    title: 'Python for Science',
    description: 'Proficiency in NumPy, Pandas, Matplotlib, SciPy, and Scikit-Learn tailored to physical data.',
    category: 'Programming',
  },
  {
    title: 'Materials Descriptors',
    description: 'Engineering atomic, valence, electro-negativity, and crystal symmetry features (e.g. Matminer, pymatgen).',
    category: 'Informatics',
  },
  {
    title: 'Computer Vision',
    description: 'OpenCV and PyTorch image preprocessing for grain segmentation and microstructural defect detection.',
    category: 'Vision',
  },
  {
    title: 'Machine Learning Models',
    description: 'Random Forests, XGBoost, Support Vector Regressors, and Artificial Neural Networks.',
    category: 'Algorithms',
  },
  {
    title: 'Data Curation & Cleaning',
    description: 'Handling missing values, outlier detection, unit standardization, and dataset documentation.',
    category: 'Data Engineering',
  },
  {
    title: 'Model Evaluation',
    description: 'Assessing model domain bounds, extrapolation limits, and feature importance interpretations (SHAP).',
    category: 'Validation',
  },
  {
    title: 'Scientific Verification',
    description: 'Cross-checking machine learning predictions against thermodynamic physical laws and phase diagrams.',
    category: 'Integrity',
  },
  {
    title: 'Responsible AI & Ethics',
    description: 'Ensuring AI outputs are transparent, reproducible, and never used to fabricate unverified scientific claims.',
    category: 'Ethics',
  },
];

export const responsibleAIPolicy = {
  title: 'Responsible AI Requirements & Ethics Policy',
  subtitle: 'Mandatory Guidelines for Student Research',
  intro: 'Artificial Intelligence is a powerful cognitive tool to assist human inquiry, literature organization, and data modeling. It does not replace scientific rigor, physical validation, or academic integrity.',

  allowedUses: [
    'Brainstorming research questions and organizing literature search strategies',
    'Understanding complex thermodynamic and mathematical concepts',
    'Writing Python code for data processing, regression modeling, and plotting',
    'Exploratory data analysis of open materials database repositories',
    'Formatting scientific literature citations and improving draft manuscript clarity',
  ],

  prohibitedUses: [
    'Replacing human scientific judgment or physical domain verification',
    'Fabricating experimental data, lab observations, or microstructural images',
    'Generating fake citations, fake authors, or unverified scientific literature quotes',
    'Submitting unreviewed AI-generated text as original student research work',
    'Making unverified claims of novel material discoveries without laboratory or rigorous theoretical proof',
  ],

  commitment: 'SOMAME Team Research maintains a strict policy: Every finding published or presented under the team identity must be empirically verifiable and reviewed by academic leadership.',
};
