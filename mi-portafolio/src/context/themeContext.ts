import { FC, ReactNode, createContext, useState } from 'react';
import { theme } from './theme';
import { createTheme } from '@mui/material';
export const ThemeContext = createContext({});
interface ThemeContextProps {
  children: ReactNode | ReactNode[];
}
export const ThemeContextProvider: FC<ThemeContextProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const newTheme = createTheme(currentTheme);
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
