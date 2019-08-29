import React, { Component } from "react";
import { Center } from "@builderx/utils";
import IdInput from "./IdInput";
import PassInput from "./PassInput";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export default class Loginbox extends Component {
  static containerStyle = {
    width: 205,
    height: 20
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <IdInput style={styles.idInput} />
        <PassInput style={styles.passInput} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    borderRadius: 17,

    paddingBottom: 10,
    paddingTop: 10
  },
  idInput: {
    height: 39,
    width: 205,
    position: "absolute",
    top: 0,
    left: 0
  },
  passInput: {
    height: 39,
    width: 205,
    position: "absolute",
    left: 0,
    bottom: 0
  }
});
