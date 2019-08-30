import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

export default class EmailInput extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          returnKeyType="done"
          placeholderTextColor="rgba(185,185,185,1)"
        ></TextInput>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: 300,
    height: 38,
    fontSize: 15,

    borderRadius: 13,
    borderColor: "rgba(239,239,239,1)",
    borderWidth: 1,

    paddingLeft: 10
  }
});
