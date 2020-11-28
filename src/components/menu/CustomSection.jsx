import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import { Headline } from '../../library/typography'
import { themeContext } from '../../components/contexts/theme';
import { gridContext } from '../../components/contexts/grid';

const CustomSectionContainer = styled.section`
  position: absolute;
  top: 11.5%;
  left: 0;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;

const CustomButton = styled.button`
  position: relative;
  cursor: pointer;
  background: none;
  color: white;
  font-size: 1.2rem;
  border: none;
  outline: none;
  text-align: left;
  text-transform: uppercase;
  &::after{
    opacity: 0.8;
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    content:'';
    border-bottom: thin solid ${(props) => props.theme.colors.fontColor};
    width: 100%;
    transform: ${({ active }) => active ? 'scale3d(1, 1, 1)' : 'scale3d(0, 1, 1)'};
    transition: transform 1s;
    transform-origin: left;
  }
  &:hover{
    &::after{
      width: 100%;
      transform: scale3d(1, 1, 1);
      transition: transform 1s;
    }
  }
`;

const ToggleSection = styled.div`
  margin-top: 1.2rem;
  display: flex;
  flex-direction: row;
  .slash {
    font-size: 1.2rem;
    color: white;
    margin: 0 0.5rem;
  }
`;

function CustomSection() {
  const { dark, setDark } = useContext(themeContext);
  const { grid, setGrid } = useContext(gridContext);
  

  return (
    <CustomSectionContainer>
      <Headline>CUSTOMIZE</Headline>
      <ToggleSection>
        <CustomButton active={dark} onClick={() => setDark(true)}>Dark Mode</CustomButton>
        <span className="slash">/</span>
        <CustomButton active={!dark} onClick={() => setDark(false)}>Light Mode</CustomButton>
      </ToggleSection>
      <ToggleSection>
        <CustomButton active={grid} onClick={() => setGrid(true)}>Grid</CustomButton>
        <span className="slash">/</span>
        <CustomButton active={!grid} onClick={() => setGrid(false)}>No Grid</CustomButton>
      </ToggleSection>
    </CustomSectionContainer>
  );
}

export default CustomSection;