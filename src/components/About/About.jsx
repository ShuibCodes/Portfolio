import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={100} delay={100} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={100} delay={100} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Learning to code has been a difficult and ardious journey, however, I have never done something so rewarding. Now, I feel at a point where I can build multipage websites with my HTML & CSS skills. I have also spent time learning and practicing JavaScript (including working with API's), functional programming and object oriented programming."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I am aware this is a fast growing, modern industry. Therefore, I made sure to learn and use frameworks and tools such as React, Gatsby, SASS and most recently, styled components in order to effeciently build websites using the latest tools. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "I am a developer because I'm inspired to be a better me today than I was yesterday. Put simply, I love to learn and these projects below are a great example of that"}
                </p>

                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      CV
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
