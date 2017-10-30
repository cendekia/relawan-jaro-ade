import React, { Component } from 'react';
import { Platform, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { STATUS_BAR_HEIGHT } from '../../constants';
import { Entypo } from '@expo/vector-icons';

class HeaderLeftNav extends Component {
  _headerMarginHack = () => {
    let iphoneXHeader;

    iphoneXHeader = STATUS_BAR_HEIGHT == 44 ? 14 : 8;

    return Platform.OS ==='android' ? 15 : iphoneXHeader;
  }

  render() {
    console.log(this)
    return(
      <TouchableOpacity
        style={{marginTop: _headerMarginHack()}}
        onPress={() => this.props.navigate('Relawan')}>
        <Entypo name='archive' size={25} style={{color: "#fff", marginTop: Platform.OS ==='android' ? 10 : 0}} />
      </TouchableOpacity>
    )
  }
}

export default HeaderLeftNav
