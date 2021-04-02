import React from 'react';
import {Text, Pressable, View, StyleSheet} from 'react-native';

export const Button = ({label, onPress, variant = 'primary'}) => {
  const isPrimary = variant === 'primary';

  const containerStyle = isPrimary
    ? styles.container
    : {...styles.container, ...styles.outline};
  const labelStyle = isPrimary
    ? styles.label
    : {...styles.label, ...styles.label_outline};

  return (
    <Pressable onPress={onPress}>
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#006CFF',
    padding: 18,
    marginVertical: 6,
  },
  outline: {
    borderColor: '#006CFF',
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Inter',
  },
  label_outline: {
    color: '#006CFF',
  },
});
