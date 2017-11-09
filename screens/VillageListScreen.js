import React, { Component } from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'
import {
  Container, Content, Body,
  Row, Col, Grid,
  Card, CardItem,
  Text, H1, H2, H3,
  List, ListItem
} from 'native-base'
import { Entypo } from '@expo/vector-icons'

import Colors from '../constants/Colors'
import villages from '../sample/desa.json';

class VillageListScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading : false
      }
  }

  static navigationOptions = {
    title: 'Desa di Bogor',
    headerTintColor: "white",
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 4 : 15,
      height: Platform.OS === 'android' ? STATUS_BAR_HEIGHT + 30 : 65,
      backgroundColor: Colors.tintColor,
      borderBottomColor: Colors.tintColor
    },
    headerTitleStyle: {
      color: 'white'
    }
  };

  render() {
    return (
      this.state.loading ?
      <View style={styles.spinner}>
        <Spinner color={Colors.tintColor} />
      </View>
      :
      <Container style={{backgroundColor: 'white'}}>
        <Content>
          {
            villages.map((village, index) => {
              return (
                <List key={index}>
                  <ListItem>
                    <Text>{village.desa}</Text>
                  </ListItem>
                </List>
              )
            })
          }
        </Content>
      </Container>
    )
  }
}

export default VillageListScreen
