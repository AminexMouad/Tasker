import React from 'react';
import {View, Text, StyleSheet, PixelRatio} from 'react-native';
import {Button, Input} from '../ui/index';
const Login = () => {
  console.log(32 / PixelRatio.getFontScale());
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 34,
    },
    title: {
      marginHorizontal: 76,
      textAlign: 'center',
      fontSize: 32 / PixelRatio.getFontScale(),
      fontWeight: '700',
      fontFamily: 'Inter',
    },
    form: {
      marginVertical: 30,
    },
    forgot: {
      color: '#BFC8D6',
      textTransform: 'uppercase',
      fontSize: 12,
      textAlign: 'right',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <View style={styles.form}>
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Text style={styles.forgot}>Forgot?</Text>
      </View>
      <Button label="Sign in" />
      <Button label="Create account" variant="outline" />
    </View>
  );
};

export default Login;
