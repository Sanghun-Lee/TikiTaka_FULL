import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class SendSuggestMessage extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../../assets/ProjectChat.png")}
          resizeMode={"stretch"}
          style={styles.image}
        />
        <Text style={styles.text}>참여 메세지 보내기</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#00cbee",
    borderRadius: 8,
    borderColor: "#00cbee",
    borderWidth: 1
  },
  image: {
    top: "12.78%",
    left: 77,
    width: 21.33,
    height: 20.33,
    position: "absolute"
  },
  text: {
    top: 8,
    left: 109,
    color: "#121212",
    position: "absolute",
    fontSize: 12
  }
});
