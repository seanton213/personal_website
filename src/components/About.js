import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  margin: 16px 100px;
  width: 75%;

  @media screen and (max-width: 600px) {
    margin: 16px 50px;
    width: 75%;
  }
`;

const Title = styled.h2`
  letter-spacing: 1px;
  font-family: 'Raleway', sans-serif;
`;

const Paragraph = styled.p`
  font-family: 'Raleway', sans-serif;
`;

const ParagraphBold = styled(Paragraph)`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
`;

function About() {
  return (
    <AboutContainer>
      <Title>About me</Title>
      <Paragraph>
        Hello Reader! My name is Sean and I love programming, exercising, playing music, playing
        video games, and eating great food. I graduated from the EECS at UC Berkeley in Fall 2018
        and have been working full time in Software Engineering. Below is a list of technologies
        that I am most familiar with. To contact me, please visit the links at the bottom of the
        page.
      </Paragraph>
      <ParagraphBold>
        Java, Spring Boot, JPA/Hibernate, Javascript, React/Redux, Postgres, Python, Kubernetes,
        Terraform, Drools, Elastic Search, Kafka
      </ParagraphBold>
    </AboutContainer>
  );
}

export default About;
