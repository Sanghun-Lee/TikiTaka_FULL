import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// 받아 올 props
// 사용자 아이디,
// 사용자 이름,
// 승인, 취소
// 승인 onPress
// 취소 onPress
export default class People extends Component {
  render() {
    return (
      <View style={{ height: 100, flexDirection: "row" }}>
        <Image
          source={require("../../../../assets/images/Rayon.png")}
          style={{ flex: 1, width: 80, height: 80 }}
        />
        <Text style={styles.text}>{this.props.name}</Text>
        {this.props.proove ? (
          <View style={styles.center}>
            <TouchableOpacity
              onPress={this.props.prooveOnPress}
              style={styles.proove}
            >
              <Text style={{ color: "white" }}>승인</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 1 }} />
        )}
        <View style={styles.center}>
          <TouchableOpacity
            onPress={this.props.cancelOnPress}
            style={styles.cancel}
          >
            <Text style={{ color: "white" }}>취소</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  proove: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 40,
    height: 40
  },
  cancel: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: 40,
    height: 40
  },
  text: {
    flex: 2,
    textAlign: "left",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  }
});
