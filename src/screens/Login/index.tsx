import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Button, Input, Text, View} from '../../ui';

type FormData = {
  email: string;
  password: string;
};

const validation = {
  email: {
    required: {value: true, message: 'Email is required'},
    pattern: {
      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid Email Format',
    },
  },
  password: {
    required: {value: true, message: 'Password is required'},
  },
};

const Login = () => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    register('email', validation.email);
    register('password', validation.password);
  }, [register]);

  return (
    <View flex={1} justifyContent="center" padding="m">
      <Text variant="header" textAlign="center" marginHorizontal="m">
        Sign In
      </Text>
      <View marginVertical="xl">
        <Input
          placeholder="Email"
          onChangeText={email => setValue('email', email)}
          error={errors.email}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={password => setValue('password', password)}
          error={errors.password}
        />
        <Text color="grey" textAlign="right" fontSize={15}>
          FORGOT?
        </Text>
      </View>
      <Button
        label="Login"
        variant="primary"
        onPress={handleSubmit(onSubmit)}
      />
      <Button label="Sign in" variant="outline" />
    </View>
  );
};

export default Login;
