import * as React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/Home';
import Login from './screens/Login';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './ui/theme';
import {Text} from './ui/Text';
import {Button} from './ui';
import {NewTask} from './screens/NewTask';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        {/* <Home /> */}
        <NewTask />
        {/* <Login /> */}
      </SafeAreaView>
    </ThemeProvider>
  );
};
