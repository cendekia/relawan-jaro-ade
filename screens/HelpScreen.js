import React, { Component } from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import {
  Container, Content, Body,
  Form, Item, Label, Input,
  Card, CardItem,
  Row, Col, H1, Grid, Button, Text
} from 'native-base'

import Header from '../components/Header'

class HelpScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Help',
    header: ({navigation}) => <Header
      title='Bantuan'
      {...navigation}
    />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Help screen</Text>
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

export default HelpScreen;
