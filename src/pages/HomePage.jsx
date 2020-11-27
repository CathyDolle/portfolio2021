import React from 'react'
import styled from '@emotion/styled';
import { SubTitle } from './../library/typography';
import Wrapper from './../components/Wrapper'
import Arkestar from './../assets/img/works/arkestar.png'


//TYPO

// DOLLE
const LastName = styled.h1`
  font-family: 'neue-haas-grotesk-display';
  font-weight: 500;
  font-style: normal;
  font-size: 11.8rem;
  margin: 0 20px 0 -5px;
  color: ${props => props.theme.colors.fontColor};
`;

// Cathy
const FirstName = styled.h1`
  font-family: 'Saol Display';
  margin: 0 0 6px 0;
  font-size: 11.8rem;
  color: ${props => props.theme.colors.fontColor};
`;

const Skill = styled.h3`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 400;
  margin: -10px 20px 0 0;
  font-style: normal;
  font-size: 4rem;
  color: ${props => props.theme.colors.fontColor};
`;

const Skill2 = styled.h3`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 400;
  margin-top: 4px;
  font-style: normal;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.fontColor};
`;

//Setions

const TextContent = styled.section`
  width: ${props => props.theme.sizes.threeColumns};
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const TextName = styled.div`
  display: flex;
  align-items: center;
`;

const DescriptionContent = styled.div`
  display: flex;
`

const TextDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const TextDescriptionSkill = styled.div`
  position: relative;
  display: flex;
`;

const JapaneseText = styled.span`
  color: ${props => props.theme.colors.mainColor};
  font-size: 10rem;
  margin: -45px 0 0 30px;
  font-weight: 600;
`;

//IMG

const ImgContainer = styled.div`
  width: ${props => props.theme.sizes.oneColumn};
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

