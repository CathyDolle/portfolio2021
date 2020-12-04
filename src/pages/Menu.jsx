import React from 'react'
import Wrapper from '../components/wrapper/Wrapper';
import styled from '@emotion/styled';
import MenuItem from '../components/menu/MenuItem';
import CustomSection from '../components/menu/CustomSection';

const MenuSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => center ? 'center' : 'space-between'};
  flex-wrap: wrap;
  flex: 1;
  height: 100%;
`;

const MenuAbout = styled(MenuItem)`
  align-self: center;
`;


function Menu() {
  return (
    <Wrapper withFooter>
      <MenuSection center>
        <CustomSection/>
        <MenuItem to="/" number="01" linkName="Home" translation="ホーム"/>
      </MenuSection>
      <MenuSection>
        <MenuItem to="/Works" number="02" linkName="Works" translation="プロジェクト"/>
        <MenuAbout to="/About" number="03" linkName="About" translation="情報"/>
        <MenuItem to="/Archives" number="04" linkName="Archives" translation="アーカイブ"/>
      </MenuSection>
    </Wrapper>
  )
}

export default Menu
