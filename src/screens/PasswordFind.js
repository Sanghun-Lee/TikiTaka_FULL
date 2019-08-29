import React, {Component} from 'react';
import SnsList from '../components/loginPage/SnsList';
import Loginbox from '../components/loginPage/Loginbox';
import SlogunText from '../components/loginPage/SlogunText';
import BackToLoginPage from '../components/passwordFind/BackToLoginPage';
import MailSend from '../components/passwordFind/MailSend';
import ExplanationBox from '../components/passwordFind/ExplanationBox';
import {Center} from '@builderx/utils';
import EmailInput from '../components/passwordFind/EmailInput';
import {View, StyleSheet, StatusBar, Image} from 'react-native';

export default class PasswordFind extends Component {
  render () {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <SnsList style={styles.snsList} />
        <Loginbox style={styles.loginbox} />
        <Image
          style={styles.image}
          source={require ('../assets/tikitakaLogo.png')}
        />
        <SlogunText style={styles.slogunText} />
        <BackToLoginPage
          style={styles.backToLoginPage}
          navigation={this.props.navigation}
        />
        <MailSend style={styles.mailSend} />
        <ExplanationBox style={styles.explanationBox} />
        <Center horizontal>
          <EmailInput style={styles.emailInput} />
        </Center>
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
    top: 52.94,
    left: -297.17,
    position: 'absolute',
    height: 85,
    width: 287,
  },
  loginbox: {
    top: 173.21,
    left: -375.76,
    position: 'absolute',
    height: 20,
    width: 205,
  },
  statusBar: {},
  image: {
    top: 100,
    left: 109,
    width: 159,
    height: 209,
    position: 'absolute',
  },
  slogunText: {
    top: 318,
    left: 106,
    width: 169,
    height: 12,
    position: 'absolute',
  },
  backToLoginPage: {
    position: 'absolute',
    top: 548,
    left: 37,
    height: 39,
    width: 96,
  },
  mailSend: {
    position: 'absolute',
    top: 548,
    left: 242,
    height: 39,
    width: 97,
  },
  explanationBox: {
    position: 'absolute',
    top: 365,
    height: 77,
    width: 302,
    left: '9.87%',
  },
  emailInput: {
    position: 'absolute',
    top: 462,
    height: 39,
    width: 303,
  },
});
