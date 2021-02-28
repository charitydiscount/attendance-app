import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 960,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      light: '#525452',
      main: '#2A2B2A',
      dark: '#000000',
    },
    secondary: {
      light: '#8b7581',
      main: '#5E4955',
      dark: '#34212c',
    },
    text: {
      primary: '#3F3F3F',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
});
