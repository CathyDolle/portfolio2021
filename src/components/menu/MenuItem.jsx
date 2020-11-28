import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";
import { MenuLink, SubTitle } from "../../library/typography";


const MenuLinkContent = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;


function MenuItem({number, linkName, to, className, translation}) {
  return (
    <MenuLinkContent to={to} className={className}>
      <SubTitle>{number}</SubTitle>
      <MenuLink translation={translation}>{linkName}</MenuLink>
    </MenuLinkContent>
  );
}

export default MenuItem;