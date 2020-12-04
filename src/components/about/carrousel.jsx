import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ImgSrc  from './ImgSrc'

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
    width: 100%;
    opacity: 0.4;
    filter: grayscale(100%);
    transition: opacity 1s;
    &:hover{
      opacity: 1;
      filter: none;
    }
  }
`;

const HidingParent = styled.div`
  position: relative;
`;

const ImgItem = styled.div`
  animation: ${carrouselAnimation} 30s linear infinite;
`;

function carrousel() {
  return (
    <CarrouselContainer>
        <ImgContainer>
          <HidingParent>
            <ImgItem>
              <ImgSrc/>
              <ImgSrc/>
            </ImgItem>
          </HidingParent>
        </ImgContainer>
    </CarrouselContainer>
  );
}

export default carrousel;