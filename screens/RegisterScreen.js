import React, { Component } from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  Picker
} from 'react-native'
import {
  Container, Content, Body,
  Form, Item, Label, Input,
  Card, CardItem, Right, Left,
  Row, Col, H1, Grid, Button, Text,
  ActionSheet
} from 'native-base'
import DatePicker from 'react-native-datepicker'
import { Entypo, MaterialIcons, Octicons } from '@expo/vector-icons'
import { ImagePicker } from 'expo'

import Header from '../components/Header'
import Colors from '../constants/Colors'

var BUTTONS = ["Unggah Photo dengan Kamera...", "Unggah dari Galeri...", "Batal"]
var CANCEL_INDEX = 2

class RegisterScreen extends Component {
  state = {
    imagePhoto: null,
    imageKTP: null,
    uploading: false,
    date: null
  }

  static navigationOptions = {
    drawerLabel: 'Pendaftaran',
    header: ({navigation}) => <Header
      title='Pendaftaran'
      {...navigation}
    />
  };

  _renderPhotoKTP = () => {
    let { imageKTP } = this.state;
    if (!imageKTP) {
      return (
        <Entypo size={200} active name='v-card' style={{color: '#ccc'}} />
      );
    }

    return (
      <Image source={{ uri: imageKTP }} style={{ width: 250, height: 250, marginTop: 20 }} />
    )
  }

  _renderPhoto = () => {
    let { imagePhoto } = this.state;
    if (!imagePhoto) {
      return (
        <MaterialIcons size={200} active name='portrait' style={{color: '#ccc'}} />
      );
    }

    return (
      <Image source={{ uri: imagePhoto }} style={{ width: 250, height: 250, marginTop: 20 }} />
    )
  }

  _pickPhotoPicFromLib = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    this._handlePhotoProfile(pickerResult)
  }

  _takePicPhotoFromCam = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    this._handlePhotoProfile(pickerResult)
  }

  _pickKTPFromLib = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    this._handlePhotoKTP(pickerResult)
  }

  _takeKTPFromCam = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    this._handlePhotoKTP(pickerResult)
  }

  _handlePhotoProfile = async pickerResult => {
    try {
      this.setState({ uploading: true })

      if (!pickerResult.cancelled) {
        this.setState({ imagePhoto: pickerResult.uri })
      }
    } catch (e) {
      alert('Maaf, proses mengunggah photo gagal :(')
    } finally {
      this.setState({ uploading: false })
    }
  }

  _handlePhotoKTP = async pickerResult => {
    try {
      this.setState({ uploading: true })

      if (!pickerResult.cancelled) {
        this.setState({ imageKTP: pickerResult.uri })
      }
    } catch (e) {
      alert('Maaf, proses mengunggah photo KTP gagal :(')
    } finally {
      this.setState({ uploading: false })
    }
  }

  render() {
    return (
      <Container>
        <Content style={{margin: 8, marginTop: 0}}>
          <Row style={{marginBottom: 15, marginTop: Platform.OS == 'android' ? 30 : 40}}>
            <Col>
              <Body>
                <H1 style={styles.customH1}>
                  Formulir Pendaftaran Relawan
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
                      <Item style={{marginTop: 30}}>
                        <Label>Tanggal Lahir</Label>
                        <DatePicker
                          style={{width: 200}}
                          date={this.state.date}
                          mode="date"
                          placeholder="dd/mm/yyyy"
                          format="DD/MM/YYYY"
                          minDate="01/01/1970"
                          maxDate="31/12/2001"
                          confirmBtnText="Masukan"
                          cancelBtnText="Batal"
                          iconComponent={
                            <Octicons size={30} active name='calendar' style={{color: Colors.tintColor}} />
                          }
                          customStyles={{
                            dateInput: {
                              marginLeft: 36,
                              borderWidth: 0
                            },
                            dateText: {
                              fontSize: 17,
                              color: 'black'
                            },
                            placeholderText: {
                              fontSize: 17,
                            },
                            btnTextConfirm: {
                              color: Colors.tintColor
                            }
                          }}
                          onDateChange={(date) => {this.setState({date: date})}}
                        />
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
                        <Label>No. HP</Label>
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
                            title: "UNGGAH PHOTO RELAWAN"
                          },
                          buttonIndex => {
                            switch (buttonIndex) {
                              case 0:
                                this._takePicPhotoFromCam()
                                break
                              case 1:
                                this._pickPhotoPicFromLib()
                                break;
                              default:
                            }
                          }
                        )}
                      >
                        <Body>
                        {this._renderPhoto()}
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
                            title: "UNGGAH PHOTO KTP"
                          },
                          buttonIndex => {
                            switch (buttonIndex) {
                              case 0:
                                this._takeKTPFromCam()
                                break
                              case 1:
                                this._pickKTPFromLib()
                                break;
                              default:
                            }
                          }
                        )}
                      >
                        <Body>
                          {this._renderPhotoKTP()}
                        </Body>
                      </TouchableOpacity>
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
          <View>
          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          </View>
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
