//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import TextBox from '../components/inputForm/TextBox';
import Bottom from '../components/inputForm/TwoButton';

// create a component
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      passwordConfirm: '',
      name: '',
      nickname: '',
      location: '',
      organization: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="회원가입" />
        <KeyboardAwareScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: 30 }}>
            <TextBox
              text="이메일"
              buttonText="중복확인"
              buttonOnPress={this._overlapChecking}
              value={this.state.userId}
              onChangeText={userId => this.setState({ userId })}
            />
            <TextBox
              text="비밀번호"
              password={true}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <TextBox
              text="비밀번호 확인"
              password={true}
              value={this.state.passwordConfirm}
              onChangeText={passwordConfirm =>
                this.setState({ passwordConfirm })
              }
            />
            <TextBox
              text="이름"
              value={this.state.name}
              onChangeText={name => this.setState({ name })}
            />
            <TextBox
              text="닉네임"
              buttonText="중복확인"
              buttonOnPress={this._overlapChecking}
              value={this.state.nickname}
              onChangeText={nickname => this.setState({ nickname })}
            />
            <TextBox
              text="거주 지역"
              value={this.state.location}
              onChangeText={location => this.setState({ location })}
            />
            <TextBox
              text="조직"
              value={this.state.organization}
              onChangeText={organization => this.setState({ organization })}
            />
            <Bottom
              Left="가입하기"
              LeftOnPress={this._SignUpOnPress}
              Right="취소"
              RightOnPress={this._pressBackButton}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
  _overlapChecking = () => {
    alert('중복 체크');
  };
  _SignUpOnPress = () => {
    alert(
      'userId  : ' +
        this.state.userId +
        '\n비밀번호 : ' +
        this.state.password +
        '\n비밀번호 확인 : ' +
        this.state.passwordConfirm +
        '\n이름 : ' +
        this.state.name +
        '\n닉네임 : ' +
        this.state.nickname,
    );
  };
  _pressBackButton = () => {
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
