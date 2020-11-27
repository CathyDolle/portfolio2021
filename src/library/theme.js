const lightColors = {
  fontColor: 'black',
  bgColor: 'white',
  mainColor: '#ef4234',
  lineColor: '#171717',
}

const darkColors = {
  fontColor: 'white',
  mainColor: '#ef4234',
  bgColor: 'black',
  lineColor: '#171717',
}

const margins = {

}

const padding = {
  wrapperPadding: '150px',
}

const sizes = {
  threeColumns: 'calc(100% / 4 * 3)',
  oneColumn: 'calc(100% / 4)',
  twoColumns: 'calc(100% / 2)',
  fourColumns: '100%',
}

const lightTheme = {
  colors: lightColors,
  margins: margins,
  padding: padding,
  sizes: sizes,
}

const darkTheme = {
  colors: darkColors,
  margins: margins,
  padding: padding,
  sizes: sizes,
}
  
export { lightTheme, darkTheme };