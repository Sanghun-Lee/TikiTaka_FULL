import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class ProjectInfoSubtitleBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center vertical>
          <Text style={styles.text}>프로젝트 참여 인원</Text>
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(229,230,231,1)"
  },
  text: {
    left: 18.24,
    color: "#121212",
    position: "absolute",
    fontSize: 12
  }
});
