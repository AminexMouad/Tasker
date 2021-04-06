import React from 'react';
import {FieldError} from 'react-hook-form';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import {Text} from './Text';
import {View} from './View';

interface Props extends TextInputProps {
  name?: string;
  disabled?: boolean;
  label?: string;
  error?: FieldError | undefined;
}

export const Input = ({placeholder, error, ...props}: Props) => {
  return (
    <View marginBottom="s">
      <TextInput
        style={[styles.container, error ? styles.errors : {}]}
        {...props}
        placeholder={placeholder}
        placeholderTextColor="#A7B4C7"
      />
      {error && <Text color="red">{error?.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F3F7',

    padding: 18,
    borderRadius: 8,
  },
  errors: {
    borderWidth: 1,
    borderColor: 'red',
  },
});
