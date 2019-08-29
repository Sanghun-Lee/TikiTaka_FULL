import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Center } from "@builderx/utils";

export default class ContentsmakingButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Center>
          <Image
            source={require("../../assets/KateCont.png")}
            resizeMode={"contain"}
            style={styles.image}
          />
        </Center>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  image: {
    width: 42,
    height: 42,
    position: "absolute"
  }
});
