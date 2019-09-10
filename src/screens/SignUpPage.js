//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Button} from 'native-base';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import StatusBar from '../components/common/StatusBar';
import Header from '../components/FavoriteList/Header';
import TextBox from '../components/login/SignUp/TextBox';

// create a component
class SignUpPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} title="회원가입" />
        <View style={{flex: 3, marginTop: 50, marginLeft: 15}}>
          <TextBox text="이메일" button={true} />
          <TextBox text="비밀번호" password={true} />
          <TextBox text="비밀번호 확인" password={true} />
          <TextBox text="이름" />
          <TextBox text="닉네임" button={true} />
          <View style={styles.buttonViewStyle}>
            <Button
              rounded
              info
              style={styles.buttonStyle}
              onPress={() => alert('가입하기')}
            >
              <Text style={{color: 'white'}}>가입하기</Text>
            </Button>
            <Button
              rounded
              info
              style={styles.buttonStyle}
              onPress={this.cancel}
            >
              <Text style={{color: 'white'}}>취소</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
  cancel = () => {
    this.props.navigation.goBack();
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default SignUpPage;
