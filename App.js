import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DashboardScreen from './screens/DashboardScreen';
import RegisterScreen from './screens/RegisterScreen';

const DashboardScreenStack = StackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'DashboardScreen',
      headerMode: 'screen',
      headerTitle: 'Dashboard Screen Header',
      drawerLabel: 'Dashboard Screen',
    }),
  }
);

const RegisterScreenStack = StackNavigator(
  {
    RegisterScreen: {
      screen: RegisterScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'RegisterScreen',
      headerMode: 'screen',
      headerTitle: 'Register Screen Header',
      drawerLabel: 'Register Screen',
    }),
  }
);


const DrawerNav = DrawerNavigator(
  {
    Dashboard: {
      path: '/',
      screen: DashboardScreenStack
    },
    Register: {
      path: '/',
      screen: RegisterScreenStack
    }
  },
  {
    initialRouteName: 'Dashboard',
    drawerPosition: 'right'
  }
);

export default DrawerNav;
