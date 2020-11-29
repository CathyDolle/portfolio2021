import React, { createContext, useState } from 'react';

export const themeContext = createContext();


const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  return (
    <themeContext.Provider value={{ dark, setDark }} >
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;