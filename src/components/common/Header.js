import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={() => {
            this.props.navigation.navigate(this.props.postScreen);
          }}
        >
          <Image
            source={require("../../../assets/images/Header/SideBack.png")}
            style={styles.searchIconImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>티키타카</Text>
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={() => {
            this.props.navigation.navigate("SearchScreen");
          }}
        >
          <Image
            source={require("../../../assets/images/Header/TitleBarSearch.png")}
            style={styles.searchIconImage}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

_handleSearchButton = () => {
  this.props.navigation.navigate("Search");
};
_handlePressBackButton = () => {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#35CBEE",
    flexDirection: "row",
    height: 43.26
  },
  backTextStyle: {
    fontSize: 13,
    color: "white",
    alignItems: "center"
  },
  headerText: {
    flex: 6,
    fontSize: 16,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center"
  },
  searchIconView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 13
  },
  searchIconImage: {
    height: 20,
    width: 20
  }
});
