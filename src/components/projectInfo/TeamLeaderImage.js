import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class TeamLeaderImage extends Component {
  render() {
    return <View style={[styles.root, this.props.style]} />;
  }
}

const styles = StyleSheet.create({
  root: {
    opacity: 1
  }
});
