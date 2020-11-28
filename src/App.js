import React, { useEffect, useContext } from "react"
import { Global, ThemeProvider, css } from "@emotion/react"
import { fontFace } from "./library/fonts"
import { darkTheme, lightTheme } from "./library/theme"
import Router from "./components/Router"
import OurThemeProvider, { themeContext } from "./components/contexts/theme"
import OurGridProvider, { gridContext } from "./components/contexts/grid"

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

function App() {
  const { dark } = useContext(themeContext)

  useEffect(() => {
    if (dark) {
      document.body.style.background = darkTheme.colors.bgColor
    } else {
      document.body.style.background = lightTheme.colors.bgColor
    }
  }, [dark])

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Global styles={fontFace} />
      <Global styles={globalStyles} />
      <Router />
    </ThemeProvider>
  )
}

const WithContexts = () => (
  <OurThemeProvider>
    <OurGridProvider>
      <App />
    </OurGridProvider>
  </OurThemeProvider>
)


export default  WithContexts;

