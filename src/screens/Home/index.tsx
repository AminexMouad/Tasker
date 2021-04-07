import React from 'react';
import {SafeAreaView} from 'react-native';
import {AddTaskButton} from './AddTaskButton';
import {Tasks} from './Tasks';

const Home = ({navigation}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tasks />
      <AddTaskButton onPress={() => navigation.navigate('newTask')} />
    </SafeAreaView>
  );
};

export default Home;
