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

class VillageListScreen extends Component {
  constructor(props) {
      super(props);
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
    let { villageList } = this.props.regionList;

    return (
      villageList.length == 0 ?
      <View style={styles.spinner}>
        <Spinner color={Colors.tintColor} />
      </View>
      :
      <Container style={{backgroundColor: 'white'}}>
        <Content>
        {
          villageList.map((village, index) => {
            return (
              <List key={index}>
                <ListItem>
                  <Text>{village.name}</Text>
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

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
