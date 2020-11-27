import { useState } from 'react';
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
  z-index: -2;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.bgColor};
`;

function App() {
  const [dark, setDark] = useState(true);

  return (
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <FullBackground>
          <Global styles={fontFace} />
          <Global styles={globalStyles} />
          {/* <button type="button" onClick={() => setDark(!dark)}>Switch theme</button> */}
          <Router/>
        </FullBackground>
      </ThemeProvider>
  );
}

export default App;
