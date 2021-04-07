import {ThemeProvider} from '@shopify/restyle';
import * as React from 'react';
import 'react-native-gesture-handler';
import APIProvider from './api/APIProvider';
import {RootNavigator} from './navigation';
import {theme} from './ui/theme';

export const App = () => {
  return (
    <APIProvider>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </APIProvider>
  );
};
