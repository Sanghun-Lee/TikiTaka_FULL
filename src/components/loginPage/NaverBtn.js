import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default class NaverBtn extends Component {
  static containerStyle = {
    width: 37,
    height: 3
  };
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Center>
          <Image
            source={require("../../assets/naver_icon.png")}
            style={styles.image}
          />
        </Center>
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
    width: 38,
    position: "absolute"
  }
});
