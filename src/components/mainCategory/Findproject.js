import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default class Findproject extends Component {
  render() {
    return (
      <TouchableOpacity 
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("PortfolioInfo")}}
      >
        <Image
          source={require("../../assets/FindProject.png")}
          resizeMode={"cover"}
          style={styles.image}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  image: {
    top: 0,
    left: "0%",
    width: 201,
    height: 611,
    position: "absolute"
  },
  button: {
    top: 1,
    left: 1,
    width: 200,
    height: 611,
    position: "absolute",
    overflow: "hidden"
  }
});
