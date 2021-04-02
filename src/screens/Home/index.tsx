import React from 'react';
import {SafeAreaView} from 'react-native';
import {AddTaskButton} from './AddTaskButton';
import {Tasks} from './Tasks';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tasks />
      <AddTaskButton />
    </SafeAreaView>
  );
};

export default Home;
