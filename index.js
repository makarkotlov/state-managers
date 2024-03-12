/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {AppMobx} from './src/mobx/AppMobx';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppMobx);
