import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/images/login/common/tikitakaLogo.png")}
          style={styles.LogoImage}
        />
        <Text style={styles.sloganText}>LIKE A PING - PONG TABLE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  LogoImage: {
    height: 209,
    width: 159,
    marginTop: 49
  },
  sloganText: {
    backgroundColor: "transparent",
    fontSize: 13,
    color: "rgba(109,203,232,1)"
  }
});
