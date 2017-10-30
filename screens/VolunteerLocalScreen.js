import React, { Component } from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import {
  Container, Content, Body,
  Form, Item, Label, Input,
  Card, CardItem,
  Row, Col, H1, Grid, Button, Text
} from 'native-base'

import Header from '../components/Header'
import RightNav from '../components/partials/HeaderLeftNav'

class VolunteerLocalScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Message',
    header: ({navigation}) => <Header
      title='Data Relawan (offline)'
      rightNav={true}
      {...navigation}
    />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Message screens</Text>
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

export default VolunteerLocalScreen;
