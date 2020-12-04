import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { getColor } from "./theme"
import { NavLink } from 'react-router-dom';

/******************************************************
FAMILY FONT
*******************************************************/
const SaolTypo = (props) => css`
  font-family: "Saol Display";
  color: ${props.theme.colors.fontColor};
`

const NeueTypo = (props) => css`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 400;
  color: ${props.theme.colors.fontColor};
  font-style: normal;
`

/******************************************************
GLOBAL TYPOGTAPHY
*******************************************************/

// Title
const Title = styled.h1`
  ${SaolTypo};
  font-size: 8rem;
  line-height: 11rem;
  margin: 0;
`

// BodyText
const BodyText = styled.p`
  ${NeueTypo};
  font-size: 1.2rem;
  line-height: 1.9rem;
  opacity: 0.8;
`

const Link = styled(NavLink)`
 ${NeueTypo};
  position: relative;
  font-size: 1.2rem;
  line-height: 1.9rem;
  opacity: 0.8;
  transition: color 0.5s;
  &::after{
    opacity: 0.8;
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    content:'';
    border-bottom: thin solid ${getColor('fontColor')};
    width: 100%;
    transform: scale3d(0, 1, 1);
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

// ListItem
const ListItem = styled(BodyText)`
  list-style: none;
  /* margin: 0; */
  padding: 0;
  a {
    text-decoration: underline;
    transition: color 0.5s;
    &:hover {
      color: ${getColor("mainColor")};
    }
  }
`



// InactiveBodyText
const InactiveBodyText = styled(BodyText)`
  color: ${getColor("inactiveColor")};
`

// H3
const SubTitle = styled.h2`
  ${SaolTypo};
  font-size: 3.2rem;
  color: ${getColor("mainColor")};
`

// H3 Headline
const Headline = styled.h3`
  ${NeueTypo};
  font-size: 1.6rem;
  margin: 1rem 0 -0.5rem 0;
  color: ${getColor("mainColor")};
`

/******************************************************
TYPOGRAPHY FOR MENU PAGE
*******************************************************/

// MenuLink
const MenuLink = styled.span`
  ${SaolTypo};
  position: relative;
  font-size: 8rem;
  margin-left: 3rem;
  margin-bottom: -2rem;
  &::after {
    ${NeueTypo};
    position: absolute;
    bottom: -2rem;
    right: 0;
    transform: translateX(50%);
    content: "${(props) => props.translation}";
    font-size: 3.5rem;
    color: ${getColor("mainColor")};
    opacity: ${({opacity}) => opacity ? '1' : '0'};
    transition: opacity 1s;
    font-weight: 500;
  }
  &:hover {
    &::after {
      opacity: 1;
    }
  }
`

// Menu Number Link
const MenuNumberLink = styled.span`
  ${SaolTypo};
  font-size: 3rem;
`

/******************************************************
TYPOGRAPHY FOR ARCHIVES
*******************************************************/

const ArchivesTitle = styled(MenuLink)`
  margin-top: -3rem;
  z-index: 1;
  pointer-events: none;
  &::after{
    opacity: 1;
  }
`;

/******************************************************
TYPOGRAPHY FOR ARCHIVES
*******************************************************/

const WorksTitle = styled(MenuLink)`
  z-index: 1;
  &::after{
    opacity: 1;
  }
`;

export {
  Title,
  MenuNumberLink,
  BodyText,
  MenuLink,
  Headline,
  SubTitle,
  InactiveBodyText,
  ListItem,
  ArchivesTitle,
  WorksTitle,
  Link
}
