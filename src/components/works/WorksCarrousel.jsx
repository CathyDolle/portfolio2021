import React from 'react';
import styled from '@emotion/styled'
import { getColor } from "../../library/theme"
import coinyImg from '../../assets/img/works/coiny.jpg'

const WorksCarrouselContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 2;
  img{
    width: calc(100% - 6px);
    height: 70%;
  }
`;

const BulletContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 4px;
  height: 70%;
  justify-content: space-between;
`;

const Bullet = styled.div`
  cursor: pointer;
  width: 100%;
  height: calc((100% / 4) - 5px);
  background: ${getColor('mainColor')};
  opacity: ${({ active }) => active ? '1' : '0.4'};
  transition: opacity 0.6s;
  &:hover{
    opacity: 1;
  }
`;

const ImgContainer = styled.div`
  height: 70%;
  width: calc(100% - 8px);
  background-image: url(${coinyImg});
  background-size: cover;
  background-position: center;
`;

function WorksCarrousel() {
  return (
    <WorksCarrouselContainer>
      <ImgContainer/>
      <BulletContainer>
        <Bullet active/>
        <Bullet/>
        <Bullet/>
        <Bullet/>
      </BulletContainer>
    </WorksCarrouselContainer>
  );
}

export default WorksCarrousel;