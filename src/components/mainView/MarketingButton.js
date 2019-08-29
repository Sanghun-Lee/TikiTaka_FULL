import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Center } from "@builderx/utils";

export default class MarketingButton extends Component {
  render() {
    return (
      <TouchableOpacity 
        style={[styles.root, this.props.style]}
        onPress={()=>{this.props.navigation.navigate("MainCategory")}}
      >
        <Center>
          <Image
            source={require("../../assets/KateMarket.png")}
            resizeMode={"contain"}
            style={styles.image}
          />
        </Center>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
  image: {
    width: 41.67,
    height: 41.67,
    position: "absolute"
  }
});
