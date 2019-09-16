import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(239,239,239,1)',
    width: 97,
    height: 39,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 10,
    color: 'rgba(185,185,185,1)',
  },
});
