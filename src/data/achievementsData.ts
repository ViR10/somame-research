export interface AchievementCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface VerificationStep {
  step: number;
  stage: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  date: string;
  event: string;
  position?: string;
  teamMembers: string[];
  description: string;
  image?: string;
  certificateUrl?: string;
  organizer: string;
  verificationLink?: string;
}

export const emptyStateConfig = {
  headline: 'Our Achievement Archive Is Beginning',
  subtext: 'As our research ecosystem grows, this section will serve as a transparent, verifiable record of student achievements, competition outcomes, technical reports, and eventual publications.',
  badge: 'Honest Record • Zero Fabricated Claims',
  notice: 'SOMAME Team Research strictly prohibits claiming unverified awards, fake projects, or exaggerated statistics. Every item listed in this archive will undergo rigorous internal verification before public display.',
};

export const achievementCategories: AchievementCategory[] = [
  {
    id: 'student-competitions',
    title: 'Student Competitions',
    description: 'National and international engineering competitions, hackathons, and design challenges.',
    iconName: 'Trophy',
  },
  {
    id: 'research-presentations',
    title: 'Research Presentations',
    description: 'Poster sessions, conference presentations, and academic symposium talks delivered by team members.',
    iconName: 'Presentation',
  },
  {
    id: 'technical-challenges',
    title: 'Technical Challenges',
    description: 'Internal and inter-university research problem-solving challenges in materials science and AI.',
    iconName: 'Award',
  },
  {
    id: 'research-projects',
    title: 'Research Projects',
    description: 'Faculty-guided undergraduate research initiatives and computational materials modeling projects.',
    iconName: 'FileCode',
  },
  {
    id: 'academic-recognition',
    title: 'Academic Recognition',
    description: 'Departmental awards, scholarships, and academic honors earned by student team members.',
    iconName: 'Medal',
  },
  {
    id: 'team-milestones',
    title: 'Team Milestones',
    description: 'Institutional benchmarks, research workshop completions, and organizational developments.',
    iconName: 'Milestone',
  },
];

export const achievementVerificationWorkflow: VerificationStep[] = [
  {
    step: 1,
    stage: 'Activity Completion',
    description: 'Student or team completes a competition, presentation, workshop, or technical research milestone.',
  },
  {
    step: 2,
    stage: 'Evidence Collection',
    description: 'Official certificates, photographs, presentation slides, or competition result links are submitted.',
  },
  {
    step: 3,
    stage: 'Directorate Review',
    description: 'Director and Co-Directors verify participant identities, roles, and event authenticity.',
  },
  {
    step: 4,
    stage: 'Academic Mentor Confirmation',
    description: 'Faculty Mentor reviews the achievement record to ensure academic integrity standards.',
  },
  {
    step: 5,
    stage: 'Archive Publication',
    description: 'The verified record is added to the official portal archive with verifiable documentation links.',
  },
];

export const activeAchievements: AchievementItem[] = [];
