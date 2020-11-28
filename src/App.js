import React, { useEffect, useState } from 'react';
import { Global, ThemeProvider, css } from '@emotion/react';
import styled from '@emotion/styled';
import { fontFace } from './library/fonts';
import HomePage from './pages/HomePage';
import { darkTheme, lightTheme } from './library/theme';
import Router from './components/Router'


const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%; 
  }
  `;
  
const FullBackground = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.bgColor};
`;

function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.body.style.background = darkTheme.colors.bgColor;
    } else {
      document.body.style.background = lightTheme.colors.bgColor;
    }
  }, [dark]);

  return (
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <Global styles={fontFace} />
        <Global styles={globalStyles} />
         {/*<button type="button" onClick={() => setDark(!dark)}>Switch theme</button>*/}
        <Router/>
      </ThemeProvider>
  );
}

export default App;
