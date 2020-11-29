import React from 'react';
import styled from '@emotion/styled';
import Logo from '../icons/Logo'
import MenuIcon from '../icons/MenuIcon'

const HeaderContent = styled.header`
position: relative;
width: 100%;
height: 15%;
display: flex;
justify-content: space-between;
align-items: center;
`;

const MenuIconContain = styled.div`
  position: absolute;
  right: -30px;
`;

const LogoContain = styled.div`
  position: absolute;
  left: -21px;
`;

function Footer() {
    return (
        <HeaderContent>
            <LogoContain><Logo color="#ef4234" width="36px" /></LogoContain>
            <MenuIconContain><MenuIcon/></MenuIconContain>
        </HeaderContent>
    );
}

export default Footer;