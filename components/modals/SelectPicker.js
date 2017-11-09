import React, { Component } from "react"
import { Platform, Dimensions } from "react-native"
import { Header, Body, Left, Right, Title, Button, Icon, Label, Picker, Item } from "native-base";

var {height, width} = Dimensions.get('window')

export default class SelectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });

    this.props.select(value)

    let { data } = this.props
    let currentData = data.find(v => v.id === value)

    if (this.props.label == "Desa / Kelurahan") {
      alert(value)
      // find districts
      if (currentData.district_id != null) {
        let districts = this.props.func.volunteerForm.districtList
        let currentDistrict = districts.find(d => d.id === currentData.district_id)
        this.props.func.setDistrict(currentDistrict.id)
      }

      // find dapil
      if (currentData.dapil_id != null) {
        let dapils = this.props.func.volunteerForm.dapilList
        let currentDapil = dapils.find(d => d.id === currentData.dapil_id)
        this.props.func.setDapil(currentDapil.id)
      }
    } else if (this.props.label == "Kecamatan") {
      // find villages
      if (currentData.village_id != null) {
        let villages = this.props.func.volunteerForm.villageList
        let currentVillage = villages.find(d => d.id === currentData.village_id)
        this.props.func.setVillage(currentDistrict.id)
      }

      // find dapil
      if (currentData.dapil_id != null) {
        let dapils = this.props.func.volunteerForm.dapilList
        let currentDapil = dapils.find(d => d.id === currentData.dapil_id)
        this.props.func.setDapil(currentDapil.id)
      }
    } else if (this.props.label == "Dapil") {
      // find villages
      if (currentData.village_id != null) {
        let villages = this.props.func.volunteerForm.villageList
        let currentVillage = villages.find(d => d.id === currentData.village_id)
        this.props.func.setVillage(currentDistrict.id)
      }

      // find districts
      if (currentData.district_id != null) {
        let districts = this.props.func.volunteerForm.districtList
        let currentDistrict = districts.find(d => d.id === currentData.district_id)
        this.props.func.setDistrict(currentDistrict.id)
      }
    }
  }

  render() {
    let { data } = this.props

    return (
      <Item stackedLabel>
        <Label>{ this.props.label }</Label>
          <Picker
            mode="dropdown"
            style={{ width:(Platform.OS === 'ios') ? undefined : width - 60 }}
            renderHeader={ backAction =>
              <Header style={{ backgroundColor: "#F9BF3B" }}>
                <Left>
                  <Button transparent onPress={backAction}>
                    <Icon name="arrow-back" style={{ color: "#fff" }} />
                  </Button>
                </Left>
                <Body style={{ flex: 3 }}>
                  <Title style={{ color: "#fff" }}>Pilih { this.props.label }</Title>
                </Body>
                <Right />
              </Header>
            }
            selectedValue={this.props.selected}
            // onValueChange={this.onValueChange.bind(this)}
            onValueChange={ (v) => this.onValueChange(v) }
          >
            {
              data.map((list, index) => {
                return (
                  <Picker.Item key={index} label={list.name} value={list.id} />
                )
              })
            }
          </Picker>
      </Item>
    );
  }
}
