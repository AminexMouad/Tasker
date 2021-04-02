import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Pressable} from 'react-native';
import {Header} from './Header';
import {Check, UnCheck, Plus} from '../../ui/icons/index';

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

const TaskItem = ({label, done: d, color}) => {
  const [done, setDone] = useState(d);

  return (
    <Pressable onPress={() => setDone(!done)}>
      <View style={styles.item}>
        {done ? <Check style={styles.done} /> : <UnCheck style={styles.done} />}
        <View style={[styles.itemContent, {opacity: done ? 0.3 : 1}]}>
          <Text style={styles.label}>{label}</Text>
          <View style={[styles.circle, {backgroundColor: color}]} />
        </View>
      </View>
    </Pressable>
  );
};

export const Tasks = () => {
  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={data}
        renderItem={({item}) => <TaskItem {...item} />}
        keyExtractor={(_, index) => `item-${index}`}
        showsVerticalScrollIndicator={false}
      />
      <Pressable style={styles.icon}>
        <Plus />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 24,
    alignItems: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  label: {
    fontWeight: '700',
    fontSize: 16,
    fontFamily: 'Inter',
    color: '#252A31',
    flex: 1,
  },
  done: {
    height: 28,
    width: 28,
    borderWidth: 2,
    borderColor: '#DADADA',
    borderRadius: 50,
    marginHorizontal: 16,
  },
  circle: {
    width: 12,
    height: 12,
    borderRadius: 12,
    marginHorizontal: 16,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 15,
    bottom: 44,
    padding: 15,
    backgroundColor: '#fff',

    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
});
