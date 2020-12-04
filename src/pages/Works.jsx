import React from 'react';
import Wrapper from '../components/wrapper/Wrapper';
import styled from '@emotion/styled';
import { Headline, Link, ListItem } from '../library/typography'
import MenuItem from '../components/menu/MenuItem';
import WorksCarrousel from '../components/works/WorksCarrousel'
import arrow from '../assets/img/right-arrow.svg';
import { getColor } from '../library/theme'

const TextContainer = styled.section`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 70%;
  width: 100%;
`;

const RolesContainer = styled.section`
  position: absolute;
  top: -1rem;
  left: 0;
`;

const LinkContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  right: 60px;
  img{
    width: 14px;
    margin-left: 10px;
  }
`;

const ScrollContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: flex-end;
`;

const Line = styled.div`
  height: 200px;
  width: 1px;
  background: ${getColor("fontColor")};
  margin-top: 5px;
`;

const RotateLink = styled(Link)`
  bottom: 240px;
  position: absolute;
  transform: rotate(-90deg);
  width: 69px;
`;

function Works() {
  return (
    <Wrapper>
      <TextContainer>
        <Content>
          <RolesContainer>
            <Headline>Roles</Headline>
            <ListItem>
              <li>UI/UX Designer</li>
              <li>Front end developer</li>
            </ListItem>
          </RolesContainer>
          <MenuItem opacity to="/" number="01" translation='Test' linkName="Arkestar"/>
          <LinkContainer>
            <Link to="/">OPEN CASE STUDY</Link>
            <img src={arrow} alt="arrow"/>
          </LinkContainer>
        </Content>
      </TextContainer>
      <WorksCarrousel/>
      <ScrollContainer>
        <RotateLink to="/">Next project</RotateLink>
        <Line/>
      </ScrollContainer>
    </Wrapper>
  );
}

export default Works;