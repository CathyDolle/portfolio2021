import React from 'react';
import styled from '@emotion/styled';
import { BodyText } from '../../library/typography'

const FooterContent = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  width: 100%;
  height: 15%;
`;

function Footer() {
  return (
    <FooterContent>
      <BodyText>Cathy Dolle<br/>UI-UX DESIGNER<br/>FRONT END DEVELOPER</BodyText>
      <BodyText>2020 ALL RIGHT RESERVED</BodyText>
    </FooterContent>
  );
}

export default Footer;