import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class FreeLancerDescription extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect} />
        <Text style={styles.text}>
          학년: 4학년{"\n"}대학: 영남대학교{"\n"}소속: 다이너마이트 동아리{"\n"}
          전공: 국어국문과{"\n"}복수전공: 원예학과{"\n"}연락처: 010 -1740 - 7940
          {"\n"}
          {"\n"}
          {"\n"}경력: 페럴림픽 스토리 공모전
        </Text>
        <View style={styles.rect1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  text: {
    top: 70,
    left: 55.28,
    color: "#121212",
    position: "absolute",
    fontSize: 22
  },
  rect: {
    top: 0,
    left: 0,
    width: 375,
    height: 3.68,
    backgroundColor: "#e5e6e7",
    position: "absolute"
  },
  rect1: {
    bottom: 0,
    left: 0,
    width: 375,
    height: 3.68,
    backgroundColor: "#e5e6e7",
    position: "absolute"
  }
});
