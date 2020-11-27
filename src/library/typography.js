import styled from '@emotion/styled';

// Title
const Title = styled.h1`
  font-family: 'Saol Display';
  color: ${props => props.theme.colors.fontColor};
`;

// Subtitle
const SubTitle = styled.h2`
  font-family: 'Saol Display';
  font-size: 3rem;
  color: ${props => props.theme.colors.mainColor};
`;

// BodyText
const BodyText = styled.p`
  font-family: neue-haas-grotesk-text, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.8rem;
  color: ${props => props.theme.colors.fontColor};
`;


export { Title, SubTitle, BodyText, };