//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

// create a component
class Icon extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
  };

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1}} onPress={this.props.onPress}>
          <Ionicons name={this.props.name} size={40} />
          <Text>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Icon;
