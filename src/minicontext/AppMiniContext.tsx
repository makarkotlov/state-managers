import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {BottomTabs} from './navigation/BottomTabs';
import {LeftTabMaxContextProvider} from './stores/LeftTabMaxContext';
import {LeftTabMiniContextProvider} from './stores/LeftTabMiniContext';
import {LeftTabMiniContext2Provider} from './stores/LeftTabMiniContext2';
import {LeftTabMiniContext3Provider} from './stores/LeftTabMiniContext3';
import {LeftTabMiniContext4Provider} from './stores/LeftTabMiniContext4';

export const AppMiniContext = () => (
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
