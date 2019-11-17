//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

// create a component
class Category extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ witdh: 44, height: 57 }}
      >
        <Ionicons name={this.props.name} size={44} color="#38C8EC" />
        <Text style={{ textAlign: "center" }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  eachSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

//make this component available to the app
export default Category;
