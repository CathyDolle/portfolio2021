const lightColors = {
  fontColor: 'black',
  bgColor: 'white',
  mainColor: '#7355fa',
  inactiveColor: '#CCCCCC',
}

const darkColors = {
  fontColor: 'white',
  mainColor: '#7355fa',
  bgColor: 'black',
  inactiveColor: '#171717',
}

export const getColor = color => ({ theme }) => theme.colors[color];

const margins = {

}

const padding = {
  wrapperPadding: '150px',
}

export const getWrapperPadding = ({ theme }) => theme.padding.wrapperPadding;

const lightTheme = {
  colors: lightColors,
  margins: margins,
  padding: padding,
}

const darkTheme = {
  colors: darkColors,
  margins: margins,
  padding: padding,
}
  
export { lightTheme, darkTheme };