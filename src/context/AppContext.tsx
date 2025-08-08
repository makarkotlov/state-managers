import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {LeftTabNewContextProvider} from './stores/LeftTabContext';
import {RightTabNewContextProvider} from './stores/RightTabContext';
import {BottomTabs} from './navigation/BottomTabs';

export const AppContext = () => {
  return (
    <NavigationContainer>
      <LeftTabNewContextProvider>
        <RightTabNewContextProvider>
          <BottomTabs />
        </RightTabNewContextProvider>
      </LeftTabNewContextProvider>
    </NavigationContainer>
  );
};
