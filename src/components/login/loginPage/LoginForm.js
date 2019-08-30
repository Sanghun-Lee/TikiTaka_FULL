import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import LoginInput from "./LoginInput";
import LoginButton from "./LoginButton";

class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputForm}>
          <LoginInput isPassword={false} />
          <LoginInput isPassword={true} />
        </View>
        <View style={styles.loginButtonForm}>
          <LoginButton onPress={() => alert("LoginButton Press")} />
        </View>
      </View>
    );
  }
}

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  textInputForm: {
    flex: 2,
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginRight: 5
  },
  loginButtonForm: {
    flex: 1,
    justifyContent: "center"
  }
});
