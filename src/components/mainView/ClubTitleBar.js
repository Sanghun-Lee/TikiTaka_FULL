import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import ClubTitleBarFuctionButton from "./ClubTitleBarFuctionButton";

export default class ClubTitleBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../../assets/daeguCircle01.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Text style={styles.text}>대구대학교 사진동아리</Text>
        <Text style={styles.text2}>오후 12:08</Text>
        <ClubTitleBarFuctionButton style={styles.clubTitleBarFuctionButton} />
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
    width: 33,
    height: 33,
    position: "absolute"
  },
  text: {
    top: "13.64%",
    left: 43.59,
    color: "#121212",
    position: "absolute",
    fontSize: 12,
    fontWeight: "bold"
  },
  text2: {
    top: 19,
    left: 43.59,
    color: "#121212",
    position: "absolute",
    fontSize: 7
  },
  clubTitleBarFuctionButton: {
    top: -0.33,
    left: 308.67,
    width: 33.33,
    height: 33.33,
    position: "absolute"
  }
});
