import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  static propTypes = {
    subtitle: PropTypes.string.isRequired,
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitleText}>{this.props.subtitle}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#E5E6E7',
    height: 21,
  },
  subtitleText: {
    color: 'black',
    textAlignVertical: 'center',
    marginLeft: 18,
  },
});
