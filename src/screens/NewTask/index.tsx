import React from 'react';
import {Dimensions} from 'react-native';
import {Input, Text, View} from '../../ui';
import {
  Alarm,
  AlarmSmall,
  Calendar,
  CalendarSmall,
  UnCheck,
} from '../../ui/icons';
import {Footer} from './Footer';
import {Header} from './Header';

export const NewTask = () => {
  return (
    <View flex={1}>
      <Header />
      <View flexDirection="row" alignItems="center" paddingHorizontal="m">
        <UnCheck />
        <View
          margin="s"
          justifyContent="center"
          width={Dimensions.get('window').width - 110}
          alignItems="flex-start">
          <Input
            style={{backgroundColor: 'transparent', marginTop: -15}}
            placeholder="What do you want to do ?"
          />
          <View flexDirection="row" style={{marginTop: -15}}>
            <View flexDirection="row" alignItems="center" marginHorizontal="s">
              <CalendarSmall style={{marginRight: 4}} />
              <Text variant="body" fontSize={12} fontWeight="600">
                Today
              </Text>
            </View>
            <View flexDirection="row" alignItems="center">
              <AlarmSmall style={{marginRight: 4}} />
              <Text variant="body" fontSize={12}>
                10:41 am
              </Text>
            </View>
          </View>
        </View>
        <View
          width={12}
          height={12}
          borderRadius={12}
          marginHorizontal="m"
          style={{backgroundColor: 'red'}}
        />
      </View>
      <Footer />
    </View>
  );
};
