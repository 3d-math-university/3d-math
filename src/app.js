import React from 'react';
import { createAppContainer, createStackNavigator, } from 'react-navigation'; // Version can be specified in package.json
import * as Screens from './screens/index';


const RootStack = createStackNavigator({
  Home: {
    screen: Screens.HomeScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  Departments: {
    screen: Screens.DepartmentsScreen, 
    navigationOptions: () => ({
      headerTransparent: false,
      title: `Кафедры`,     
    }),
      
  },
  Enrolee: {
    screen: Screens.EnroleeScreen,
  },
  Virt: {
    screen: Screens.VirtScreen,
  },
  AboutUs: {
    screen: Screens.AboutUsScreen,  
    navigationOptions:()=>({
      headerTintColor: '#fff',
    }),
  },
}, {
    initialRouteName: 'Home',   
    defaultNavigationOptions:{
      headerTransparent: true,
    }
});


const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


