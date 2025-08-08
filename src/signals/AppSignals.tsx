import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {BottomTabs} from './navigation/BottomTabs';

export const AppSignals = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
