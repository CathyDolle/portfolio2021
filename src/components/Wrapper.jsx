import React from 'react'
import styled from '@emotion/styled';
import Logo from './Logo'
import Background from './Background'
import MenuIcon from './../components/MenuIcon'

const getWrapperPadding = ({ theme }) => theme.padding.wrapperPadding;

const Container = styled.section`
  position: relative;
  box-sizing: border-box; 
  width: 100%;
  height: 100vh;
  padding: 0 ${getWrapperPadding} 0 ${getWrapperPadding};
`;

const Header = styled.header`
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


const Content = styled.section`
  display: flex;
  width: 100%;
  height: 70%;
`;

const Footer = styled.section`
  width: 100%;
  height: 15%;
`;

const Wrapper = ({ children }) => {
  return (
    <Container>
      <Background />
      <Header>
        <LogoContain><Logo color="#ef4234" width="36px" /></LogoContain>
        <MenuIconContain><MenuIcon/></MenuIconContain>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer></Footer>
    </Container>
  )
}

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper
