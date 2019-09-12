//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// create a component
class MessageButton extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity stlye={styles.messageButton} onPress={this.props.onPress}>
          <Text>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height: 30.4,
    width: 278.96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35CBEE',
    borderRadius: 5,
  },
  messageButton: {
    flex: 1,
  },
});

//make this component available to the app
export default MessageButton;
