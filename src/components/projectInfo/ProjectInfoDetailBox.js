import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Center } from "@builderx/utils";
import ProjectDetailInfoText from "./ProjectDetailInfoText";

export default class ProjectInfoDetailBox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center horizontal>
          <View style={styles.rect} />
        </Center>
        <Text style={styles.text}>프로젝트 상세 정보</Text>
        <ProjectDetailInfoText style={styles.projectDetailInfoText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 21,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  text: {
    top: 5,
    left: 18,
    color: "#121212",
    position: "absolute",
    fontSize: 12
  },
  projectDetailInfoText: {
    top: 40,
    left: 45.5,
    width: 284,
    height: 198,
    position: "absolute"
  }
});
