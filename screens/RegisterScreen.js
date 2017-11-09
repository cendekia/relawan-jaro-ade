import React, { Component } from 'react'
import {
  StyleSheet,
  Platform,
  View,
  Image,
  TouchableOpacity,
  NetInfo
} from 'react-native'
import {
  Container, Content, Body,
  Form, Item, Label, Input,
  Card, CardItem, Right, Left,
  Row, Col, H1, Grid, Button, Text,
  ActionSheet, Toast, Icon, Picker
} from 'native-base'

import DatePicker from 'react-native-datepicker'
import SelectPicker from '../components/modals/SelectPicker'

import { Entypo, MaterialIcons, Octicons } from '@expo/vector-icons'
import { ImagePicker } from 'expo'

import Header from '../components/Header'
import Colors from '../constants/Colors'

import { saveData, loadAllDapil, loadAllVillages, loadAllDistricts } from '../api'

var BUTTONS = ["Kamera", "Galeri", "Batal"]
var CANCEL_INDEX = 2


class RegisterScreen extends Component {
  state = {
    uploading: false,
    savingResponse: null,
    responseCode: 20,
    dapilList: null
  }

  static navigationOptions = {
    drawerLabel: 'Pendaftaran',
    header: ({navigation}) => <Header
      title='Pendaftaran'
      {...navigation}
    />
  };

  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this._handleConnectionChange);

    //load dapil list
    if (this.props.volunteerForm.dapilList.length == 0) {
      loadAllDapil(this.props)
    }
    if (this.props.volunteerForm.villageList.length == 0) {
      loadAllVillages(this.props)
    }
    if (this.props.volunteerForm.districtList.length == 0) {
      loadAllDistricts(this.props)
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this._handleConnectionChange);
  }

  _handleConnectionChange = (isConnected) => {
    this.props.checkConnection(isConnected)
  }

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

  _textField(onChange, attributes) {
    let { savingResponse, responseCode } = this.state
    return (

      <Item
        floatingLabel={responseCode != 40 && attributes.validation == false}
        stackedLabel={responseCode == 40}
        error={responseCode == 40}
      >
        <Label>{attributes.label}</Label>

        <Input
          placeholderTextColor="red"
          placeholder={responseCode == 40 && attributes.validation ? attributes.validation : ''}
          onChangeText={(input) => onChange(input)}
          value={attributes.value}
          style={attributes.multiline ? {height: 150} : {}}
          multiline={attributes.multiline ? true : false}
        />
        {/*
          responseCode == 40 && validation && <Icon name='close-circle' />
        */}

      </Item>
    )
  }

  _validationCheck(response, type) {
    if (response) {
      switch (type) {
        case 'name':
          return response.error.validation.name
          break;
        case 'id_card':
          return response.error.validation.id_card
          break;
        case 'phone_number':
          return response.error.validation.phone_number
          break;
        case 'whatsapp_number':
          return response.error.validation.whatsapp_number
          break;
        case 'address':
          return response.error.validation.address
          break;
        default:
          return false
      }
    } else {
      return false
    }
  }

  render() {
    let { volunteerForm, internetCheck } = this.props
    let { savingResponse, responseCode } = this.state

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
                      <SelectPicker
                        label="Desa / Kelurahan"
                        func={this.props}
                        select={this.props.setVillage}
                        data={volunteerForm.villageList}
                        selected={volunteerForm.village}
                      />
                    </Form>
                  </View>
                </CardItem>
                <CardItem>
                  <View style={{flex:1}}>
                    <Form>
                      <SelectPicker
                        label="Kecamatan"
                        func={this.props}
                        select={this.props.setDistrict}
                        data={volunteerForm.districtList}
                        selected={volunteerForm.district}
                      />
                    </Form>
                  </View>
                </CardItem>
                <CardItem>
                  <View style={{flex:1}}>
                    <Form>
                      <SelectPicker
                        label="Dapil"
                        func={this.props}
                        select={this.props.setDapil}
                        data={volunteerForm.dapilList}
                        selected={volunteerForm.dapil}
                      />
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

                      { this._textField(this.props.setName,
                          {
                            'value': volunteerForm.name,
                            'validation': this._validationCheck(savingResponse, 'name'),
                            'label': "Nama Lengkap"
                          }
                        )
                      }

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

                      { this._textField(this.props.setAddress,
                          {
                            'value': volunteerForm.address,
                            'validation': this._validationCheck(savingResponse, 'address'),
                            'label': "Alamat",
                            'multiline' : true
                          }
                        )
                      }

                      { this._textField(this.props.setNoKTP,
                          {
                            'value': volunteerForm.idNumber,
                            'validation': this._validationCheck(savingResponse, 'id_card'),
                            'label': "No. KTP"
                          }
                        )
                      }

                      { this._textField(this.props.setNoHP,
                          {
                            'value': volunteerForm.phoneNumber,
                            'validation': this._validationCheck(savingResponse, 'phone_number'),
                            'label': "No. HP"
                          }
                        )
                      }

                      { this._textField(this.props.setNoWA,
                          {
                            'value': volunteerForm.waNumber,
                            'validation': this._validationCheck(savingResponse, 'whatsapp_number'),
                            'label': "No. HP (Whatsapp)"
                          }
                        )
                      }

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
                              case '0':
                                this._takePicPhotoFromCam()
                                break
                              case '1':
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
                              case '0':
                                this._takeKTPFromCam()
                                break
                              case '1':
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
                    <Button block warning
                      onPress={() =>
                        saveData(this.props.volunteerForm)
                          .then((res) => {
                            this.setState({
                              responseCode: res.status_code,
                              savingResponse: res
                            })
                          })
                          .catch(error => {
                            Toast.show({
                              text: 'Data tersimpan di HP',
                              position: 'bottom',
                              type: 'warning',
                              buttonText: 'Tutup'
                            })
                          })
                      }
                    >
                      <Text>Unggah Data</Text>
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
