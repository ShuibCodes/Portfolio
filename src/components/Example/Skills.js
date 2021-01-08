import React from 'react';
import { DiCss3Full, DiHtml5, DiReact, DiSass } from 'react-icons/di';
import { SiJavascript, SiStyledComponents } from 'react-icons/si';

import { IconContext } from 'react-icons';
import Title from '../Title/Title';
import './Styles.css';

const Skills = () => {
  return (
    <>
      <Title title="Skills" />

      <IconContext.Provider value={{ style: { fontSize: '20em', padding: '3rem' } }}>
        <div>
          <DiHtml5 />
          <DiCss3Full />
          <SiJavascript />
          <DiReact />
          <SiStyledComponents />
          <DiSass />
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Skills;
