import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from './Stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#006CFF',
  },
};

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};
