import React, { Component } from "react"
import { Platform, Dimensions } from "react-native"
import { Header, Body, Left, Right, Title, Button, Icon, Label, Picker, Item } from "native-base";

var {height, width} = Dimensions.get('window')

export default class SelectPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }

  onValueChange(value: string) {
    this.props.select(value)
  }

  render() {
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
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
      </Item>
    );
  }
}
