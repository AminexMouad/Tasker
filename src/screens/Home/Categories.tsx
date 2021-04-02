import React from 'react';
import {FlatList} from 'react-native';
import {Text, View} from '../../ui';

type CategoryType = {
  label: string;
  total: number;
  color: string;
};

const data = [
  {label: 'inbox', total: 2, color: '#EBEFF5'},
  {label: 'work', total: 2, color: '#61DEA4'},
  {label: 'Shopping', total: 3, color: '#F45E6D'},
  {label: 'Family', total: 1, color: '#FFE761'},
  {label: 'Personal', total: 4, color: '#B678FF'},
];

const CategoryItem = ({label, total, color}: CategoryType) => {
  return (
    <View
      style={{backgroundColor: color}}
      padding="s"
      paddingRight="xl"
      margin="s"
      borderRadius={8}>
      <Text variant="subheader" color="text">
        {label}
      </Text>
      <Text variant="body" color="text">
        {total} task
      </Text>
    </View>
  );
};

export const Categories = () => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({item}) => <CategoryItem {...item} />}
      keyExtractor={(_, index) => `item-${index}`}
    />
  );
};
