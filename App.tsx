import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {LeftTabContextProvider} from './src/context/LeftTabContext';
import {RightTabContextProvider} from './src/context/RightTabContext';
import {BottomTabs} from './src/navigation/BottomTabs';

export const App = () => {
  return (
    <NavigationContainer>
      <LeftTabContextProvider>
        <RightTabContextProvider>
          <BottomTabs />
        </RightTabContextProvider>
      </LeftTabContextProvider>
    </NavigationContainer>
  );
};
