import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import StatusBar from "../components/common/StatusBar";
import Logo from "../components/login/common/Logo";
import Button from "../components/login/common/Button";

import ExplanationBox from "../components/login/passwrodFind/ExplanationBox";
import EmailInput from "../components/login/passwrodFind/EmailInput";

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
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 1 }, styles.allCenter]}>
            <Button
              text="로그인 페이지로"
              onPress={() => {
                alert("로그인 페이지로");
              }}
            />
          </View>
          <View style={[{ flex: 1 }, styles.allCenter]}>
            <Button
              text="메일 전송"
              onPress={() => {
                alert("메일 전송");
              }}
            />
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

export default PasswordFind;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  allCenter: {
    justifyContent: "center",
    alignItems: "center"
  }
});
