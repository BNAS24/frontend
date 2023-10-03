import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#F26101',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: '400px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'white',
        },
      },
    },
  },
});

export default customTheme;
