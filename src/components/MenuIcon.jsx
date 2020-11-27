import React from 'react'
import styled from '@emotion/styled';

const MenuIconBar = styled.div`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.colors.fontColor};
`;

const MenuIconContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
`;

const MenuIconLittleBar = styled.div`
  width: 50%;
  height: 2px;
  background: ${props => props.theme.colors.fontColor};
`;

function MenuIcon() {
    return (
        <MenuIconContainer>
          <MenuIconBar/>
          <MenuIconBar/>
          <MenuIconLittleBar/>
        </MenuIconContainer>
    )
}

export default MenuIcon
