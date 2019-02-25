import React from 'react';
import { createAppContainer, createStackNavigator, } from 'react-navigation'; // Version can be specified in package.json
import * as Screens from './screens';




const RootStack = createStackNavigator({
  Home: {
    screen: Screens.HomeScreen,
  },
  Departments: {
    screen: Screens.DepartmentsScreen,
  },
  Enrolee: {
    screen: Screens.EnroleeScreen,
  },
  Virt: {
    screen: Screens.VirtScreen,
  },
  AboutUs: {
    screen: Screens.AboutUsScreen,
  },
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


