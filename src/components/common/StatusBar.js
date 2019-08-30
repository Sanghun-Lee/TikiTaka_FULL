import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

export default class StatusBar extends React.Component {
  render() {
    return <View style={styles.statusBar} />;
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#ff000f",
    height: Constants.statusBarHeight
  }
});
