/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppContext} from './src/signals/AppContext';

AppRegistry.registerComponent(appName, () => AppContext);
