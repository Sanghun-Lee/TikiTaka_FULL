import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class IdInput extends Component {
  static containerStyle = {
    width: 205,
    height: 3
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          style={styles.textInput}
          placeholder="UserID@Tikitaka.com"
          returnKeyType="done"
          placeholderTextColor="rgba(185,185,185,1)"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 13,

    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    alignItems: "center"
  },
  textInput: {
    width: 190,
    height: 34,
    flex: 1,
    alignSelf: "center",
    fontSize: 15,
    lineHeight: 15,
    color: "#000",
    textAlign: "left"
  }
});
