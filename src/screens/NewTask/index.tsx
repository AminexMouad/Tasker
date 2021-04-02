import React from 'react';
import {Input, View} from '../../ui';
import {UnCheck} from '../../ui/icons';
import {Footer} from './Footer';
import {Header} from './Header';

export const NewTask = () => {
  return (
    <View flex={1}>
      <Header />
      <View flexDirection="row" alignItems="center" paddingHorizontal="m">
        <UnCheck />
        <Input
          style={{flex: 1, backgroundColor: 'transparent'}}
          placeholder="What do you want to do ?"
        />
      </View>
      <Footer />
    </View>
  );
};
