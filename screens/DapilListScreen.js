import React, { Component } from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import { STATUS_BAR_HEIGHT } from '../constants'
import {
  Container, Content, Body,
  Row, Col, Grid,
  Card, CardItem,
  Text, H1, H2, H3,
  List, ListItem,
  Spinner
} from 'native-base'
import { Entypo } from '@expo/vector-icons'

import Colors from '../constants/Colors'

class DapilListScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading : true,
      }
  }

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
    let { dapilList } = this.props.volunteerForm;

    return (
      dapilList.length == 0 ?
      <View style={styles.spinner}>
        <Spinner color={Colors.tintColor} />
      </View>
      :
      <Container style={{backgroundColor: 'white'}}>
        <Content>
        {
          dapilList.map((dapil, index) => {
            return (
              <List key={index}>
                <ListItem>
                  <Text>{dapil.name}</Text>
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

export default DapilListScreen

const styles = StyleSheet.create({
  spinner: { },
})
