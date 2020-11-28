import styled from "@emotion/styled"
import { css } from "@emotion/react"

// FAMiLY FONT
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

// Title
const Title = styled.h1`
  ${SaolTypo};
`

// Subtitle
const SubTitle = styled.span`
  ${SaolTypo};
  font-size: 3rem;
`

// BodyText
const BodyText = styled.p`
  ${NeueTypo};
  font-style: normal;
  font-size: 1.8rem;
`

// MenuLink
const MenuLink = styled.span`
  ${SaolTypo};
  position: relative;
  font-size: 8rem;
  margin-left: 3rem;
  margin-bottom: -20px;
  &::after {
    ${NeueTypo};
    position: absolute;
    bottom: -20%;
    right: 0;
    transform: translateX(50%);
    content: '${(props) => props.translation}';
    font-size: 3.5rem;
    color: ${(props) => props.theme.colors.mainColor};
    opacity: 0;
    transition: opacity 1s;
    font-weight: 500;
  }
  &:hover{
    &::after{
      opacity: 1;
    }
  }
`

export { Title, SubTitle, BodyText, MenuLink }
