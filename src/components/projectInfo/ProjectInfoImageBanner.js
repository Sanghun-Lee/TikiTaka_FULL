import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Center } from "@builderx/utils";

export default class ProjectInfoImageBanner extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center horizontal>
          <Image
            source={require("../../assets/ProjectBanner.png")}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  image: {
    width: 375,
    height: 188,
    position: "absolute",
    bottom: 0
  }
});
