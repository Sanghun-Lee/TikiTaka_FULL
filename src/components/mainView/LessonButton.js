import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

export default class LessonButton extends Component {
  render() {
    return (
      <TouchableOpacity 
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("MainCategory")}}
      >
        <Image
          source={require("../../assets/Kateless.png")}
          resizeMode={"contain"}
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
    left: 0,
    width: 42.33,
    height: 42.33,
    position: "absolute",
    flexDirection: "row"
  }
});
