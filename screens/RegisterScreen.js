import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';

class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Pendaftaran',
    header: ({navigation}) => <Header
      title='Pendaftaran'
      {...navigation}
    />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Register screens</Text>
      </View>
    );
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

export default RegisterScreen;
