import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';

import Logo from '../components/login/common/Logo';
import APIButtonList from '../components/login/loginPage/APIButtonList';
import LoginForm from '../components/login/loginPage/LoginForm';
import Bottom from '../components/login/loginPage/Bottom';

import StatusBar from '../components/common/StatusBar';

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar />
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <Logo />
          </View>
          <View style={{flex: 1}}>
            <View style={{flex: 3}}>
              <APIButtonList navigation={this.props.navigation} />
            </View>
            <View style={{flex: 5}}>
              <LoginForm navigation={this.props.navigation} />
            </View>
            <View style={{flex: 3}}>
              <Bottom navigation={this.props.navigation} />
            </View>
            <View style={{flex: 5}} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
