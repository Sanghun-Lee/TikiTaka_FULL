//import libraries
import React, {Component} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import TextBox from '../components/inputForm/TextBox';
import Bottom from '../components/inputForm/TwoButton';

const user = {
  userId: '',
  password: '',
  passwordConfirm: '',
  name: '',
  nickname: '',
  location: '',
  organization: '',
};

// create a component
class SignUpPage extends Component {
  constructor (props) {
    super (props);
    this.state = {
      userId: '',
      password: '',
      passwordConfirm: '',
      name: '',
      nickname: '',
      location: '',
      organization: '',
      IdOverlapFlag: false,
      nicknameOverlapFlag: false,
    };
    // this._overlapChecking = this._overlapChecking.bind(this);
  }
  render () {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="회원가입" />
        <KeyboardAwareScrollView style={{flex: 1}}>
          <View style={{marginTop: 30}}>
            <TextBox
              text="이메일"
              buttonText="중복확인"
              buttonOnPress={this._userIdOverlapCheck}
              value={this.state.userId}
              onChangeText={userId => this.setState ({userId})}
            />
            <TextBox
              text="비밀번호"
              password={true}
              value={this.state.password}
              onChangeText={password => this.setState ({password})}
              returnKeyType="next"
            />
            <TextBox
              text="비밀번호 확인"
              password={true}
              value={this.state.passwordConfirm}
              onChangeText={passwordConfirm =>
                this.setState ({passwordConfirm})}
            />
            <TextBox
              text="이름"
              value={this.state.name}
              onChangeText={name => this.setState ({name})}
            />
            <TextBox
              text="닉네임"
              buttonText="중복확인"
              buttonOnPress={this._nicknameOverlapCheck}
              value={this.state.nickname}
              onChangeText={nickname => this.setState ({nickname})}
            />
            <TextBox
              text="거주 지역"
              value={this.state.location}
              onChangeText={location => this.setState ({location})}
            />
            <TextBox
              text="조직"
              value={this.state.organization}
              onChangeText={organization => this.setState ({organization})}
            />
            <Bottom
              Left="가입하기"
              LeftOnPress={this._SignUpOnPress}
              Right="취소"
              RightOnPress={this._pressBackButton}
            />
          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    );
  }

  _userIdOverlapCheck = () => {
    alert ('userId : ' + this.state.userId + ' 중복체크');
    this.setState ({IdOverlapFlag: true}); // 중복 없을때만 true로
  };
  _nicknameOverlapCheck = () => {
    alert ('nickname : ' + this.state.nickname + ' 중복체크');
    this.setState ({nicknameOverlapFlag: true}); // 중복 없을때만 true로 하기
  };

  _SignUpOnPress = () => {
    // 이거말고 더 좋은 방법은 없나?
    user.userId = this.state.userId;
    user.password = this.state.password;
    user.name = this.state.name;
    user.nickname = this.state.nickname;
    user.location = this.state.location;
    user.organization = this.state.organization;

    alert (
      'userId  : ' +
        user.userId +
        '\n비밀번호 : ' +
        user.password +
        '\n비밀번호 확인 : ' +
        this.state.passwordConfirm +
        '\n이름 : ' +
        user.name +
        '\n닉네임 : ' +
        this.state.nickname +
        '\nflag : ' +
        this.state.IdOverlapFlag +
        '\nnickname flag : ' +
        this.state.nicknameOverlapFlag +
        '\n\n비밀번호와 비밀번호 확인해서 두개가 다르면 다르다고 얘기해야 할것 같다.'
    );
  };
  _pressBackButton = () => {
    this.props.navigation.goBack ();
  };
}

// define your styles
const styles = StyleSheet.create ({
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
