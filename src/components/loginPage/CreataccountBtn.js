import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, Text, StyleSheet } from "react-native";

export default class CreataccountBtn extends Component {
  static containerStyle = {
    width: 97,
    height: 39
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>회원가입</Text>
      </View>
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
    fontSize: 10,
    //fontFamily: "ArialMT",
    color: "rgba(185,185,185,1)"
  }
});
