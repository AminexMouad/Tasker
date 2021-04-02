import React from 'react';
import {SafeAreaView} from 'react-native';
import {Tasks} from './Tasks';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tasks />
    </SafeAreaView>
  );
};

export default Home;
