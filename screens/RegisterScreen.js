import React, { Component } from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import {
  Container, Content, Body,
  Form, Item, Label, Input,
  Card, CardItem, Right, Left,
  Row, Col, H1, Grid, Button, Text,
  ActionSheet
} from 'native-base'
import { Entypo } from '@expo/vector-icons'
import { ImagePicker } from 'expo'

import Header from '../components/Header'
import Colors from '../constants/Colors'

var BUTTONS = ["Unggah Photo dengan Kamera...", "Unggah dari Galeri HP...", "Batal"];
var CANCEL_INDEX = 2;

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
              <Card>
                <CardItem>
                  <View style={{flex:1}}>
                    <Form>
                      <Text style={styles.customHeader}>Wilayah Pemilihan</Text>
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
                    </Form>
                  </View>
                </CardItem>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card >
                <CardItem >
                  <View style={{flex:1}}>
                    <Form>
                      <Text style={styles.customHeader}>Data Relawan</Text>
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
                      </Form>
                    </View>
                  </CardItem>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card >

                  <CardItem>
                    <View style={{flex:1}}>
                      <Form>
                      <Text style={styles.customHeader}>Unggah Dokumen</Text>
                      <Item style={{marginTop: 20}}>
                        <Input disabled placeholder='Unggah Photo Relawan' />
                      </Item>
                      <TouchableOpacity
                        onPress={() =>
                        ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            title: "Unggah Photo Relawan"
                          },
                          buttonIndex => {
                            //action
                          }
                        )}
                      >
                        <Body>
                        <Entypo size={200} active name='image' />
                        </Body>
                      </TouchableOpacity>
                      <Item disabled style={{marginTop: 20}}>
                        <Input disabled placeholder='Unggah Photo KTP'/>
                      </Item>
                      <TouchableOpacity
                        onPress={() =>
                        ActionSheet.show(
                          {
                            options: BUTTONS,
                            cancelButtonIndex: CANCEL_INDEX,
                            title: "Unggah Photo KTP"
                          },
                          buttonIndex => {
                            //action
                          }
                        )}
                      >
                        <Body>
                        <Entypo size={200} active name='v-card' />
                        </Body>
                      </TouchableOpacity>
                    </Form>
                  </View>
                </CardItem>
                <CardItem>
                  <Body>
                    <Button block warning
                    onPress={() =>
                    ActionSheet.show(
                      {
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        destructiveButtonIndex: DESTRUCTIVE_INDEX,
                        title: "Upload Photo KTP"
                      },
                      buttonIndex => {
                        // switch (buttonIndex) {
                        //   case 0:
                        //     this._takePhoto()
                        //     break
                        //   case 1:
                        //     this._pickImage()
                        //     break
                        //   default:
                        // }

                        // this.setState({ clicked: BUTTONS[buttonIndex] });
                      }
                    )}
                    >
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
  customHeader: {fontWeight: 'normal', position: 'absolute', top: 0, right:0, color: Colors.tintColor}
});

export default RegisterScreen;
