import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default class PassInput extends Component {
  static containerStyle = {
    width: 205,
    height: 3
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
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
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)"
  },
  textInput: {
    width: 190,
    height: 39,
    flex: 1,
    alignSelf: "center",
    fontSize: 15,
    lineHeight: 15,
    color: "#000"
  }
});
