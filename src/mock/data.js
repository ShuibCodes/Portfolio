/* eslint-disable */
import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shuib Abdillahi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, My name is ',
  name: 'Shuib',
  subtitle: "I'm a Self-Taught, Front-End developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1Y8YlzO1p_LYpi8FPMWGA4cKFTIrOqUjE/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dollabank.jpg',
    title: 'DollaBank',
    info: 'A REACT website for a fake bank using react router, hooks and styled-components. ',
    info2:
      'I decided to use styled components for this project to make the codebase clean. This allowed me to focus on making responsive components with React. ',
    url: 'https://dollabank.netlify.app/',
    repo: 'https://github.com/ShuibCodes/bankwebsite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'company.png',
    title: 'Nutrition Integrated',
    info: 'My current project at work - im rebuilding the corporate website and integrating a blog section as well as custom chart animation using sample data from a Postgres database',
    info2:
      "I'm using React with Gatsby.Js, GraphQL, Contentful CMS and TailwindCSS.",
       // if no repo, the button will not show up
       url: 'https://nutritionintegrated.com/'
  },
  {
    id: nanoid(),
    img: 'msc.png',
    title: 'Master Supreme Cleans',
    info: 'A cleaning agency in London needed a website, I designed and developed it and deployed in Netlify',
    info2: "HTML, CSS (TailwindCSS), React (Gatsby.js) and Contentful CMS",
       // if no repo, the button will not show up
       url: 'https://www.mastersupremeclean.com/',
       repo: 'https://github.com/ShuibCodes/MasterSupremeClean',
  },

  {
    id: nanoid(),
    img: 'biyo.png',
    title: 'Biyo.so',
    info: "A charity website for Eas-africa. I was approached by this charity to build to design and develop a website for them.  ",
    info2:
      "Built in HTML,CSS (Bootstrap), React + Gatsby.js",
       // if no repo, the button will not show up
       url: "https://biyo.so/",
       repo: 'https://github.com/ShuibCodes/Biyo',
  }
  
 
 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: '',
      url: 'https://www.instagram.com/Shuayb_codes/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ShuibCodes',
    },
    {
      id: nanoid(),
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shuib-abdillahi-4aba451ab/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
