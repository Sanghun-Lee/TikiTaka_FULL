import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SlogunText extends Component {
  static containerStyle = {
    width: 169,
    height: 12
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.text}>LIKE A PING - PONG TABLE</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    backgroundColor: "transparent",
    fontSize: 13,
    color: "rgba(109,203,232,1)"
  }
});
