import React from 'react'
import Wrapper from '../components/wrapper/Wrapper';
import styled from '@emotion/styled';
import MenuItem from '../components/menu/MenuItem';
import CustomSection from '../components/menu/CustomSection'

const MenuSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  height: 100%;
`;

const MenuAbout = styled(MenuItem)`
  align-self: center;
`;

function Menu() {
  return (
    <Wrapper>
      <MenuSection>
        <CustomSection/>
        <MenuItem to="/" number="01" linkName="Home" translation="ホーム"></MenuItem>
      </MenuSection>
      <MenuSection>
        <MenuItem to="/" number="02" linkName="Works" translation="プロジェクト"></MenuItem>
        <MenuAbout to="/" number="03" linkName="About" translation="情報"></MenuAbout>
        <MenuItem to="/" number="04" linkName="Archives" translation="アーカイブ"></MenuItem>
      </MenuSection>
    </Wrapper>
  )
}

export default Menu
