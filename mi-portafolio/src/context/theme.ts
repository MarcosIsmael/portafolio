import { createTheme } from '@mui/material';
export const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat-Regular',
    h1: {
      fontSize: '60px',
      fontWeight: 'inherit',
    },
  },
  palette: {
    primary: {
      main: '#d1d1d1',
      contrastText: 'red',
      dark: 'yellow',
    },
    secondary: {
      main: '#ffd700',
      dark: '#87d2eb',
    },

    background: { default: '1d1d20' },
  },
});
