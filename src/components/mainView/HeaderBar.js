import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "@builderx/icons";

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.leftWrapper}>
          <TouchableOpacity style={styles.leftIconButton}>
            <Icon name={"ios-menu"} type={"Ionicons"} style={styles.leftIcon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          style={styles.button2}
          onPress={()=>{this.props.navigation.navigate("MainScrollView")}}
        >
          <Text numberOfLines={1} style={styles.title}>
            티키타카
          </Text>
        </TouchableOpacity>
        <View style={styles.rightWrapper}>
          <TouchableOpacity style={styles.button}>
            <Icon
              name={"md-search"}
              type={"Ionicons"}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#1EC8FF",
    flexDirection: "row",
    paddingRight: 8,
    paddingLeft: 8
  },
  leftWrapper: {
    flex: 0.33,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#FFFFFF",
    fontSize: 32
  },
  button2: {
    flex: 0.33,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 17
  },
  rightWrapper: {
    flex: 0.33,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  button: {},
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 32
  }
});
