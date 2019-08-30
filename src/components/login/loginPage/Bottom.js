import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Button from "../common/Button";

class Bottom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          text="비밀번호 재설정"
          onPress={() => alert("비밀번호 재설정")}
        />
        <Button
          text="비회원으로 시작"
          onPress={() => alert("비회원으로 시작")}
        />
        <Button text="회원가입" onPress={() => alert("회원가입")} />
      </View>
    );
  }
}

export default Bottom;

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    marginLeft: 25,
    marginTop: 7,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
