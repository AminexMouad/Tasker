import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View} from '../../ui';
import {Plus} from '../../ui/icons';

type Props = {
  onPress?: () => void;
};

export const AddTaskButton = ({onPress}: Props) => {
  return (
    <View
      position="absolute"
      bottom={15}
      right={15}
      justifyContent="center"
      alignItems="center"
      // padding="m"
      backgroundColor="white"
      borderRadius={50}
      shadowColor="black"
      shadowOffset={{width: 0, height: 7}}
      shadowOpacity={0.43}
      shadowRadius={9.51}
      elevation={15}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Plus />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    borderRadius: 50,
  },
});
