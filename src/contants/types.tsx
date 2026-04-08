import { ReactElement } from 'react';
import { BriefcaseBusiness } from 'lucide-react';

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


type EmojiIconProps = {
  className?: string;
};

export const BriefcaseIcon = ({ className }: EmojiIconProps) => (
  <BriefcaseBusiness aria-label="briefcase" size={18} className={className} />
);
export const BuildingIcon = ({ className }: EmojiIconProps) => (
  <span role="img" aria-label="building" className={className}>
    &#x1F3E2;
  </span>
);
export const BrainIcon = ({ className }: EmojiIconProps) => (
  <span role="img" aria-label="brain" className={className}>
    &#x1F9E0;
  </span>
);



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
    company: 'Yeah1 Group Corporation',
    role: 'AI Engineer Intern',
    duration: 'November 2024 - May 2025',
    description: 'Working on AI project related to film videos and social media. Designing and implementing AI LLM, deep learning, and machine learning models for sentiment analysis and behavioral analytics. Responsible for data preprocessing, model training, and evaluation.',
    icon: <BrainIcon />,
    technologies: ['Python', 'Pytorch', 'Google Cloud Platform', 'Docker', 'NLP', 'Bitbucket', ],
    quote: "The future belongs to those who believe in the beauty of their AI dreams."
  },
  {
    id: 'exp2',
    company: 'Golden Owl Solutions',
    role: 'AI Engineer Intern',
    duration: 'November 2025 - April 2026',
    description: 'Architected and deployed production-ready AI workflows, including an LLM-powered Text-to-SQL system that accelerated enterprise analytics. Orchestrated low-latency inference services using Triton and developed contextual memory modules for agentic AI chatbots.',
    icon: <BriefcaseIcon className="text-amber-300" />,
    technologies: ['PyTorch', 'vLLM', 'Triton Inference Server', 'MCP', 'Docker', 'FastAPI', 'LangChain'],
    quote: "Bridging the gap between applied AI research and scalable, low-latency production environments."
  },
  // {
  //   id: 'exp3',
  //   company: 'AI Ethics Initiative (Volunteer)',
  //   role: 'Consultant',
  //   duration: 'January 2025 - Ongoing',
  //   description: 'Providing insights on the ethical implications of emerging AI technologies. Participating in workshops and contributing to white papers on responsible AI development.',
  //   icon: <BuildingIcon />,
  //   technologies: ['Research', 'Policy Analysis', 'Communication'],
  //   quote: "With great power comes great responsibility, especially in AI."
  // },
  // {
  //   id: 'exp4',
  //   company: 'University Capstone Project',
  //   role: 'Lead AI Developer',
  //   duration: 'September 2023 - May 2024',
  //   description: 'Led a team of 4 to develop an AI-powered recommendation system for an e-commerce platform. Responsible for the core algorithm design, achieving a 20% increase in simulated user engagement.',
  //   icon: <BriefcaseIcon />,
  //   technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning', 'Agile'],
  //   quote: "Innovation distinguishes between a leader and a follower. We chose to lead with AI."
  // },
];




