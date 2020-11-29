import React from 'react'
import styled from '@emotion/styled';
import Background from '../Background'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const getWrapperPadding = ({ theme }) => theme.padding.wrapperPadding;

const Container = styled.section`
  position: relative;
  box-sizing: border-box; 
  width: 100%;
  height: 100vh;
  padding: 0 ${getWrapperPadding} 0 ${getWrapperPadding};
`;

const Wrapper = ({ children, withFooter }) => {
  return (
    <Container>
      <Background />
      <Header/>
      <Content>
        {children}
      </Content>
      {withFooter && <Footer />}
    </Container>
  )
}

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper
