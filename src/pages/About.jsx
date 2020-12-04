import React from 'react';
import Wrapper from '../components/wrapper/Wrapper'
import styled from '@emotion/styled';
import { Title, BodyText, Headline, ListItem} from '../library/typography'
import Carrousel from '../components/about/Carrousel'
import blackResumePDF from '../assets/resume/cathyBlackResume.pdf'
import whiteResumePDF from '../assets/resume/cathyWhiteResume.pdf'

const TextSection = styled.section`
  display: flex;
  padding-top: 20px;
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
        <Headline>I AM</Headline>
        <ListItem>
          <li>Perfectionist</li>
          <li>Autonomous</li>
          <li>Organized</li>
          <li>Punctual</li>
          <li>Curious</li>
        </ListItem>
        {/* Resume */}
        <Headline>RESUME</Headline>
        <ListItem>
          <li><a href={blackResumePDF} download="Cathy's Black Resume" target="_blank">Black version</a></li>
          <li><a href={whiteResumePDF} download="Cathy's White Resume" target="_blank">White version</a></li>
        </ListItem>
      </TextSection>
      {/* SKILLS */}
      <TextSection flexEnd paddingBottom>
        <Title>Skills</Title>
        {/* SOFTS */}
        <Headline>SOFTWARES</Headline>
        <ListItem>
          <li>Adobe XD</li>
          <li>Figma</li>
          <li>Sketch</li>
          <li>Illustrator</li>
          <li>Indesign</li>
          <li>Photoshop</li>
          <li>Invision</li>
          <li>Notion</li>
        </ListItem>
        {/* LANGAGES */}
        <Headline>LANGAGUES</Headline>
        <ListItem>
          <li>HTML</li>
          <li>CSS / SCSS</li>
          <li>Javascript</li>
          <li>React / Vue</li>
          <li>PHP</li>
        </ListItem>
      </TextSection>  
      {/* SOCIAL */}
      <TextSection>
        <Title>Social</Title>
        {/* SOFTS */}
        <Headline>STREAMING</Headline>
        <BodyText>Im Twitch Partner and love sharing my passion! <br/>
        UI UX Design, web Development, <br/>video games, art, and music, 
        come say hi !
        </BodyText>
        {/* LINKS */}
        <Headline>LINKS</Headline>
        <ListItem>
          <li><a href="https://www.behance.net/cathydolle" target="_blank">Behance</a></li>
          <li><a href="https://dribbble.com/CathyDolle" target="_blank">Dribbble</a></li>
          <li><a href="https://discord.com/users/169782332247506944" target="_blank">Discord</a></li>
          <li><a href="https://www.linkedin.com/in/cathy-dolle-245236199/" target="_blank">Linkedin</a></li>
          <li><a href="https://www.twitch.tv/katy_v4" target="_blank">Twitch</a></li>
        </ListItem>
      </TextSection>  
      {/* carroussel*/}
      <Carrousel/>
    </Wrapper>
  );
}

export default About;