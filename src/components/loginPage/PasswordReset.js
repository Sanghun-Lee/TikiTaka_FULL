import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class PasswordReset extends Component {
  static containerStyle = {
    width: 97,
    height: 39
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={
          this.props.root ? (
            this.props.root
          ) : (
            () => {
              this.props.navigation.push("PasswordFind");
            }
          )
        }
      >
        <Text style={styles.text}>비밀번호 재설정</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 10,
    //fontFamily: "ArialMT",
    color: "rgba(185,185,185,1)"
  }
});
