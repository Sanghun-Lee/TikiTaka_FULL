import React, {Component} from 'react';

import SnsList from '../components/loginPage/SnsList';
import Loginbox from '../components/loginPage/Loginbox';

import PasswordReset from '../components/loginPage/PasswordReset';
import StartToGuest from '../components/loginPage/StartToGuest';
import CreataccountBtn from '../components/loginPage/CreataccountBtn';
import SlogunText from '../components/loginPage/SlogunText';
import LoginBtn from '../components/loginPage/LoginBtn';
import {View, StyleSheet, Image, StatusBar} from 'react-native';

export default class LoginPage extends Component {
  render () {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <SnsList style={styles.snsList} />
        <Image
          source={require ('../assets/tikitakaLogo.png')}
          style={styles.image}
        />
        <Loginbox style={styles.loginbox2} />
        <PasswordReset
          style={styles.passwordReset}
          navigation={this.props.navigation}
        />
        <StartToGuest style={styles.startToGuest} />
        <CreataccountBtn style={styles.creataccountBtn} />
        <SlogunText style={styles.slogunText} />
        <LoginBtn style={styles.loginBtn} navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  root: {
    backgroundColor: 'white',
    flex: 1,
  },

  snsList: {
    position: 'absolute',
    top: 358,
    height: 37,
    width: 233,
    left: '18.93%',
  },

  image: {
    height: 209,
    width: 159,
    top: 100,
    left: 109,
    position: 'absolute',
  },
  statusBar: {},

  loginbox2: {
    top: 420,
    left: 37,
    position: 'absolute',
    height: 84,
    width: 207,
  },
  passwordReset: {
    top: 520,
    left: 37,
    position: 'absolute',
    height: 39,
    width: 98,
  },
  startToGuest: {
    top: 520,
    left: 140,
    position: 'absolute',
    height: 39,
    width: 96,
  },
  creataccountBtn: {
    top: 520,
    left: 242,
    position: 'absolute',
    height: 39,
    width: 97,
  },
  slogunText: {
    position: 'absolute',
    top: 318,
    left: 106,
    height: 12,
    width: 169,
  },
  loginBtn: {
    position: 'absolute',
    top: 420,
    left: 248,
    height: 85,
    width: 91,
  },
});
