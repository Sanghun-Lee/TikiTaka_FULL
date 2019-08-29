import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class FacebookBtn extends Component {
  static containerStyle = {
    width: 37,
    height: 3
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Image
          source={require("../../assets/facebook.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 37,
    width: 36,
    position: "absolute",
    left: "2.7%",
    top: "2.7%"
  }
});
