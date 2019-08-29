import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import SendSuggestMessage from "./SendSuggestMessage";
import FollowButton from "./FollowButton";

export default class BottomActionBar extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <SendSuggestMessage style={styles.sendSuggestMessage} />
        <FollowButton style={styles.followButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)"
  },
  sendSuggestMessage: {
    top: "31.67%",
    left: 21,
    width: 278,
    height: 30,
    position: "absolute"
  },
  followButton: {
    top: "31.06%",
    left: 320,
    width: 30.5,
    height: 31,
    position: "absolute"
  }
});
