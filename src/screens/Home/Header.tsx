import React from 'react';
import {Text, View} from '../../ui';
import {Categories} from './Categories';

export const Header = () => {
  return (
    <View>
      <Text variant="header" margin="l">
        Today
      </Text>
      <Categories />
    </View>
  );
};
