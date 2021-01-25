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
  resume: 'https://drive.google.com/file/d/1pPm5-KrCUp4xEfrHu7qyubcX59MEoyTs/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'dollabank.jpg',
    title: 'DollaBank',
    info:
      'A REACT website for a fake bank using react router, hooks and styled-components. I also added a contact form  with GetForm as a backend. ',
    info2:
      'I decided to use styled components for this project to make the codebase clean. This allowed me to focus on making responsive components with React. ',
    url: 'https://dollabank.netlify.app/',
    repo: 'https://github.com/ShuibCodes/bankwebsite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wingchun.jpg',
    title: 'Wing-Chun Academy',
    info:
      "A responsive Gatsby website using Contentful CMS and Sass CSS. I'm using Contentful CMS to manage the blog. I used Netlify to deploy and host the site. ",
    info2: '',
    url: 'https://wingchunacademy.netlify.app/',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weatherapp.jpg',
    title: 'Weather App',
    info: 'this is a responsive weather app made with React using open-weather API ',
    info2:
      "This is my first project working with an API, I intend to use API's more as I dive into learning backend in the near future.",
    url: 'https://shuibcodes.github.io/WeatherApp/',
    repo: 'https://github.com/ShuibCodes/WeatherApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'webdev.jpg',
    title: 'Web Dev Quiz',
    info:
      'My First Project. A vanilla JS Web App that tests your knowledge on basic concepts of Javascript and CSS ',
    info2:
      'This project strengthened my knoweldge of DOM Manipulation and the fundedmentals of JasvaScript and CSS. *Live Site Coming Soon*',
    url: '',
    repo: 'https://github.com/ShuibCodes/webdevquiz', // if no repo, the button will not show up
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
