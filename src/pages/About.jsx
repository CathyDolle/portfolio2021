import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import styled from '@emotion/styled';
import { Title, BodyText, Headline, ListItem } from '../library/typography'
import Carrousel from '../components/about/carrousel'

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
        <ListItem>
          <li>ADOBE XD</li>
          <li>FIGMA</li>
          <li>SKETCH</li>
          <li>ILLUSTRATOR</li>
          <li>INDESIGN</li>
          <li>PHOTOSHOP</li>
          <li>INVISION</li>
          <li>NOTION</li>
        </ListItem>
        {/* LANGAGES */}
        <Headline>LANGAGUES</Headline>
        <ListItem>
          <li>HTML</li>
          <li>CSS / SCSS</li>
          <li>JAVASCRIPT</li>
          <li>TWITTER</li>
          <li>REACT / VUE</li>
          <li>PHP</li>
        </ListItem>
      </TextSection>  
      {/* SOCIAL */}
      <TextSection>
        <Title>Social</Title>
        {/* SOFTS */}
        <Headline>STREAMING</Headline>
        <BodyText>Im Twitch Partner and love sharing my passion,
        productivity, video games, and music, 
        come say hi !
        </BodyText>
        {/* LINKS */}
        <Headline>LINKS</Headline>
        <ListItem>
          <li>BEHANCE</li>
          <li>DRIBBBLE</li>
          <li>INSTAGRAM</li>
          <li>TWITTER</li>
          <li>DISCORD</li>
          <li>LINKEDIN</li>
          <li>TWITCH</li>
        </ListItem>
      </TextSection>  
      {/* carroussel*/}
      <Carrousel/>
    </Wrapper>
  );
}

export default About;