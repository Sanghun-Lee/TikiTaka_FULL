import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class ExplanationBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>가입한 이메일 주소를 입력해주세요.</Text>
        <Text style={styles.text2}>
          가입한 이메일로 비밀번호 재설정 페이지가 전송됩니다.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    borderRadius: 13,
    width: 302,
    height: 76
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "rgba(185,185,185,1)",
    marginTop: 20,
    marginLeft: 20
  },
  text2: {
    backgroundColor: "transparent",
    fontSize: 11,
    color: "rgba(185,185,185,1)",
    marginLeft: 20
  }
});
