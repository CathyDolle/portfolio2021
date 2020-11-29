import styled from "@emotion/styled"
import { css } from "@emotion/react"

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

// InactiveBodyText
const InactiveBodyText = styled(BodyText)`
  color: ${(props) => props.theme.colors.inactiveColor};
`

// H3
const SubTitle = styled.h2`
  ${SaolTypo};
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.mainColor};
`

// H3 Headline
const Headline = styled.h3`
  ${NeueTypo};
  font-size: 1.6rem;
  margin: 1rem 0 -0.5rem 0;
  color: ${(props) => props.theme.colors.mainColor};
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
    color: ${(props) => props.theme.colors.mainColor};
    opacity: 0;
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

export {
  Title,
  MenuNumberLink,
  BodyText,
  MenuLink,
  Headline,
  SubTitle,
  InactiveBodyText,
}
