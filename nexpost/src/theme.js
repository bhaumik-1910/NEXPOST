import { createTheme } from '@mui/material/styles';
import palette from './MUI/palette';
import typography from './MUI/typography';
import components from './MUI/components';

export const theme = createTheme({
  palette,
  typography,
  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  mixins: {
    toolbar: {
      minHeight: 64,
      '@media (max-width:600px)': {
        minHeight: 56,
      },
    },
  },
});