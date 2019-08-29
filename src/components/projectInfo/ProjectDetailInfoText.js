import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class ProjectDetailInfoText extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center>
          <Text style={styles.text}>Load to project info</Text>
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  text: {
    color: "#121212",
    position: "absolute"
  }
});
