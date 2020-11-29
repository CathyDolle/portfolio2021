import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import styled from '@emotion/styled';
import { Title, BodyText, Headline } from '../library/typography'

const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: ${({ flexEnd }) => flexEnd ? 'flex-end' : 'flex-start'};
  flex: 1;
  height: 100%;
`;

function About() {
  return (
    <Wrapper>
      {/* INFOS */}
      <TextSection>
        <Title>Infos</Title>
        {/* PREENTATION */}
        <Headline>Presentation</Headline>
        <BodyText>
        Im a Paris based Designer specializing<br/>in web interfacing
        </BodyText>
        {/* Personnality */}
        <Headline>I am</Headline>
        <BodyText>Liste des capacités à mettre</BodyText>
        {/* Resume */}
        <Headline>Resume</Headline>
      </TextSection>
      {/* SKILLS */}
      <TextSection flexEnd>
        <Title>Skills</Title>
        {/* SOFTS */}
        <Headline>SOFTWARES</Headline>
        <BodyText>
        ADOBE XD<br/>
        FIGMA<br/>
        SKETCH<br/>
        ILLUSTRATOR<br/>
        INDESIGN<br/>
        PHOTOSHOP<br/>
        INVISION<br/>
        NOTION<br/>
        </BodyText>
        {/* LANGAGES */}
        <Headline>Langages</Headline>
        <BodyText>
        HTML<br/>
        CSS / SCSS<br/>
        JAVASCRIPT<br/>
        REACT / VUE<br/>
        PHP<br/>
        </BodyText>
      </TextSection>  
      {/* SOCIAL */}
      <TextSection style={{ flex: 2 }}>
        <Title>Social</Title>
      </TextSection>    
    </Wrapper>
  );
}

export default About;