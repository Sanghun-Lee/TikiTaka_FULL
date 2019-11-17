import React, { Component } from "react";
import { View, Text } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Header from "../components/common/Header";
import TextBox from "../components/inputForm/TextBox";
import TwoButton from "../components/inputForm/TwoButton";

export default class PasswordChange extends Component {
  state = {
    pre_password: "",
    password: "",
    passwordConfirm: ""
  };

  render() {
    return (
      <View>
        <StatusBar />
        <Header centerText="비밀번호 수정" navigation={this.props.navigation} />
        <TextBox
          text="기존 비밀번호"
          password={true}
          value={this.state.pre_password}
          onChangeText={pre_password => this.setState({ pre_password })}
        />
        <TextBox
          text="새 비밀번호"
          password={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TextBox
          text="비밀번호 확인"
          password={true}
          value={this.state.passwordConfirm}
          onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
        />
        <TwoButton
          Left="수정"
          LeftOnPress={this._ChangePassword}
          Right="취소"
          RightOnPress={this._pressBackButton}
        />
      </View>
    );
  }

  _ChangePassword = () => {
    alert(`이전 비밀번호 : ${this.state.pre_password}
      새 비밀번호 : ${this.state.password}
      새 비밀번호 확인 : ${this.state.passwordConfirm}`);
  };

  _pressBackButton = () => {
    this.props.navigation.goBack();
  };
}
