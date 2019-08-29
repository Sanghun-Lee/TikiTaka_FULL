import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class StartToGuest extends Component {
  static containerStyle = {
    width: 96,
    height: 39
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>비회원으로 시작</Text>
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
    color: "rgba(185,185,185,1)"
  }
});
