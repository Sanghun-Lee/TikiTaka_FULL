import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Center } from "@builderx/utils";

export default class DocumentButton extends Component {
  render() {
    return (
      <TouchableOpacity 
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("MainCategory")}}
      >
        <Center>
          <Image
            source={require("../../assets/KateFile.png")}
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
