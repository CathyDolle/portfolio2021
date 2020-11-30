import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import ArchivesSrc  from './archivesSrc'
import { getWrapperPadding } from '../../library/theme';

// Animations
const carrouselAnimation = keyframes`
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(0, -50%, 0);
  }
`;

const ArchivesContainer = styled.section`
  position: absolute;
  overflow-y: hidden;
  top: 0;
  left: ${getWrapperPadding};
  width: calc(100% - (${getWrapperPadding} * 2));
  height: 100vh;
  /* background: red; */
  a{
    cursor: pointer;
    width: calc(100% / 5);
    margin: 50px;
    img{
      width: 100%;
      opacity: 0.3;
      transition: opacity 0.5s;
      &:hover{
      opacity: 1;
    }
    }
  }
`;

const HidingParent = styled.div`
  position: relative;
`;

const ArchivesItem = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  animation: ${carrouselAnimation} 30s linear infinite;
`;

function carrousel() {
  return (
    <ArchivesContainer>
      <HidingParent>
        <ArchivesItem>
          <ArchivesSrc/>
          <ArchivesSrc/>
        </ArchivesItem>
      </HidingParent>
    </ArchivesContainer>
  );
}

export default carrousel;