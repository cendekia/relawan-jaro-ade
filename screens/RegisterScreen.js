import React, { Component } from 'react'
import { StyleSheet, Platform, View } from 'react-native'
import {
  Container, Content, Body,
  Form, Item, Label, Input,
  Card, CardItem,
  Row, Col, H1, Grid, Button, Text
} from 'native-base'

import Header from '../components/Header'

class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Pendaftaran',
    header: ({navigation}) => <Header
      title='Pendaftaran'
      {...navigation}
    />
  };

  render() {
    return (
      <Container>
        <Content style={{margin: 8, marginTop: 0}}>
          <Row style={{marginBottom: 15, marginTop: Platform.OS == 'android' ? 30 : 40}}>
            <Col>
              <Body>
                <H1 style={styles.customH1}>
                  Silahkan isi data diri Anda
                </H1>
              </Body>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <CardItem >
                  <View style={{flex:1}}>
                    <Form>
                      <Item floatingLabel>
                        <Label>Desa / Kelurahan</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>Kecamatan</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>Dapil</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>Nama Lengkap</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>Tanggal Lahir</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>Alamat</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>No. KTP</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>No. HP (Whatsapp)</Label>
                        <Input />
                      </Item>
                      <Item floatingLabel>
                        <Label>Status</Label>
                        <Input />
                      </Item>
                    </Form>
                  </View>
                </CardItem>
                <CardItem>
                  <Body>
                    <Button block warning>
                      <Text>Daftar</Text>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Col>
          </Row>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customH1: {fontWeight: 'bold', fontSize: 24, color: '#666'},
});

export default RegisterScreen;
