import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {BottomTabs} from './navigation/BottomTabs';

export const AppMobx = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
