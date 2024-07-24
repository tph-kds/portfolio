import logo from "../../public/assets/logo.png"
// navLinks
type navLinks = {
    id: string;
    title: string;
}

export const navLinks: navLinks[] = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "about_me",
    title: "About",
  },
  {
    id: "experiments",
    title: "Experiments",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

// Technologies
type technologies = {
  id: string;
  name: string;
}
export const technologies: technologies[] = [
  {id: "javascript" , name: "JavaScript"},
  {id: "python", name: "Python"},
  {id:"html" , name: "HTML"},
  {id: "css", name: "CSS"},
  {id: "mongodb", name: "mongoDB"},
  {id: "mysql", name: "MySQL"},
  {id: "postgres", name: "Postgres"},
  {id: "react", name: "React"},

]

type about_text = {
  id: string;
  content: string;
}
export const about_text: about_text[] = [
  {
    id: "1",
    content: `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`,
  },
]

type about_skill = {
  id: string;
  number: string;
  name: string;
  finall_suffix: string;
}
export const about_skill: about_skill[] = [
  { 
    id: "experience" , 
    number: "10", 
    name: "Year of Experiences",
    finall_suffix: "+"
  },
  { 
    id: "experience1" , 
    number: "10", 
    name: "Year of Experiences",
    finall_suffix: "+"
  },
  { 
    id: "experience2" , 
    number: "10", 
    name: "Year of Experiences",
    finall_suffix: "+"
  },

];

// Experiences
type Experiences = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}
export const Experience:Experiences[] = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];


// Projects
type Props = {
  title:string;
  src: string;
  description: string;
}
export const Props: Props[] = [
  {
    title: "E-Commerce Website",
    src: logo,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  },
  {
    title: "Task Management App",
    src: logo,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  },
  {
    title: "Portfolio Website",
    src: logo,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",

  },
  {
    title: "Blogging Platform",
    src: logo,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  },
];

// Footer
type contact = {
  title: string;
  address: string;
  phoneNo: string;
  email: string;
}
export const contact:contact = {
  title: "Contact",
  address: "Tan Phu District, Ho Chi Minh City",
  phoneNo: "+12 4555 666 00 ",
  email: "tranphihung8383@gmail.com",
};
// Define the types
type ServiceItem = {
  name: string;
  url: string;
};

type service = {
  title: string;
  components: ServiceItem[];
};

export const service:service[] = [
  {
    title: "Service",
    components: [ {
        name: "Blog",
        url: "",
      },
      {
        name: "Knowledge",
        url: "",
      },
      {
        name: "News",
        url: "",
      },
      {
        name: "Sponors",
        url: "",
      },
    ],
    },
    {
      title: "Service",
      components: [ {
          name: "Blog",
          url: "",
        },
        {
          name: "Knowledge",
          url: "",
        },
        {
          name: "News",
          url: "",
        },
        {
          name: "Sponors",
          url: "",
        },
      ],
      },

];






