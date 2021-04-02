import React from 'react';
import {Text, View} from '../../ui';
import {Alarm, Calendar} from '../../ui/icons';
import {CalendarX} from './Calendar';

export const Footer = () => {
  return (
    <View
      position="absolute"
      bottom={0}
      borderTopWidth={1}
      borderTopColor="grey"
      flex={1}
      height={60}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      p="m">
      <View flexDirection="row">
        <Calendar fill="#006CFF" />
        <Alarm style={{marginHorizontal: 16}} />
      </View>
      <View flexDirection="row" alignItems="center">
        <Text color="grey">Inbox</Text>
        <View
          width={12}
          height={12}
          borderRadius={12}
          marginHorizontal="s"
          backgroundColor="grey"
        />
      </View>
    </View>
  );
};
