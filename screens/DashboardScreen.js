import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

class DashboardScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard',
    headerStyle: {
      height: 84
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Dashboard screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
