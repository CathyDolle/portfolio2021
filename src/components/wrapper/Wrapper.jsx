import React from 'react'
import styled from '@emotion/styled';
import Background from '../Background'
import Footer from './Footer';
import Header from './Header';
import Content from './Content';

const getWrapperPadding = ({ theme }) => theme.padding.wrapperPadding;

const Container = styled.section`
  position: relative;
  box-sizing: border-box; 
  width: 100%;
  height: 100vh;
  padding: 0 ${getWrapperPadding} 0 ${getWrapperPadding};
`;

const Wrapper = ({ children }) => {
  return (
    <Container>
      <Background />
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </Container>
  )
}

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper
