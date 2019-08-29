import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Center } from "@builderx/utils";

export default class FreeLancerProfileImage extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Center horizontal>
          <Image
            source={require("../../assets/5277e6053b81e0d85fa6970269c1abc44.jpg")}
            resizeMode={"stretch"}
            style={styles.image}
          />
        </Center>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  image: {
    top: 0,
    width: 99,
    height: 99,
    position: "absolute",
    borderRadius: 10,
    borderColor: "rgba(53,203,238,1)",
    borderWidth: 3
  }
});
