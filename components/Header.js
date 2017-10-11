import React, { Component } from 'react';
import { STATUS_BAR_HEIGHT } from '../constants';
import { Entypo } from '@expo/vector-icons';
import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Subtitle,
  Button
} from "native-base";
import { Platform, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

class DefaultHeader extends Component {
  defaultState = {
    showButton: true,
    action: () => alert("menu clicked"),
    style: {
      container: {
        height: Platform.OS ==='android' ? 35 : 45
      },
      iconName: 'ios-contact',
      fontSize: 30,
      icon: {
        color: "#fff"
      },
      marginTop: Platform.OS ==='android' ? STATUS_BAR_HEIGHT : 0
    }
  };

  render() {
    renderLeft = (state) => {
      if (state.showButton) {
        return <Left style={state.style}>{renderButton(state)}</Left>;
      } else {
        return <Left />;
      }
    }
    renderButton = (state) => {
      return  <Button transparent style={{marginTop: _headerMarginHack()}} onPress={state.action}>
                <Entypo name={state.style.iconName} size={state.style.fontSize} style={state.style.icon} />
              </Button>;
    }

    _headerHack = () => {
      let iphoneXHeader;

      iphoneXHeader = STATUS_BAR_HEIGHT == 44 ? STATUS_BAR_HEIGHT + 35 : 65;

      return Platform.OS === 'android' ? 60 + STATUS_BAR_HEIGHT : iphoneXHeader;
    }

    _headerLogo = () => {
      let iphoneXHeader;

      iphoneXHeader = STATUS_BAR_HEIGHT == 44 ? 38 : 32;

      return {
        marginTop: Platform.OS ==='android' ? 8 : iphoneXHeader,
        width: Platform.OS ==='android' ? 50 : 80,
        height: Platform.OS ==='android' ? 50 : 80
      };
    }

    _headerMarginHack = () => {
      let iphoneXHeader;

      iphoneXHeader = STATUS_BAR_HEIGHT == 44 ? 14 : 8;

      return Platform.OS ==='android' ? 15 : iphoneXHeader;
    }

    return (
      <Header
        style={{
          height: _headerHack()
        }}
        androidStatusBarColor = {Colors.tintColor}
        backgroundColor = {Colors.tintColor}
        iosBarStyle="light-content"
      >
        <Left>
          <TouchableOpacity
            style={{marginTop: _headerMarginHack()}}
            onPress={() => this.props.navigate('DrawerOpen')}>
            <Image
              source={require('../assets/icons/app-icon.png')}
              style={_headerLogo()}
            />
          </TouchableOpacity>
        </Left>

        <Body style={{ height: Platform.OS ==='android' ? 10 + STATUS_BAR_HEIGHT : 35 }}>
          <Title style={{ color: "#FFF", marginTop: _headerMarginHack() }}>{this.props.title}</Title>
        </Body>

        <Right>
          {/*<TouchableOpacity
            style={{marginTop: _headerMarginHack()}}
            onPress={() => this.props.navigate('DrawerOpen')}>
            <Entypo name='menu' size={30} style={{color: "#fff", marginTop: Platform.OS ==='android' ? 10 : 0}} />
          </TouchableOpacity>*/}
        </Right>

      </Header>
    );
  }
}

export default DefaultHeader;

const styles = StyleSheet.create({

});
