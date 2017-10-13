import React, { Component } from 'react'
import { connect } from 'react-redux'
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

var BUTTONS = ["Kamera", "Galeri", "Batal"]
var CANCEL_INDEX = 2

import * as actions from '../actions'


const mapDispatchToProps = (dispatch) => {
  return {
    setVillage: (village) => {
      dispatch(actions.setVolunteerVillage(village))
    },
    setDistrict:(district) => {
      dispatch(actions.setVolunteerDistrict(district))
    },
    setDapil:(dapil) => {
      dispatch(actions.setVolunteerDapil(dapil))
    },
    setName: (name) => {
      dispatch(actions.setVolunteerName(name))
    },
    setDob:(dob) => {
      dispatch(actions.setVolunteerDob(dob))
    },
    setAddress:(address) => {
      dispatch(actions.setVolunteerAddress(address))
    },
    setNoKTP:(idNumber) => {
      dispatch(actions.setVolunteerNoKTP(idNumber))
    },
    setNoHP:(phoneNumber) => {
      dispatch(actions.setVolunteerNoHP(phoneNumber))
    },
    setNoWA:(waNumber) => {
      dispatch(actions.setVolunteerNoWA(waNumber))
    },
    setPhoto:(photo) => {
      dispatch(actions.setVolunteerPhoto(photo))
    },
    setPhotoKTP:(photoKTP) => {
      dispatch(actions.setVolunteerPhotoKTP(photoKTP))
    },
  }
}

const mapStateToProps = (state, { navigator }) => {
  return {
    ...state,
    navigator: navigator,
  }
}


class RegisterScreen extends Component {
  state = {
    uploading: false,
  }

  static navigationOptions = {
    drawerLabel: 'Pendaftaran',
    header: ({navigation}) => <Header
      title='Pendaftaran'
      {...navigation}
    />
  };

  _renderPhoto = () => {
    let { photo } = this.props.volunteerForm;
    if (!photo) {
      return (
        <MaterialIcons size={160} active name='portrait' style={{color: '#ccc'}} />
      );
    }

    return (
      <Image source={{ uri: photo }} style={{ width: 250, height: 250, marginTop: 20 }} />
    )
  }

  _renderPhotoKTP = () => {
    let { photoKTP } = this.props.volunteerForm
    if (!photoKTP) {
      return (
        <Entypo size={180} active name='v-card' style={{color: '#ccc'}} />
      );
    }

    return (
      <Image source={{ uri: photoKTP }} style={{ width: 250, height: 250, marginTop: 20 }} />
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
        this.props.setPhoto(pickerResult.uri)
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
        this.props.setPhotoKTP(pickerResult.uri)
      }
    } catch (e) {
      alert('Maaf, proses mengunggah photo KTP gagal :(')
    } finally {
      this.setState({ uploading: false })
    }
  }

  render() {
    let { volunteerForm } = this.props
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
                        <Input
                          onChangeText={(village) => this.props.setVillage(village)}
                          value={volunteerForm.village}
                        />
                      </Item>
                      <Item floatingLabel>
                        <Label>Kecamatan</Label>
                        <Input
                          onChangeText={(district) => this.props.setDistrict(district)}
                          value={volunteerForm.district}
                        />
                      </Item>
                      <Item floatingLabel>
                        <Label>Dapil</Label>
                        <Input
                          onChangeText={(dapil) => this.props.setDapil(dapil)}
                          value={volunteerForm.dapil}
                        />
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
                        <Input
                          onChangeText={(name) => this.props.setName(name)}
                          value={volunteerForm.name}
                        />
                      </Item>
                      <Item style={{marginTop: 30}}>
                        <Label>Tanggal Lahir</Label>
                        <DatePicker
                          style={{width: 200}}
                          date={volunteerForm.dob}
                          mode="date"
                          placeholder="dd/mm/yyyy"
                          format="DD/MM/YYYY"
                          minDate="01/01/1970"
                          maxDate="31/12/2001"
                          confirmBtnText="Masukan"
                          cancelBtnText="Batal"
                          iconComponent={
                            <Octicons
                              size={30}
                              active
                              name='calendar'
                              style={{
                                color: Colors.tintColor,
                                marginRight: Platform.OS == 'android' ? 14 : 0
                              }} />
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
                          onDateChange={(dob) => this.props.setDob(dob)}
                        />
                      </Item>
                      <Item floatingLabel>
                        <Label>Alamat</Label>
                        <Input
                          style={{
                            height: 150
                          }}
                          multiline={true}
                          onChangeText={(address) => this.props.setAddress(address)}
                          value={volunteerForm.address}
                        />
                      </Item>
                      <Item floatingLabel>
                        <Label>No. KTP</Label>
                        <Input
                          onChangeText={(idNumber) => this.props.setNoKTP(idNumber)}
                          value={volunteerForm.idNumber}
                        />
                      </Item>
                      <Item floatingLabel>
                        <Label>No. HP</Label>
                        <Input
                          onChangeText={(phoneNumber) => this.props.setNoHP(phoneNumber)}
                          value={volunteerForm.phoneNumber}
                        />
                      </Item>
                      <Item floatingLabel>
                        <Label>No. HP (Whatsapp)</Label>
                        <Input
                          onChangeText={(waNumber) => this.props.setNoWA(waNumber)}
                          value={volunteerForm.waNumber}
                        />
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
