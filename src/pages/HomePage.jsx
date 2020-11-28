import React from 'react'
import styled from '@emotion/styled';
import { SubTitle } from './../library/typography';
import Wrapper from '../components/wrapper/Wrapper'
import Arkestar from './../assets/img/works/arkestar.png'


//TYPOGRAPHY

// DOLLE
const LastName = styled.h1`
  font-family: 'neue-haas-grotesk-display';
  font-weight: 500;
  font-style: normal;
  font-size: 11.8rem;
  margin: 0 2rem 0 -0.5rem;
  color: ${props => props.theme.colors.fontColor};
`;

// Cathy
const FirstName = styled.h1`
  font-family: 'Saol Display';
  margin: 0 0 -2.8rem 0;
  font-size: 11.8rem;
  color: ${props => props.theme.colors.fontColor};
`;

// UI UX
const Skill = styled.h3`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 400;
  margin: -1rem 2rem 0 0;
  font-style: normal;
  font-size: 4rem;
  color: ${props => props.theme.colors.fontColor};
`;

// DEV
const Skill2 = styled.h3`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 400;
  margin-top: 0.4rem;
  font-style: normal;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.fontColor};
`;

// JAPANESE CHAR 
const JapaneseText = styled.span`
  font-family: neue-haas-grotesk-text, sans-serif;
  color: ${props => props.theme.colors.mainColor};
  font-size: 10rem;
  margin: -4rem 0 0 3.0rem;
  font-weight: 600;
`;

// SECTIONS

// TEXT CONTENT
const TextContent = styled.section`
  flex: 3;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;


// TEXT NAME
const TextName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

// Description (Skills)
const DescriptionContent = styled.div`
  display: flex;
`

// Description section
const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
`

// SKILL Section
const TextDescriptionSkill = styled.div`
  position: relative;
  display: flex;
`;


//IMG

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img{
    height: 70%;
  }
`;


function HomePage() {
  return (
    <Wrapper>
      <TextContent>
        <TextName>
          <LastName>DOLLE</LastName>
          <FirstName>Cathy</FirstName>
        </TextName>
        <DescriptionContent>
          <TextDescription>
            <TextDescriptionSkill>
              <Skill>UI/UX</Skill>
              <SubTitle>Designer</SubTitle>
            </TextDescriptionSkill>
            <Skill2>{"&"} Front End Developer/{">"}</Skill2>
          </TextDescription>
          <JapaneseText>カティ</JapaneseText>
        </DescriptionContent>
      </TextContent>
      <ImgContainer>
        <img src={Arkestar} alt="arkestar"/>
      </ImgContainer>
    </Wrapper >
  )
}

export default HomePage

