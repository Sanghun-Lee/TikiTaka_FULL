//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import DrawerSection from './DrawerSection';
// create a component
class DrawerPage extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 5 }}>
          <TouchableOpacity style={styles.center} onPress={this._PressMyPage}>
            <Image
              style={{ height: 85, width: 85 }}
              source={require('../../../assets/images/Rayon.png')}
            />
            <Text style={styles.nameText}>{this.props.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 8 }}>
          <DrawerSection
            iconName="ios-text"
            text="채팅방"
            onPress={this._PressChattingButton}
          />
          <DrawerSection
            iconName="md-clipboard"
            text="내 프로젝트"
            onPress={this._PressMyProjectButton}
          />
          <DrawerSection
            iconName="ios-people"
            text="내 동아리"
            onPress={this._PressMyCircleButton}
          />
          <DrawerSection
            iconName="md-heart"
            text="좋아요 목록"
            onPress={this._PressMyFavoriteButton}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.settingView}>
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={this._PressSettingButton}
            >
              <Ionicons name="md-settings" size={32} color="#D2F4FF" />
            </TouchableOpacity>
          </View>
          <View style={styles.logoutView}>
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={this._PressLogoutButton}
            >
              <Ionicons name="ios-log-out" size={32} color="#D2F4FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _PressMyPage = () => {
    this.props.navigation.navigate('MyPage');
  };
  _PressChattingButton = () => {
    this.props.navigation.navigate('ChattingList');
  };
  _PressMyProjectButton = () => {
    this.props.navigation.navigate('MyProject');
  };
  _PressMyCircleButton = () => {
    this.props.navigation.navigate('MyCircle');
  };
  _PressMyFavoriteButton = () => {
    this.props.navigation.navigate('FavoriteList');
  };
  _PressSettingButton = () => {
    this.props.navigation.navigate('Setting');
  };
  _PressLogoutButton = () => {
    this.props.navigation.navigate('LoginPage');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#38C8EC',
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 15,
    marginTop: 15,
  },
  bottom: {
    flex: 2,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'white',
  },
  settingView: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  logoutView: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default DrawerPage;
