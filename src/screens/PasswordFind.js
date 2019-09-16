import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Logo from '../components/passwordFind/Logo';
import Button from '../components/passwordFind/Button';

import ExplanationBox from '../components/passwordFind/ExplanationBox';
import EmailInput from '../components/passwordFind/EmailInput';

class PasswordFind extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <View style={{ flex: 5 }}>
          <Logo />
        </View>
        <View style={[{ flex: 2 }, styles.allCenter]}>
          <ExplanationBox />
        </View>
        <View style={{ flex: 1 }}>
          <EmailInput />
        </View>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={[{ flex: 1 }, styles.allCenter]}>
            <Button text="로그인 페이지로" onPress={this._goToLoginPage} />
          </View>
          <View style={[{ flex: 1 }, styles.allCenter]}>
            <Button text="메일 전송" onPress={this._sendMailButton} />
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }

  _goToLoginPage = () => {
    this.props.navigation.goBack();
  };
  _sendMailButton = () => {
    alert('메일 전송 버튼');
  };
}

export default PasswordFind;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  allCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
