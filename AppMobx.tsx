import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {BottomTabs} from './src/navigation/BottomTabs';

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
