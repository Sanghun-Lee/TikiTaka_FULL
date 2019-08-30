import React, { Component } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class APIButton extends Component {
  static propTypes = {
    imgsrc: PropTypes.number.isRequired,
    onPress: PropTypes.func.isRequired
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image source={this.props.imgsrc} style={styles.image}></Image>
      </TouchableOpacity>
    );
  }
}

export default APIButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    height: 37,
    width: 37
  }
});
