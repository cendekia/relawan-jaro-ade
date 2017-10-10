import React, { Component } from 'react'
import { StyleSheet, Platform, TouchableOpacity } from 'react-native'
import {
  Container, Content, Body,
  Row, Col, Grid,
  Card, CardItem,
  Text, H1, H2, H3
} from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux';

import Header from '../components/Header'
import Colors from '../constants/Colors'
import { loggedIn } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    loginCheck: (value) => {
      dispatch(loggedIn(value));
    },
  }
}

const mapStateToProps = (state) => {
  return {
    loginResponse: state.loginResponse,
  }
}

class DashboardScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Beranda',
    header: ({navigation}) => <Header
      title='Beranda'
      {...navigation}
    />
  }

  async logIn() {
    const {
      type,
      token
    } = await Expo.Facebook.logInWithReadPermissionsAsync("1474433265981222", {
      permissions: ["public_profile", "email"],
      behavior: 'native'
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture`);
      // console.log(response);

      this.props.loginCheck({accessToken: token, loginStatus: type, loginType: 'facebook'})

      console.log(this.props)
    } else {
      alert("Login Failed!");
    }
  }

  render() {
    const { navigation, activeItemKey } = this.props

    return (
      <Container>
        <Content style={{margin: 8, marginTop: 0}}>
          <Row style={{marginBottom: 15, marginTop: Platform.OS == 'android' ? 30 : 40}}>
            <Col>
              <Body>
                <H1 style={[styles.customH1, {color: '#666'}]}>RELAWAN JARO ADE</H1>
              </Body>
            </Col>
          </Row>
          <Row style={{marginBottom: 30}}>
            <Col>
              <Body>
                <H3 style={{textAlign: 'center', color: '#666'}}>Untuk Kabupaten Bogor Maju dan Sejahtera</H3>
              </Body>
            </Col>
          </Row>
          <Row>
            <Grid>
              <Card style={styles.cardTorqua}>
                <CardItem style={styles.cardItem}>
                <TouchableOpacity onPress={() => navigation.navigate('DashboardScreen')}>
                  <Body>
                    <Col>
                      <Entypo name='slideshare' size={30}
                      style={styles.fontWhite} />
                    </Col>
                    <Col style={styles.centralize}>
                      <H1 style={[styles.customH1, styles.fontWhite]}>
                        355.340
                      </H1>
                    </Col>
                    <Col style={styles.absoluteBottom}>
                      <Text style={[styles.fontWhite, styles.footerText]}>
                        Relawan Terdaftar
                      </Text>
                    </Col>
                  </Body>
                </TouchableOpacity>
                </CardItem>
              </Card>
            </Grid>
            <Grid>
            <Card style={styles.cardBlue}>
              <CardItem style={styles.cardItem}>
              <TouchableOpacity onPress={() => navigation.navigate('VillageListScreen')}>
                  <Body>
                    <Col>
                      <Entypo name='tree' size={30}
                      style={styles.fontWhite} />
                    </Col>
                    <Col style={styles.centralize}>
                      <H1 style={[styles.customH1, styles.fontWhite]}>
                        34.6%
                      </H1>
                    </Col>
                    <Col style={styles.absoluteBottom}>
                      <Text style={[styles.fontWhite, styles.footerText]}>
                        150 dari 434 Desa
                      </Text>
                    </Col>
                  </Body>
                </TouchableOpacity>
                </CardItem>
              </Card>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Card style={styles.cardRed}>
                <CardItem style={styles.cardItem}>
                <TouchableOpacity onPress={() => navigation.navigate('DistrictListScreen')}>
                  <Body>
                    <Col>
                      <Entypo name='location' size={30}
                    style={styles.fontWhite} />
                  </Col>
                    <Col style={styles.centralize}>
                      <H1 style={[styles.customH1, styles.fontWhite]}>
                        87.5%
                      </H1>
                    </Col>
                    <Col style={styles.absoluteBottom}>
                      <Text style={[styles.fontWhite, styles.footerText]}>
                        35 dari 40 Kecamatan
                      </Text>
                    </Col>
                  </Body>
                </TouchableOpacity>
                </CardItem>
              </Card>
            </Grid>
            <Grid>
            <Card style={styles.cardPurple}>
              <CardItem style={styles.cardItem}>
              <TouchableOpacity onPress={() => navigation.navigate('DapilListScreen')}>
                  <Body>
                    <Col>
                      <Entypo
                        name='map' size={30}
                        style={styles.fontWhite} />
                    </Col>
                    <Col style={styles.centralize}>
                      <H1 style={[styles.customH1, styles.fontWhite]}>
                        100%
                      </H1>
                    </Col>
                    <Col style={styles.absoluteBottom}>
                      <Text style={[styles.fontWhite, styles.footerText]}>
                        6 dari 6 Dapil
                      </Text>
                    </Col>
                  </Body>
                </TouchableOpacity>
                </CardItem>
              </Card>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Card>
                <CardItem>
                  <TouchableOpacity onPress={() => this.logIn()}>
                    <Text>Facebook Login</Text>
                  </TouchableOpacity>
                </CardItem>
              </Card>
            </Grid>
          </Row>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  cardPurple: { borderRadius: 10, backgroundColor: "#9B59B6" },
  cardRed: { borderRadius: 10, backgroundColor: "#EC644B" },
  cardBlue: { borderRadius: 10, backgroundColor: "#0082be" },
  cardTorqua: { borderRadius: 10, backgroundColor: "lightseagreen" },
  cardItem: { height: 150, backgroundColor: "transparent" },
  absoluteBottom: {position: 'absolute', bottom: 0},
  fontWhite: {color: 'white'},
  centralize: {alignItems: 'center', flex: 1},
  customH1: {fontWeight: 'bold', fontSize: 28},
  footerText: {fontSize: 12},
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
