import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'native-base';

class TwoButton extends Component {
  static propTypes = {
    Left: PropTypes.string.isRequired,
    LeftOnPress: PropTypes.func.isRequired,
    Right: PropTypes.string.isRequired,
    RightOnPress: PropTypes.func.isRequired,
  };
  render() {
    return (
      <View style={styles.container}>
        <Button rounded info style={styles.buttonStyle} onPress={this.props.LeftOnPress}>
          <Text style={{ color: 'white' }}>{this.props.Left}</Text>
        </Button>
        <Button rounded info style={styles.buttonStyle} onPress={this.props.RightOnPress}>
          <Text style={{ color: 'white' }}>{this.props.Right}</Text>
        </Button>
      </View>
    );
  }
}

export default TwoButton;

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    marginHorizontal: 10,
  },
});
