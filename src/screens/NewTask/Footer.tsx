import React, {useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from '../../ui';
import {Alarm, Calendar} from '../../ui/icons';
import {Categories} from '../Home/Categories';
import {CalendarX} from './Calendar';
import DateTimePicker from '@react-native-community/datetimepicker';

export const Footer = () => {
  const [calendarClicked, setCalendarClicked] = useState(false);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [date, setDate] = useState(new Date(1598051730000));
  const [alarmClicked, setAlarmClicked] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    console.log(currentDate);

    setAlarmClicked(false);
  };

  return (
    <View position="absolute" bottom={'0%'} width="100%">
      <View
        flex={1}
        borderTopWidth={1}
        borderTopColor="grey"
        height={60}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        p="m">
        <View flexDirection="row">
          <TouchableOpacity
            onPress={() => {
              setAlarmClicked(false);
              setCategoryClicked(false);
              setCalendarClicked(!calendarClicked);
            }}>
            <Calendar />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCalendarClicked(false);
              setCategoryClicked(false);
              setAlarmClicked(true);
            }}>
            <Alarm style={{marginHorizontal: 16}} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => {
            setAlarmClicked(false);
            setCalendarClicked(false);
            setCategoryClicked(!categoryClicked);
          }}>
          <Text color="grey">Inbox</Text>
          <View
            width={12}
            height={12}
            borderRadius={12}
            marginHorizontal="s"
            backgroundColor="grey"
          />
        </TouchableOpacity>
      </View>
      {calendarClicked && <CalendarX />}
      {categoryClicked && <Categories />}
      {alarmClicked && (
        <DateTimePicker
          mode="time"
          onChange={onChange}
          value={date}
          display="default"
        />
      )}
    </View>
  );
};
