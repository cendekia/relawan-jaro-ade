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

class DapilListScreen extends Component {
  static navigationOptions = {
    title: 'Daerah Pemilihan',
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
      <Container style={{backgroundColor: 'white'}}>
        <Content>
          <List>
            <ListItem>
              <Text>Bogor 1</Text>
            </ListItem>
            <ListItem>
              <Text>Bogor 2</Text>
            </ListItem>
            <ListItem>
              <Text>Bogor 3</Text>
            </ListItem>
            <ListItem>
              <Text>Bogor 4</Text>
            </ListItem>
            <ListItem>
              <Text>Bogor 5</Text>
            </ListItem>
            <ListItem>
              <Text>Bogor 6</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

export default DapilListScreen
