import React, { Component } from 'react'
import { Provider, connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
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
      console.log(store.getState())
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
            <AppWithNavigationState />
        </Provider>
    );
}
