import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class MailSend extends Component {
  static containerStyle = {
    width: 97,
    height: 3
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>메일 전송</Text>
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
    color: "rgba(185,185,185,1)",
    fontSize: 10
  }
});
