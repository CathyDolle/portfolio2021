import React from 'react';
import styled from '@emotion/styled'
import Wrapper from '../components/wrapper/Wrapper'
import { ArchivesTitle } from '../library/typography'
import ArchivesCarrousel from '../components/archives/archivesCarrousel'


const ArchivesContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const ArchivesCarrousel = styled.section`
//   position: absolute;
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   align-items: center;
//   top: 0;
//   left: ${getWrapperPadding};
//   width: calc(100% - (${getWrapperPadding} * 2));
//   height: 100vh;
//   animation: ${carrouselAnimation} 10s linear infinite;
//   img{
//     cursor: pointer;
//     margin: 50px;
//     opacity: 0.3;
//     width: calc(100% / 5);
//     height: auto;
//     transition: opacity 0.5s;
//     &:hover{
//       opacity: 1;
//     }
//   }
// `;



function Archives() {
  return (
    <Wrapper>
      <ArchivesContainer>
        <ArchivesTitle translation="アーカイブ">
          Archives
        </ArchivesTitle>
      </ArchivesContainer>
      <ArchivesCarrousel/>
    </Wrapper>
  );
}

export default Archives;