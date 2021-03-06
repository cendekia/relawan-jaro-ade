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

class MemberListScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
          loading : false,
      }
  }

  static navigationOptions = {
    title: 'Daftar Relawan',
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
    console.log(this.props)
    let { volunteerList } = this.props.regionList;

    return (
      volunteerList.length == 0 ?
      <View style={styles.spinner}>
        <Spinner color={Colors.tintColor} />
      </View>
      :
      <Container style={{backgroundColor: 'white'}}>
        <Content>
        {
          volunteerList.map((volunteer, index) => {
            return (
              <List key={index}>
                <ListItem>
                  <Text>{volunteer.name}</Text>
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

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default MemberListScreen
