import React, { Component } from "react";
import KakaoBtn from "./KakaoBtn";
import NaverBtn from "./NaverBtn";
import FacebookBtn from "./FacebookBtn";
import GoogleBtn from "./GoogleBtn";

import { View, StyleSheet } from "react-native";

export default class SnsList extends Component {
  static containerStyle = {
    width: 233,
    height: 3
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <KakaoBtn style={styles.kakaoBtn} />
        <NaverBtn style={styles.naverBtn} />
        <GoogleBtn style={styles.googleBtn} />
        <FacebookBtn style={styles.facebookBtn} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  kakaoBtn: {
    width: 37,
    height: 37
  },
  naverBtn: {
    width: 37,
    height: 37
  },
  facebookBtn: {
    width: 37,
    height: 37
  },
  googleBtn: {
    width: 38,
    height: 37
  }
});
