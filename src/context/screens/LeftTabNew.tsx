import React from 'react';
import {ScrollView} from 'react-native';
import {NewItem} from '../components/NewItem';
import {NewItem2} from '../components/NewItem2';

export const LeftTabNew = () => {
  return (
    <ScrollView>
      <NewItem />
      <NewItem2 />
    </ScrollView>
  );
};
