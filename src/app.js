import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  StackNavigator
} from "react-navigation"; // Version can be specified in package.json
import * as Screens from "./screens/index";

const RootStack = new createStackNavigator(
  {
    Home: {
      screen: Screens.HomeScreen,
      navigationOptions: () => ({
        headerMode: null
      })
    },
    Departments: {
      screen: Screens.DepartmentsScreen,
      navigationOptions: () => ({
        headerTransparent: false,
        title: `Кафедры`
      })
    },
    AlgebraFuncAnalysis: {
      screen: Screens.AlgebraFuncAnalysis,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: "#fff"
      })
    },
    AppliedMath: {
      screen: Screens.AppliedMath,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: "#fff"
      }),
    },
    ComputerScience: {
      screen: Screens.ComputerScience,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: "#fff"
      }),
    },
    DifferentialEquations: {
      screen: Screens.DifferentialEquations,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: "#fff"
      }),
    },
    MathAnalysis: {
      screen: Screens.MathAnalysis,
      navigationOptions: () => ({
        headerTransparent: true,
        headerTintColor: "#fff"
      }),
    },
    ForEnrollee: {
      screen: Screens.ForEnrolleeScreen,
      navigationOptions: () => ({
        headerTransparent: false,
        title: `Абитуриенту`
      })
    },
    Virt: {
      screen: Screens.VirtScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    AboutUs: {
      screen: Screens.AboutUsScreen,
      navigationOptions: () => ({
        headerTintColor: "#fff"
      })
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTransparent: true
    }
  }
);
export default new createAppContainer(RootStack);
