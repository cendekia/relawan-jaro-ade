import React, { Component } from 'react'
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Root } from 'native-base'

import Expo, { Facebook } from "expo";
import AppNavigator from './config/routes'

import getStore from './stores'

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

const store = getStore(navReducer);

@connect(state => ({
    nav: state.nav
}))

class AppWithNavigationState extends Component {
  render() {
    return (
      <AppNavigator
          navigation={addNavigationHelpers({
              dispatch: this.props.dispatch,
              state: this.props.nav
          })}
      />
    );
  }
}

export default function RAJA() {
    return (
        <Provider store={store}>
          <Root>
            <AppWithNavigationState />
          </Root>
        </Provider>
    );
}
