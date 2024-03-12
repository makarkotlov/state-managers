import React from 'react';
import {ScrollView} from 'react-native';

import {NewItem} from '../components/NewItem';
import {NewItem2} from '../components/NewItem2';
import {NewItem3} from '../components/NewItem3';
import {NewItem4} from '../components/NewItem4';
import {NewItem6} from '../components/NewItem6';

export const LeftTabNew = () => (
  <ScrollView>
    <NewItem />
    <NewItem2 />
    <NewItem3 />
    <NewItem4 />
    <NewItem6 />
  </ScrollView>
);
