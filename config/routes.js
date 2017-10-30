import { DrawerNavigator, StackNavigator } from 'react-navigation';

import DashboardScreen from '../screens/DashboardScreen';
import MemberListScreen from '../screens/MemberListScreen';
import VillageListScreen from '../screens/VillageListScreen';
import DistrictListScreen from '../screens/DistrictListScreen';
import DapilListScreen from '../screens/DapilListScreen';
import MessageScreen from '../screens/MessageScreen';
import HelpScreen from '../screens/HelpScreen';
import VolunteerLocalScreen from '../screens/VolunteerLocalScreen';
import TestScreen from '../screens/TestScreen';
import DrawerContainer from '../components/containers/DrawerContainer';
import RegisterContainer from '../components/containers/RegisterContainer';



// ========= Dashboard Routers =========

const DashboardScreenRoutes = {
  DashboardScreen: { screen: DashboardScreen },
  MemberListScreen: { screen: MemberListScreen },
  VillageListScreen: { screen: VillageListScreen },
  DistrictListScreen: { screen: DistrictListScreen },
  DapilListScreen: { screen: DapilListScreen }
}

const DashboardScreenStack = StackNavigator(DashboardScreenRoutes,
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'DashboardScreen',
      headerMode: 'screen',
    }),
  }
);

// ======== Register Routers ========

const RegisterScreenRoutes = {
  RegisterScreen: { screen: RegisterContainer }
}

const RegisterScreenStack = StackNavigator(RegisterScreenRoutes,
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'RegisterScreen',
      headerMode: 'screen',
    }),
  }
);

// ======= Message Routers ========

const MessageScreenRoutes = {
  MessageScreen: { screen: MessageScreen }
}

const MessageScreenStack = StackNavigator(MessageScreenRoutes,
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'MessageScreen',
      headerMode: 'screen',
    }),
  }
);

// ======= Help Routers =========

const HelpScreenRoutes = {
  HelpScreen: { screen: HelpScreen }
}

const HelpScreenStack = StackNavigator(HelpScreenRoutes,
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'HelpScreen',
      headerMode: 'screen',
    }),
  }
);

// ======= VolunteerLocal Routers =========

const VolunteerLocalScreenRoutes = {
  VolunteerLocalScreen: { screen: VolunteerLocalScreen }
}

const VolunteerLocalScreenStack = StackNavigator(VolunteerLocalScreenRoutes,
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'VolunteerLocalScreen',
      headerMode: 'screen',
    }),
  }
);

// ======= Root Routers (Drawer Navigator) ========

const Routes = DrawerNavigator(
  {
    Beranda: {
      path: '/',
      screen: DashboardScreenStack
    },
    Pendaftaran: {
      path: '/register',
      screen: RegisterScreenStack
    },
    KotakPesan: {
      path: '/message',
      screen: MessageScreenStack
    },
    Bantuan: {
      path: '/help',
      screen: HelpScreenStack
    },
    Relawan: {
      path: '/relawan',
      screen: VolunteerLocalScreenStack
    }
  },
  {
    initialRouteName: 'Pendaftaran',
    drawerPosition: 'right',
    contentComponent: DrawerContainer
  }
);

export default Routes
