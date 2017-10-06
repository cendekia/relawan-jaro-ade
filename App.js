import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DashboardScreen from './screens/DashboardScreen';
import RegisterScreen from './screens/RegisterScreen';
import MemberListScreen from './screens/MemberListScreen';
import VillageListScreen from './screens/VillageListScreen';
import DistrictListScreen from './screens/DistrictListScreen';
import DapilListScreen from './screens/DapilListScreen';
import DrawerContainer from './components/containers/DrawerContainer';

const DashboardScreenStack = StackNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen
    },
    MemberListScreen: {
      screen: MemberListScreen
    },
    VillageListScreen: {
      screen: VillageListScreen
    },
    DistrictListScreen: {
      screen: DistrictListScreen
    },
    DapilListScreen: {
      screen: DapilListScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'DashboardScreen',
      headerMode: 'screen',
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
      headerTitle: 'Register Screen Header',
      drawerLabel: 'Register Screen',
      headerMode: 'screen',
    }),
  }
);


const DrawerNav = DrawerNavigator(
  {
    Beranda: {
      path: '/',
      screen: DashboardScreenStack
    },
    Pendaftaran: {
      path: '/register',
      screen: RegisterScreenStack
    }
  },
  {
    initialRouteName: 'Beranda',
    drawerPosition: 'right',
    contentComponent: DrawerContainer
  }
);

export default DrawerNav;
