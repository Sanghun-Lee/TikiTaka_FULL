//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// create a component
class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.first}>{this.props.first}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.second}>{this.props.second}</Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  first: {
    fontSize: 15,
    fontWeight: '500',
  },
  second: {},
});

//make this component available to the app
export default List;
