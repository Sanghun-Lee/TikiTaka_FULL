import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import APIButton from './APIButton';

class APIButtonList extends Component {
  render () {
    return (
      <View style={styles.container}>
        <APIButton
          onPress={() => alert ('KakaoButton Press')}
          imgsrc={require ('../../../../assets/images/login/LoginPage/LoginKakao.png')}
        />
        <APIButton
          imgsrc={require ('../../../../assets/images/login/LoginPage/LoginFacebook.png')}
          onPress={() => alert ('Facebook Button onPress')}
        />
        <APIButton
          imgsrc={require ('../../../../assets/images/login/LoginPage/LoginGoogle.png')}
          onPress={() => alert ('Google Button onPress')}
        />
        <APIButton
          imgsrc={require ('../../../../assets/images/login/LoginPage/LoginNaver.png')}
          onPress={() => alert ('Naver Button onPress')}
        />
      </View>
    );
  }
}

export default APIButtonList;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 71,
    marginLeft: 71,
  },
});
