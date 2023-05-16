import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {LeftTabMiniContextProvider} from './src/context/LeftTabMiniContext';
import {LeftTabMiniContext2Provider} from './src/context/LeftTabMiniContext2';
import {LeftTabMiniContext3Provider} from './src/context/LeftTabMiniContext3';
import {LeftTabMiniContext4Provider} from './src/context/LeftTabMiniContext4';
import {BottomTabs} from './src/navigation/BottomTabs';
import {LeftTabMaxContextProvider} from './src/context/LeftTabMaxContext';

export const App = () => {
  return (
    <NavigationContainer>
      <LeftTabMiniContextProvider>
        <LeftTabMiniContext2Provider>
          <LeftTabMiniContext3Provider>
            <LeftTabMiniContext4Provider>
              <LeftTabMaxContextProvider>
                <BottomTabs />
              </LeftTabMaxContextProvider>
            </LeftTabMiniContext4Provider>
          </LeftTabMiniContext3Provider>
        </LeftTabMiniContext2Provider>
      </LeftTabMiniContextProvider>
    </NavigationContainer>
  );
};
