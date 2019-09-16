//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';

// create a component
class TextBox extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    password: PropTypes.bool,
    buttonText: PropTypes.string,
    buttonOnPress: PropTypes.func,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 15 }}>{this.props.text}</Text>
        </View>
        <View style={{ flex: 4 }}>
          {this.props.password ? (
            <TextInput style={styles.textInput} secureTextEntry={true} />
          ) : (
            <TextInput style={styles.textInput} />
          )}
        </View>
        <View style={{ flex: 1 }}>
          {this.props.buttonText !== undefined ? (
            <TouchableOpacity
              style={styles.button}
              onPress={this.props.buttonOnPress}
            >
              <Text style={styles.buttonText}>{this.props.buttonText}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginLeft: 15,
  },
  textInput: {
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    marginHorizontal: 5,
    paddingLeft: 15,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  button: {
    backgroundColor: 'skyblue',
    height: 30,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 11,
  },
});

//make this component available to the app
export default TextBox;
