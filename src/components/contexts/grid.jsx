import React, { createContext, useState } from 'react';

export const gridContext = createContext();


const ThemeProvider = ({ children }) => {
  const [grid, setGrid] = useState(true);

  return (
    <gridContext.Provider value={{ grid, setGrid }} >
      {children}
    </gridContext.Provider>
  );
};

export default ThemeProvider;