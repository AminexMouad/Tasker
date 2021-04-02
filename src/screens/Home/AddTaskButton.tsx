import React from 'react';
import {View} from '../../ui';
import {Plus} from '../../ui/icons';

export const AddTaskButton = () => {
  return (
    <View
      position="absolute"
      bottom={15}
      right={15}
      justifyContent="center"
      alignItems="center"
      padding="m"
      backgroundColor="white"
      borderRadius={50}
      shadowColor="black"
      shadowOffset={{width: 0, height: 7}}
      shadowOpacity={0.43}
      shadowRadius={9.51}
      elevation={15}>
      <Plus />
    </View>
  );
};
