import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import Header from '../components/Header';

class DashboardScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Beranda',
    header: ({navigation}) => <Header
      title='Beranda'
      leftButton={1}
      showButton={true}
      {...navigation}
    />
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
