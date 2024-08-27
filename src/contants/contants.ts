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
    content: `As a highly dedicated and driven AI Engineer and Data Scientist, I am passionate about harnessing the power of advanced technologies to foster innovation and address complex, real-world challenges. With a robust foundation in machine learning, deep learning, Generative AI, and data analytics, I am adept at developing and deploying sophisticated AI models. My expertise extends to orchestrating end-to-end MLOps pipeline workflows, ensuring that AI solutions not only deliver actionable insights but also translate into measurable, impactful results.
            My professional journey has equipped me with comprehensive expertise across a diverse range of domains, including natural language processing, computer vision, and recommendation systems. I have consistently demonstrated my ability to design and implement scalable AI-driven solutions that significantly enhance decision-making processes and optimize operational efficiency. My unwavering commitment to continuous learning and professional development keeps me at the cutting edge of technological advancements, enabling me to deliver innovative, forward-thinking solutions that align with the evolving needs of the industry.`,
  },
]

type about_skill = {
  id: string;
  number: number;
  name: string;
  finall_suffix: string;
}
export const about_skill: about_skill[] = [
  { 
    id: "yoExperience" , 
    number: 1, 
    name: "Year of Experiences",
    finall_suffix: "+"
  },
  { 
    id: "noProjects" , 
    number: 8, 
    name: "Number of Projects",
    finall_suffix: "+"
  },
  { 
    id: "noClients" , 
    number: 10, 
    name: "Number of Clients",
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
export const Experience:Experiences[] = []

// export const Experience:Experiences[] = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];


// Projects
type Props = {
  title:string;
  src: string;
  description: string;
  link: string
}
export const Props: Props[] = [
  {
    title: "Board Game Recommendation System",
    src: logo,
    description:
      "Designed and implemented a sophisticated recommendation system for board games, combining content-based and collaborative filtering techniques. Implemented a web application using Flask and deployed it on local server. The system merges weighted ratings and averages to deliver personalized suggestions, enhancing user experience by recommending", //The system merges weighted ratings and averages to deliver personalized suggestions, enhancing user experience by recommending games that align with individual preferences and community trends. Modular training and deployment pipelines ensure scalability and adaptability for ongoing improvements.
    link: "https://github.com/tph-kds/recommendation_system_fullstack",
    },
  {
    title: "Visual Question Answering System",
    src: logo,
    description:
      "Developed an advanced Visual Question Answering system that integrates BERT for natural language processing and Vision Transformer (ViT) for image analysis. Implemented a web application using Streamlit and deployed it on local server.", //This AI-driven system interprets and answers questions based on visual inputs, achieving high accuracy by leveraging the strengths of both models in understanding context and visual content.
    link: "https://github.com/tph-kds/vqa-llm",
  },
  {
    title: "TriModal Retrieval Argument Generation System",
    src: logo,
    description:
      "Developed a Trimodal Retrieval-Augmented Generation (RAG) system that integrates text, image, and audio modalities to enhance content understanding and response generation.", //The system combines advanced retrieval techniques with generative models, delivering contextually rich and accurate outputs across multiple data types.
    link: "https://github.com/tph-kds/TriModalRAG_System",
  },
  {
    title: "Blogging Platform",
    src: logo,
    description:
      "Built a dynamic and responsive blog platform using React and TypeScript. The platform offers a seamless user experience with features like real-time content updates, intuitive navigation, and customizable themes.", // Designed with scalability and maintainability in mind, the project showcases a modern approach to web development with strong type safety and component-based architecture.
    link: "https://github.com",
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
      title: "Entertainment",
      components: [ {
          name: "Channels",
          url: "",
        },
        {
          name: "Academics",
          url: "",
        },
        {
          name: "Movies",
          url: "",
        },
        {
          name: "Papers",
          url: "",
        },
      ],
      },

];






