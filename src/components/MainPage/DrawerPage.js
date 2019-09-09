//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
// create a component
class DrawerPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#38C8EC',
          padding: 10,
        }}
      >
        <View style={{flex: 5}}>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
            onPress={this._PressMyPage}
          >
            <Image
              style={{height: 85, width: 85}}
              source={require('../../../assets/images/SubPage/SideProfile01.png')}
            />
            <Text style={{color: 'white', fontSize: 15, marginTop: 15}}>
              고민우
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 8}}>
          {this._drawerSection('ios-text', '채팅방', this._PressChattingButton)}
          {this._drawerSection(
            'md-clipboard',
            '내 프로젝트',
            this._PressMyProjectButton
          )}
          {this._drawerSection(
            'ios-people',
            '내 동아리',
            this._PressMyCircleButton
          )}
          {this._drawerSection(
            'md-heart',
            '좋아요 목록',
            this._PressMyFavoriteButton
          )}
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            borderTopWidth: StyleSheet.hairlineWidth,
            borderTopColor: 'white',
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              style={{marginLeft: 15}}
              onPress={this._PressSettingButton}
            >
              <Ionicons name="md-settings" size={32} color="#D2F4FF" />
            </TouchableOpacity>
          </View>

          <View
            style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}
          >
            <TouchableOpacity
              style={{marginRight: 15}}
              onPress={this._PressLogoutButton}
            >
              <Ionicons name="ios-log-out" size={32} color="#D2F4FF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _drawerSection = (name, text, onPress) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          borderTopWidth: 0.7,
          borderTopColor: 'white',
        }}
        onPress={onPress}
      >
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Ionicons name={name} size={44} color="#D2F4FF" />
        </View>
        <View style={{flex: 6, justifyContent: 'center', marginLeft: 15}}>
          <Text style={{color: 'white', fontSize: 15}}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default DrawerPage;
