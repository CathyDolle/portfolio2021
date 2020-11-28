import React, { useContext } from 'react'
import styled from '@emotion/styled';
import { gridContext } from "../components/contexts/grid"

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
  transform: ${({ active }) => active ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)'};
  transition: transform 2s;
  transform-origin: top;
`;


function Background() {
  const { grid } = useContext(gridContext);

  return (
    <Content>
      <Line active={grid}/>
      <Line active={grid}/>
      <Line active={grid}/>
      <Line active={grid}/>
      <Line active={grid}/>
    </Content>
  )
}

export default Background
