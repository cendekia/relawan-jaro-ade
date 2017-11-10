import React, { Component } from 'react'
import { StyleSheet, Platform, TouchableOpacity, View } from 'react-native'
import {
  Container, Content, Body,
  Row, Col, Grid,
  Card, CardItem,
  Text, H1, H2, H3, Spinner
} from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { connect } from 'react-redux';

import Header from '../components/Header'
import Colors from '../constants/Colors'
import { loggedIn } from '../actions'

import {
  loadAllDapil, loadAllVillages, loadAllDistricts,
  totalVolunteer, loadVolunteers
} from '../api'

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
  constructor(props) {
      super(props)
  }
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

  componentDidMount() {
    //load dapil list
    if (this.props.regionList.dapilList.length == 0) {
      loadAllDapil(this.props)
    }
    if (this.props.regionList.villageList.length == 0) {
      loadAllVillages(this.props)
    }
    if (this.props.regionList.districtList.length == 0) {
      loadAllDistricts(this.props)
    }

    if (this.props.regionList.volunteerList.length == 0) {
      loadVolunteers(this.props)
    }
    console.log(this.props)
    totalVolunteer(this.props)
  }

  render() {
    const { navigation, activeItemKey } = this.props
    let { districtList, dapilList, villageList, volunteerList } = this.props.regionList;
    let { totalRelawan, totalDistrict, totalDapil, totalVillage } = this.props.dashboardSummary;

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
                <TouchableOpacity onPress={() => navigation.navigate('MemberListScreen')}>
                  <Body>
                    <Col>
                      <Entypo name='slideshare' size={30}
                      style={styles.fontWhite} />
                    </Col>
                    { volunteerList.length == 0 &&
                      <View style={styles.spinner}>
                        <Spinner color={Colors.tintColor} />
                      </View>
                    }
                    { volunteerList.length > 0 &&
                      <Col style={styles.centralize}>
                        <H1 style={[styles.customH1, styles.fontWhite, styles.customWidth]}>{ totalRelawan.toString() }</H1>
                      </Col>
                    }
                    { volunteerList.length > 0 &&
                      <Col style={styles.absoluteBottom}>
                        <Text style={[styles.fontWhite, styles.footerText]}>
                          Relawan Terdaftar
                        </Text>
                      </Col>
                    }
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
                    { villageList.length == 0 &&
                      <View style={styles.spinner}>
                        <Spinner color={Colors.tintColor} />
                      </View>
                    }
                    { villageList.length > 0 &&
                      <Col style={styles.centralize}>
                        <H1 style={[styles.customH1, styles.fontWhite, styles.customWidth]}>
                          34.6%
                        </H1>
                      </Col>
                    }
                    { villageList.length > 0 &&
                      <Col style={styles.absoluteBottom}>
                        <Text style={[styles.fontWhite, styles.footerText]}>
                          150 dari 434 Desa
                        </Text>
                      </Col>
                    }
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
                    { districtList.length == 0 &&
                      <View style={styles.spinner}>
                        <Spinner color={Colors.tintColor} />
                      </View>
                    }
                    { districtList.length > 0 &&
                      <Col style={styles.centralize}>
                        <H1 style={[styles.customH1, styles.fontWhite, styles.customWidth]}>
                          87.5%
                        </H1>
                      </Col>
                    }
                    { districtList.length > 0 &&
                      <Col style={styles.absoluteBottom}>
                        <Text style={[styles.fontWhite, styles.footerText]}>
                          35 dari 40 Kecamatan
                        </Text>
                      </Col>
                    }
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
                    { dapilList.length == 0 &&
                      <View style={styles.spinner}>
                        <Spinner color={Colors.tintColor} />
                      </View>
                    }
                    { dapilList.length > 0 &&
                      <Col style={styles.centralize}>
                        <H1 style={[styles.customH1, styles.fontWhite, styles.customWidth]}>
                          100%
                        </H1>
                      </Col>
                    }
                    { dapilList.length > 0 &&
                      <Col style={styles.absoluteBottom}>
                        <Text style={[styles.fontWhite, styles.footerText]}>
                          6 dari 6 Dapil
                        </Text>
                      </Col>
                    }
                  </Body>
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
  customWidth: {width: 100},
  footerText: {fontSize: 12},
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
