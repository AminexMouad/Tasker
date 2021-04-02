import React from 'react';
import {Button, Input, Text, View} from '../../ui';

const Login = () => {
  return (
    <View flex={1} justifyContent="center" padding="m">
      <Text variant="header" textAlign="center" marginHorizontal="m">
        Sign In
      </Text>
      <View marginVertical="xl">
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry />
        <Text color="grey" textAlign="right" fontSize={15}>
          FORGOT?
        </Text>
      </View>
      <Button label="Login" variant="primary" />
      <Button label="Sign in" variant="outline" />
    </View>
  );
};

export default Login;
