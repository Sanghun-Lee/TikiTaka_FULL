import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={this._PressBackButton}
        >
          <Ionicons name="ios-arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>티키타카</Text>
        <TouchableOpacity
          style={styles.searchIconView}
          onPress={this._PressSearchButton}
        >
          <Ionicons name="ios-search" size={28} color="white" />
        </TouchableOpacity>
      </View>
    );
  }

  _PressBackButton = () => {
    this.props.navigation.goBack();
  };
  _PressSearchButton = () => {
    this.props.navigation.navigate('Search');
  };
}

_handleSearchButton = () => {
  this.props.navigation.navigate('Search');
};
_handlePressBackButton = () => {};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#35CBEE',
    flexDirection: 'row',
    height: 43.26,
  },
  backTextStyle: {
    fontSize: 13,
    color: 'white',
    alignItems: 'center',
  },
  headerText: {
    flex: 6,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  searchIconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIconImage: {
    height: 20,
    width: 20,
  },
});
