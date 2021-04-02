import React from 'react';
import {Text, View} from '../../ui';

export const Header = () => {
  return (
    <View flexDirection="row" justifyContent="space-between" p="s">
      <Text color="primary">Cancel</Text>
      <Text variant="subheader" color="primary">
        Done
      </Text>
    </View>
  );
};
