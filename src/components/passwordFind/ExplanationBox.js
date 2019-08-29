import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet } from "react-native";

export default class ExplanationBox extends Component {
  static containerStyle = {
    width: 302,
    height: 7
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>가입한 이메일 주소를 입력해주세요.</Text>
        <Text style={styles.text2}>가입한 이메일로 비밀번호 재설정 페이지가 전송됩니다.</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    borderRadius: 13
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 10,
    color: "rgba(185,185,185,1)",
    position: "absolute",
    top: 20,
    left: 17,
    height: 11,
    width: 150
  },
  text2: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 10,
    color: "rgba(185,185,185,1)",
    left: "5.63%",
    top: "53.25%"
  }
});
