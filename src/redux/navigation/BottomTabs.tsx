import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Screens} from './screens';
import {LeftTabNew} from '../screens/LeftTabNew';
import {RightTabNew} from '../screens/RightTabNew';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Screens.LeftTab} component={LeftTabNew} />
      <Tab.Screen name={Screens.RightTab} component={RightTabNew} />
    </Tab.Navigator>
  );
};
