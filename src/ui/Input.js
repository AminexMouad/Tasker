import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export const Input = ({style, ...props}) => {
  return (
    <TextInput
      style={[styles.container, style]}
      {...props}
      placeholderTextColor="#A7B4C7"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F7',
    marginVertical: 6,
    padding: 18,
    borderRadius: 8,
  },
});
