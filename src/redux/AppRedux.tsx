import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BottomTabs} from './navigation/BottomTabs';
import {store} from './stores/store';

export const AppRedux = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottomTabs />
      </Provider>
    </NavigationContainer>
  );
};
