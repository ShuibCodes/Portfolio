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
      "I'm using Gatsby.Js, GraphQL, Contentful CMS and TailwindCSS.",
       // if no repo, the button will not show up
       
       info2: '(ongoing project)'
  },
  {
    id: nanoid(),
    img: 'nba.png',
    title: 'NBA Stats Dashboard',
    info: 'An NBA statistics dashboard Ive been building in my spare time. It uses an API to grab player data and im using D3.js to display this data as a series of bar charts, line charts and more. ',
    info2:
      "I'm using Gatsby.Js, GraphQL, Contentful CMS and TailwindCSS.",
       // if no repo, the button will not show up
       url: 'https://nba-dashboard.netlify.app/',
       repo: 'https://github.com/ShuibCodes/NBA-Dashboard',
  },

  {
    id: nanoid(),
    img: 'blog.png',
    title: 'ShuaybCodes',
    info: "A blog website I update every week with insightful posts related to productivity and lifestyle",
    info2:
      "I'm using Gatsby.Js, GraphQL, Contentful CMS , SASS and styles components.",
       // if no repo, the button will not show up
       url: "https://shuaybcodes.com/",
       repo: 'https://github.com/ShuibCodes/ShuaybCodes',
  },
  
 
  {
    id: nanoid(),
    img: 'shopify.png',
    title: 'Shopify Clothing Site',
    info:
      'An ongoing project where I ustilize Shopify API and AtomizeUI to build this clothing shop website',
    info2: '(ongoing project)',
    url: "https://shopify-website.netlify.app/",
    repo: 'https://github.com/ShuibCodes/E-commerce-Site',
  },
  {
    id: nanoid(),
    img: 'travel-sudan.png',
    title: 'Travelling Sudannia',
    info:
      'A freelance project. A Portfolio website for a professional travel photographer. The project is still in production but here is a live prototype',
    info2: '(ongoing project)',

  },
 
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
      url: 'https://www.instagram.com/__shuib__/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ShuibCodes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
