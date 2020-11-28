import React from 'react'
import Wrapper from '../components/wrapper/Wrapper';
import styled from '@emotion/styled';

//LEFT SECTION

const MenuSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${props => props.theme.sizes.twoColumns};
    height: 100%;
    background: yellow;
`;


function Menu() {
  return (
    <Wrapper>
      <MenuSection>
      </MenuSection>
      <MenuSection></MenuSection>
    </Wrapper>
  )
}

export default Menu
