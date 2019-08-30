import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

class LoginButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    );
  }
}

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    width: 91,
    height: 84,
    backgroundColor: "rgba(239,239,239,1)",
    opacity: 1,
    borderWidth: 1,
    borderColor: "rgba(239,239,239,1)",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 18,
    color: "rgba(185,185,185,1)"
  }
});
