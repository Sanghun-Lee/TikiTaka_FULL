import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

export default class StarRateBox extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Image
          source={require("../../assets/GradeDisable1.png")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Image
          source={require("../../assets/GradeDisable1.png")}
          resizeMode={"contain"}
          style={styles.image2}
        />
        <Image
          source={require("../../assets/GradeDisable1.png")}
          resizeMode={"contain"}
          style={styles.image3}
        />
        <Image
          source={require("../../assets/GradeDisable1.png")}
          resizeMode={"contain"}
          style={styles.image4}
        />
        <Image
          source={require("../../assets/GradeDisable1.png")}
          resizeMode={"contain"}
          style={styles.image5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  image: {
    width: 30,
    height: 30
  },
  image2: {
    width: 30,
    height: 30
  },
  image3: {
    width: 30,
    height: 30
  },
  image4: {
    width: 30,
    height: 30
  },
  image5: {
    width: 30,
    height: 30,
    flexDirection: "row"
  }
});
