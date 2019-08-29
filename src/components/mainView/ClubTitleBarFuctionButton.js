import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default class ClubTitleBarFuctionButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Image
          source={require("../../assets/ViewMore.png")}
          resizeMode={"contain"}
          style={styles.image2}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white"
  },
  image2: {
    top: 0,
    left: 0,
    width: 33.33,
    height: 33.33,
    position: "absolute"
  }
});
