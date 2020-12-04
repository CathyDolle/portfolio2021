import React from 'react';
import styled from '@emotion/styled'
import Wrapper from '../components/wrapper/Wrapper'
import { ArchivesTitle } from '../library/typography'
import ArchivesCarrousel from '../components/archives/ArchivesCarrousel'


const ArchivesContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


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