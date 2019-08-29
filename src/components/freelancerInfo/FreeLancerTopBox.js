import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Center } from "@builderx/utils";
import FreeLancerProfileImage from "./FreeLancerProfileImage";

export default class FreeLancerTopBox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../../assets/yuHongman.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <View style={styles.rect} />
        <Center horizontal>
          <FreeLancerProfileImage style={styles.freeLancerProfileImage} />
        </Center>
        <Center horizontal>
          <Text style={styles.text}>고민우</Text>
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
    top: 0,
    left: 0,
    width: 375,
    height: 154,
    position: "absolute"
  },
  rect: {
    top: 160,
    left: 0,
    width: 375,
    height: 43,
    backgroundColor: "#e5e6e7",
    position: "absolute"
  },
  freeLancerProfileImage: {
    top: 75,
    width: 135,
    height: 120,
    position: "absolute"
  },
  text: {
    top: 180,
    color: "#121212",
    position: "absolute",
    fontSize: 15,
    fontWeight: "bold"
  }
});
