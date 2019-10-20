import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

export default class Category extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: false,
    onPress: () => this.props.navigation.navigate ('Category'),
  };

  render () {
    return (
      <TouchableOpacity
        style={this.props.value ? styles.marked : styles.not}
        onPress={this.props.onPress}
      >
        <Ionicons
          name={this.props.iconName}
          size={44}
          color={this.props.value ? 'white' : '#38C8EC'}
        />
        <Text style={this.props.value ? styles.markedText : styles.notText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create ({
  not: {
    width: 55,
    height: 65,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  marked: {
    width: 55,
    height: 65,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#38C8EC',
  },
  notText: {
    textAlign: 'center',
  },
  markedText: {
    color: 'white',
    textAlign: 'center',
  },
});
