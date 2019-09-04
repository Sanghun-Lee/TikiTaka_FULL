import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import {Content} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

import StatusBar from '../components/common/StatusBar';
import Advertise from '../components/common/SwiperFlatList';
import Category from '../components/MainPage/Category';
import TimeLine from '../components/MainPage/TimeLine';

class MainPage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      open: false,
    };
  }

  toggleOpen = () => {
    this.setState ({open: !this.state.open});
  };

  _PressMyPage = () => {
    this.props.navigation.navigate ('MyPage');
  };

  drawerContent = name => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#38C8EC',
          padding: 10,
        }}
      >
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity
            onPress={this.toggleOpen}
            style={{
              height: 40,
              width: 40,
              marginRight: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons name="ios-arrow-back" size={32} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{flex: 4}}>
          <TouchableOpacity
            style={{flex: 1, marginTop: 10, alignItems: 'center'}}
            onPress={this._PressMyPage}
          >
            <Image
              style={{height: 85, width: 85}}
              source={require ('../../assets/images/SubPage/SideProfile01.png')}
            />
            <Text style={{color: 'white', fontSize: 15, marginTop: 15}}>
              {name}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 8}}>
          {this._drawerSection ('ios-text', '채팅방', this._PressChattingButton)}
          {this._drawerSection (
            'md-clipboard',
            '내 프로젝트',
            this._PressMyProjectButton
          )}
          {this._drawerSection (
            'ios-people',
            '내 동아리',
            this._PressMyCircleButton
          )}
          {this._drawerSection (
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
  };

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

  _PressChattingButton = () => {
    this.props.navigation.navigate ('ChattingList');
  };
  _PressMyProjectButton = () => {
    this.props.navigation.navigate ('MyProject');
  };
  _PressMyCircleButton = () => {
    this.props.navigation.navigate ('MyCircle');
  };
  _PressMyFavoriteButton = () => {
    this.props.navigation.navigate ('FavoriteList');
  };
  _PressSettingButton = () => {
    this.props.navigation.navigate ('Setting');
  };
  _PressLogoutButton = () => {
    this.props.navigation.navigate ('LoginPage');
  };

  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={{flex: 1, zIndex: -1}}>
          <MenuDrawer
            open={this.state.open}
            drawerPercentage={80}
            animationTime={250}
            opacity={1}
            drawerContent={this.drawerContent ('고민우')}
          >
            <View style={styles.titleBar}>
              <TouchableOpacity style={styles.center} onPress={this.toggleOpen}>
                <Ionicons name="ios-menu" size={28} color="white" />
              </TouchableOpacity>
              <Text style={styles.tikitakaText}>티키타카</Text>
              <TouchableOpacity
                style={styles.center}
                onPress={this._PressSearchButton}
              >
                <Ionicons name="ios-search" size={28} color="white" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={{height: 170}}>
                <Advertise />
              </View>
              <View style={{height: 170, marginTop: 10, marginBottom: 10}}>
                <Category navigation={this.props.navigation} />
              </View>
              <Content>
                <TimeLine navigation={this.props.navigation} />
                <TimeLine navigation={this.props.navigation} />
              </Content>
            </ScrollView>
          </MenuDrawer>
        </View>
      </View>
    );
  }

  _PressSearchButton = () => {
    this.props.navigation.navigate ('Search');
  };
}

export default MainPage;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBar: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: '#38C8EC',
  },
  tikitakaText: {
    flex: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 16,
  },
});
