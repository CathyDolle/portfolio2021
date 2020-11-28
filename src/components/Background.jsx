import React from 'react'
import styled from '@emotion/styled';

const getWrapperPadding = ({ theme }) => theme.padding.wrapperPadding;

const Content = styled.section`
  position: absolute;
  z-index: -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100% - (${getWrapperPadding} * 2));
  height: 100%;
  left: ${getWrapperPadding};
`;

const Line = styled.section`
  width: 0.5px;
  height: 100%;
  background: ${props => props.theme.colors.lineColor};
`;


function Background() {
  return (
    <Content>
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
    </Content>
  )
}

export default Background
