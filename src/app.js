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
    navigationOptions: () => ({
        headerTransparent: false,
        title: `Абитуриенту`,
    }),
  },
  Virt: {
    screen: Screens.VirtScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  _AlgebraFuncAnalysis: {
    screen: Screens.AlgebraFuncAnalysisScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  _AppliedMath: {
    screen: Screens.AppliedMathScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  _ComputerScience: {
    screen: Screens.ComputerScienceScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  _DifferentialEquations: {
    screen: Screens.DifferentialEquationsScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  _MathAnalysis: {
    screen: Screens.MathAnalysisScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  _AboutUs: {
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


export default createAppContainer(RootStack);
