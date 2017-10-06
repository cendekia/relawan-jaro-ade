import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
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

class DistrictListScreen extends Component {
  static navigationOptions = {
    title: 'Kecamatan di Bogor',
    headerTintColor: "white",
    headerStyle: {
      paddingTop: Platform.OS ==='android' ? STATUS_BAR_HEIGHT : 15,
      height: Platform.OS ==='android' ? STATUS_BAR_HEIGHT + 60 : 65,
      backgroundColor: Colors.tintColor,
      borderBottomColor: Colors.tintColor
    },
    headerTitleStyle: {
      color: 'white'
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>A</Text>
            </ListItem>
            <ListItem >
              <Text>Acang Suracang</Text>
            </ListItem>
            <ListItem>
              <Text>Aming Suramin</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>B</Text>
            </ListItem>
            <ListItem>
              <Text>Buyung Subuyung</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>C</Text>
            </ListItem>
            <ListItem>
              <Text>Cecep Surecep</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>D</Text>
            </ListItem>
            <ListItem>
              <Text>Diding Suriding</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default DistrictListScreen
