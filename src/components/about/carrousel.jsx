import React from 'react';
import styled from '@emotion/styled';
import AnimeImg from '../../assets/img/about/animes.png'
import SetupImg from '../../assets/img/about/setup.png'
import LeagueImg from '../../assets/img/about/league.png'
import { keyframes } from '@emotion/react';

// Animations
const carrouselAnimation = keyframes`
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(0, -50%, 0);
  }
`;

const CarrouselContainer = styled.div`
  flex: 1;
  position: relative;
`;

const ImgContainer = styled.div`
  position: absolute;
  overflow: hidden;
  top: -30%;
  width: 100%;
  height: 100vh;
  img{
    /* height: calc(100vh / 3); */
    width: 100%;
  }
`;

const HidingParent = styled.div`
  position: relative;
`;

const ImgItem = styled.div`
  animation: ${carrouselAnimation} 15s linear infinite;
`;

function carrousel(props) {
  return (
    <CarrouselContainer>
        <ImgContainer>
          <HidingParent>
            <ImgItem>
              <img src={AnimeImg} alt="AnimeImg"/>
              <img src={SetupImg} alt="SetupImg"/>
              <img src={LeagueImg} alt="LeagueImg"/>
              <img src={AnimeImg} alt="AnimeImg"/>
              <img src={SetupImg} alt="SetupImg"/>
              <img src={LeagueImg} alt="LeagueImg"/>
            </ImgItem>
          </HidingParent>
        </ImgContainer>
    </CarrouselContainer>
  );
}

export default carrousel;