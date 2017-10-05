import React, { Component } from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { Entypo } from '@expo/vector-icons'
import {
  Container, Content, Body,
  Left, Right,
  Row, Col, Grid,
  Text, H1, H2, H3,
  List, ListItem
} from 'native-base'
import Colors from '../../constants/Colors';

class DrawerContainer extends Component {

  render() {
    console.log(this.props);
    const { navigation } = this.props
    return (
      <Container>
        <Content style={styles.container}>
          <Row style={styles.headNavigation}>
            <Col>
              <Image
                source={require('../../assets/icons/loading-icon.png')}
                style={{width: null, height: 240}}
              />
            </Col>
          </Row>

          <List>
            <ListItem icon>
              <Left>
                <Entypo name='area-graph' size={25} />
              </Left>
              <Body>
                <Text onPress={() => navigation.navigate('Beranda')}>
                  Beranda
                </Text>
              </Body>
              <Right />
            </ListItem>
          </List>
          <List>
            <ListItem icon>
              <Left>
                <Entypo name='add-user' size={25} />
              </Left>
              <Body>
                <Text onPress={() => navigation.navigate('Pendaftaran')}>
                  Pendaftaran
                </Text>
              </Body>
              <Right />
            </ListItem>
          </List>
          <List>
            <ListItem icon>
              <Left>
                <Entypo name='paper-plane' size={25} />
              </Left>
              <Body>
                <Text onPress={() => navigation.navigate('Pendaftaran')}>
                  Notifikasi
                </Text>
              </Body>
              <Right />
            </ListItem>
          </List>
          <List>
            <ListItem icon>
              <Left>
                <Entypo name='help-with-circle' size={25} />
              </Left>
              <Body>
                <Text onPress={() => navigation.navigate('Pendaftaran')}>
                  Bantuan
                </Text>
              </Body>
              <Right />
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headNavigation: {
    paddingTop: 40,
    paddingLeft: 35,
    paddingRight: 35,
    paddingBottom: 10,
    backgroundColor: Colors.tintColor,
  },
  navigationItem: {
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: 'grey',
    borderWidth: 1,
    borderBottom: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
})

export default DrawerContainer;
