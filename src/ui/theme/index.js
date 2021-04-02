import React from 'react';

import {
  ThemeProvider as ReThemeProvider,
  TextProps,
  BoxProps,
  createTheme,
} from '@shopify/restyle';

const BaseTheme = {
  colors: {
    text: '#252A31',
    background: 'white',
    primary: '#006CFF',
    // secondary: '#9c27b0',
    black: '#252A31',
    white: 'white',
    red: '#FF3E5C',
    transparent: 'transparent',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const theme = createTheme({
  ...BaseTheme,
  buttonVariants: {},
  textVariants: {
    defaults: {},
    header: {},
    subheader: {},
    body: {},
  },
});

export const ThemeProvider = ({children}) => {
  return <ReThemeProvider theme={theme}>{children}</ReThemeProvider>;
};
