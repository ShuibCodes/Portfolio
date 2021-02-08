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
    img: 'wingchun.jpg',
    title: 'Wing-Chun Academy',
    info:
      "A responsive Gatsby website using Contentful CMS and Sass CSS. I'm using Contentful CMS to manage the blog. I used Netlify to deploy and host the site. ",
    info2:
      'The Contact page also includes a contact form using FormSpree and custom CSS as well as a Map using the Google Maps API.',
    url: 'https://wing-chun-academy.netlify.app/',
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
  // {
  //   id: nanoid(),
  //   img: 'webdev.jpg',
  //   title: 'Web Dev Quiz',
  //   info:
  //     'My First Project. A vanilla JS Web App that tests your knowledge on basic concepts of Javascript and CSS ',
  //   info2:
  //     'This project strengthened my knoweldge of DOM Manipulation and the fundedmentals of JasvaScript and CSS. *Live Site Coming Soon*',
  //   url: '',
  //   repo: 'https://github.com/ShuibCodes/webdevquiz', // if no repo, the button will not show up
  // },
  {
    id: nanoid(),
    img: 'marwa.jpg',
    title: 'Marwa Travels',
    info: 'A freelance project. A Portfolio website for a professional travel photographer.',
    info2: '*Live Site Coming Soon*',
    url: '',
    repo: 'https://github.com/ShuibCodes/Photography-Site', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Pomodoro.jpg',
    title: 'Pomodoro App',
    info:
      'The Pomodoro technique is a very popular focus method. I use it during my coding sessions and its helped me a lot',
    info2:
      'I built this web app to brush up on my React Hooks skills. I aim to add more features soon including local storage and mobile responsiveness',
    url: 'https://pomodoro-webapp.netlify.app/',
    repo: 'https://github.com/ShuibCodes/Pomodoro-App', // if no repo, the button will not show up
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
