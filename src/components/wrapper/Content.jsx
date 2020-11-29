import React from 'react';
import styled from '@emotion/styled';

const ContainerContent = styled.section`
  display: flex;
  width: 100%;
  height: 70%;
  padding: 2% 0;
`;

const Content = ({children}) => {
    return (
        <ContainerContent>
           {children}
        </ContainerContent>
    );
}

Content.defaultProps = {
    children: null,
};


export default Content;