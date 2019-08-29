import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";

export default class ProjectInfoLeader extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center horizontal>
          <Image
            source={require("../../assets/5277e6053b81e0d85fa6970269c1abc42.jpg")}
            resizeMode={"contain"}
            style={styles.image}
          />
        </Center>
        <Text style={styles.text}>고민우</Text>
        <Text style={styles.text2}>프로젝트 팀장</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  image: {
    top: 0,
    width: 81,
    height: 81,
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(53,203,238,1)",
    borderWidth: 3
  },
  text: {
    top: 83,
    left: "24.69%",
    width: 41,
    height: 21,
    color: "#121212",
    position: "absolute",
    fontSize: 15
  },
  text2: {
    top: 102,
    left: "12.35%",
    width: 61,
    height: 10,
    color: "#121212",
    position: "absolute",
    fontSize: 7,
    textAlign: "center"
  }
});
