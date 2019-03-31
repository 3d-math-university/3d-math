/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
/*import {AppRegistry} from 'react-native';*/
import AppNavigator from './src/app.js';//////
/*import {name as appName} from './app.json';*/

export default class App extends React.Component {
  render() {
    return <AppNavigator/>;
  }
}