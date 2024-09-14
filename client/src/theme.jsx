import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // You can customize your colors here
    },
    secondary: {
      main: '#dc004e',
    },
  },
  spacing: 8, // default spacing
  typography: {
    // Add typography or other customizations
  },
});

export default theme;