import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {Provider} from 'react-redux';
import {BottomTabs} from './src/navigation/BottomTabs';
import {store} from './src/redux/store';

export const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottomTabs />
      </Provider>
    </NavigationContainer>
  );
};
