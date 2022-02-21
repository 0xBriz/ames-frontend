//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createTheme } from '@material-ui/core/styles';

const newTheme = createTheme({
  shadows: ['none'],

  palette: {
    type: 'light',
    text: {
      primary: '#000000',
      secondary: '#58d6a6',
      yellow: '#f9d749',
    },
    background: {
      default: '#140406',
      paper: '#FEFFEB',
    },
    primary: {
      light: '#ffe066',
      main: '#2c2560',
      dark: '#b38f00',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#fff',
    },
  },
  typography: {
    color: '#2c2560',
    fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
  },
});

newTheme.typography.h2 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '3rem',
  },
  [newTheme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export default newTheme;
