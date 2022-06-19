import type {} from '@mui/lab/themeAugmentation';
import type { Shadows } from '@mui/material/styles/shadows';
import { createTheme } from '@mui/material/styles';
import { theme } from './theme';

export const muiTheme = createTheme({
  spacing: parseInt(theme.space[1]),
  typography: {
    fontFamily: theme.fontFamily.primary,
  },
  palette: {
    primary: {
      main: theme.color.black,
    },
    secondary: {
      main: theme.color.accent,
    },
    error: {
      main: theme.color.danger,
    },
  },
  shape: {
    borderRadius: theme.borderRadius.base,
  },
  shadows: new Array(25).fill('none') as Shadows,
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: 'contained',
      },
    },
    MuiPagination: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
});
