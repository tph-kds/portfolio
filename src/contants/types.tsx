import { ReactElement } from 'react';

export type ThemeContextProps = {
    theme: string;
    toggleTheme: () => void;
}

export interface TextValueProps {
    value: number
}


export type MarbleDotProps = {
    top: number;
    activeIndex: number;
};

export type LineProps = {
    height: number;
    itemCentersYRelativeToTrack: number[];
};

export type TimelineItemProps = {
    experience: ExperienceData;
    isActive: boolean;
    index: number;
    isDark: boolean | true;
};

export type CalculateItemCentersProps = {
    timelineTrackRef: React.MutableRefObject<HTMLDivElement | null>;
    itemRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
}

export type HandleScrollProps = {
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
    itemRefs: React.MutableRefObject<React.RefObject<HTMLDivElement>[]>;
    timelineTrackRef: React.RefObject<HTMLDivElement>;
    setMarbleTopRelativeToTrack: React.Dispatch<React.SetStateAction<number>>;
    setItemCentersYRelativeToTrack: React.Dispatch<React.SetStateAction<number[]>>;

}



export const BriefcaseIcon = () => <span role="img" aria-label="briefcase">&#x1F4BC;</span>;
export const BuildingIcon = () => <span role="img" aria-label="building">&#x1F3E2;</span>;
export const BrainIcon = () => <span role="img" aria-label="brain">&#x1F9E0;</span>;



// Type Definition
export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  icon: ReactElement;
  technologies: string[];
  quote: string;
}



// Sample Experience Data (unchanged)
export const experiencesData: ExperienceData[] = [
  {
    id: 'exp1',
    company: 'FutureTech AI',
    role: 'AI Research Intern',
    duration: 'June 2024 - August 2024',
    description: 'Contributed to cutting-edge research in natural language understanding. Developed and tested new algorithms for sentiment analysis, improving accuracy by 10%. Collaborated with senior researchers on a paper submission.',
    icon: <BrainIcon />,
    technologies: ['Python', 'TensorFlow', 'NLP', 'Git'],
    quote: "The future belongs to those who believe in the beauty of their AI dreams."
  },
  {
    id: 'exp2',
    company: 'Innovate Solutions Ltd.',
    role: 'Junior Machine Learning Engineer',
    duration: 'September 2024 - Present',
    description: 'Designing and implementing machine learning models for predictive analytics. Working on a client project to optimize logistics using reinforcement learning. Responsible for data preprocessing, model training, and evaluation.',
    icon: <BriefcaseIcon />,
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Docker', 'AWS SageMaker'],
    quote: "Machine learning is the art of teaching computers to learn from data."
  },
  {
    id: 'exp3',
    company: 'AI Ethics Initiative (Volunteer)',
    role: 'Consultant',
    duration: 'January 2025 - Ongoing',
    description: 'Providing insights on the ethical implications of emerging AI technologies. Participating in workshops and contributing to white papers on responsible AI development.',
    icon: <BuildingIcon />,
    technologies: ['Research', 'Policy Analysis', 'Communication'],
    quote: "With great power comes great responsibility, especially in AI."
  },
  {
    id: 'exp4',
    company: 'University Capstone Project',
    role: 'Lead AI Developer',
    duration: 'September 2023 - May 2024',
    description: 'Led a team of 4 to develop an AI-powered recommendation system for an e-commerce platform. Responsible for the core algorithm design, achieving a 20% increase in simulated user engagement.',
    icon: <BriefcaseIcon />,
    technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Agile'],
    quote: "Innovation distinguishes between a leader and a follower. We chose to lead with AI."
  },
];




