import {ThemeProvider} from '@shopify/restyle';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {RootNavigator} from './navigation';
import {theme} from './ui/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
      {/* <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}></SafeAreaView> */}
    </ThemeProvider>
  );
};
