import React, {useState} from 'react';
import {FlatList, StyleSheet, Pressable} from 'react-native';
import {Header} from './Header';
import {Check, UnCheck, Plus} from '../../ui/icons/index';
import {Text, View} from '../../ui';

type TaskType = {
  label: string;
  done: boolean;
  color: string;
};

const data = [
  {label: 'Start making a presentation', done: true, color: '#EBEFF5'},
  {label: 'Pay for rent', done: false, color: '#61DEA4'},
  {label: 'Buy a milk', done: false, color: '#F45E6D'},
  {
    label: 'Don’t forget to pick up Mickael from school',
    done: true,
    color: '#FFE761',
  },
  {label: 'Buy a chocolate for Charlotte', done: false, color: '#B678FF'},
  {label: 'Buy a chocolate for Charlotte', done: false, color: '#B678FF'},
  {label: 'Buy a chocolate for Charlotte', done: false, color: '#B678FF'},
];

const TaskItem = ({label, done: d, color}: TaskType) => {
  const [done, setDone] = useState(d);

  return (
    <Pressable onPress={() => setDone(!done)}>
      <View flexDirection="row" alignItems="center">
        {done ? <Check style={styles.done} /> : <UnCheck style={styles.done} />}
        <View
          flex={1}
          paddingVertical="l"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderBottomColor="grey"
          opacity={done ? 0.3 : 1}>
          <Text variant="subheader">{label}</Text>
          <View
            width={12}
            height={12}
            borderRadius={12}
            marginHorizontal="m"
            style={{backgroundColor: color}}
          />
        </View>
      </View>
    </Pressable>
  );
};

export const Tasks = () => {
  return (
    <View flex={1}>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={data}
        renderItem={({item}) => <TaskItem {...item} />}
        keyExtractor={(_, index) => `item-${index}`}
        showsVerticalScrollIndicator={false}
      />
      <View
        position="absolute"
        bottom={15}
        right={15}
        justifyContent="center"
        alignItems="center"
        padding="m"
        backgroundColor="white"
        borderRadius={50}
        shadowColor="black"
        shadowOffset={{width: 0, height: 7}}
        shadowOpacity={0.43}
        shadowRadius={9.51}
        elevation={15}>
        <Pressable>
          <Plus />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  done: {
    height: 28,
    width: 28,
    borderWidth: 2,
    borderColor: '#DADADA',
    borderRadius: 50,
    marginHorizontal: 16,
  },
});
