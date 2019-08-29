import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Center } from "@builderx/utils";

export default class FollowButton extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center>
          <Image
            source={require("../../assets/GradeDisable.png")}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  image: {
    width: 30,
    height: 30,
    position: "absolute"
  }
});
