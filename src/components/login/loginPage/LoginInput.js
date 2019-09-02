import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class LoginInput extends Component {
  static propTypes = {
    isPassword: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.props.isPassword ? (
          // * ID input부분
          <TextInput
            style={styles.textInput}
            placeholder="UserID@Tikitaka.com"
            returnKeyType="done"
            placeholderTextColor="rgba(185,185,185,1)"
          />
        ) : (
          // * 비밀번호 input부분
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="rgba(185,185,185,1)"
          ></TextInput>
        )}
      </View>
    );
  }
}

export default LoginInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,1)',
    opacity: 1,
    borderRadius: 13,
    width: 205,
    height: 40,

    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(239,239,239,1)',
    alignItems: 'center',
  },
  textInput: {
    width: 190,
    height: 34,
    flex: 1,
    alignSelf: 'center',
    fontSize: 15,
    lineHeight: 15,
    color: '#000',
    textAlign: 'left',
  },
});
