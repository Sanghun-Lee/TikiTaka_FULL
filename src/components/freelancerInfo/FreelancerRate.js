import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import StarRateBox from "./StarRateBox";

export default class FreelancerRate extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.text}>사용자 평점</Text>
        <Text style={styles.text2}>총 13명의 평가</Text>
        <StarRateBox style={styles.starRateBox} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)"
  },
  text: {
    top: 20,
    left: 23,
    color: "#121212",
    position: "absolute",
    fontSize: 9
  },
  text2: {
    top: 70,
    left: 157.47,
    color: "#121212",
    position: "absolute",
    fontSize: 7
  },
  starRateBox: {
    top: 30,
    left: 91.62,
    width: 192,
    height: 29.67,
    position: "absolute"
  }
});
