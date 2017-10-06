import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import {
  Container, Content, Body,
  Row, Col, Grid,
  Card, CardItem,
  Text, H1, H2, H3
} from 'native-base';
import { Entypo } from '@expo/vector-icons';

import Header from '../components/Header';
import Colors from '../constants/Colors';

class DashboardScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Beranda',
    header: ({navigation}) => <Header
      title='Beranda'
      {...navigation}
    />
  };

  render() {
    return (
      <Container>
        <Content style={{margin: 8, marginTop: Platform.OS == 'android' ? 30 : 40}}>
          <Row style={{marginBottom: 15}}>
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
                      <Text style={[styles.fontWhite, {fontSize: 13}]}>
                        Relawan Terdaftar
                      </Text>
                    </Col>
                  </Body>
                </CardItem>
              </Card>
            </Grid>
            <Grid>
            <Card style={styles.cardBlue}>
              <CardItem style={styles.cardItem}>
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
                      <Text style={[styles.fontWhite, {fontSize: 13}]}>
                        150 dari 434 Desa
                      </Text>
                    </Col>
                  </Body>
                </CardItem>
              </Card>
            </Grid>
          </Row>
          <Row>
            <Grid>
              <Card style={styles.cardRed}>
                <CardItem style={styles.cardItem}>
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
                      <Text style={[styles.fontWhite, {fontSize: 13}]}>
                        35 dari 40 Kecamatan
                      </Text>
                    </Col>
                  </Body>
                </CardItem>
              </Card>
            </Grid>
            <Grid>
            <Card style={styles.cardPurple}>
              <CardItem style={styles.cardItem}>
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
                      <Text style={[styles.fontWhite, {fontSize: 13}]}>
                        6 dari 6 Dapil
                      </Text>
                    </Col>
                  </Body>
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
  centralize: {justifyContent: 'center', alignItems: 'center', flex: 1},
  customH1: {fontWeight: 'bold', fontSize: 28}
});

export default DashboardScreen;
