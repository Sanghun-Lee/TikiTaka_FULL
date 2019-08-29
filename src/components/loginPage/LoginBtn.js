import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class LoginBtn extends Component {
  static containerStyle = {
    width: 91,
    height: 84
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("MainScrollView")}}
        
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(239,239,239,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "rgba(185,185,185,1)"
  }
});
