import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class EmailInput extends Component {
  static containerStyle = {
    width: 302,
    height: 3
  };
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}
const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    borderRadius: 13
  }
});
