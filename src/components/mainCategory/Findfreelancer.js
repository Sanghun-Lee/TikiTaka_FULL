import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Center } from "@builderx/utils";

export default class Findfreelancer extends Component {
  render() {
    return (
      <TouchableOpacity 
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("ProjectInfo")}}
      >
        <Image
          source={require("../../assets/FindProfile.png")}
          resizeMode={"cover"}
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
    width: 200,
    height: 611,
    position: "absolute"
  },
  button: {
    left: 1,
    width: 199,
    height: 609,
    position: "absolute",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0,
    overflow: "hidden"
  }
});
