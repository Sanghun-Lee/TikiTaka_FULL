import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class BackToLoginPage extends Component {
  static containerStyle = {
    width: 97,
    height: 3
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("LoginPage")}}
      >
        <Text style={styles.text}>로그인 페이지로</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    backgroundColor: "transparent",
    color: "rgba(185,185,185,1)",
    fontSize: 10
  }
});
