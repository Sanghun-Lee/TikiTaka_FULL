//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Ionicons} from '@expo/vector-icons';

// create a component
class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render () {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.center}
            onPress={this._PressBackButton}
          >
            <Ionicons name="ios-arrow-back" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>{this.props.title}</Text>
        <View style={{flex: 1}} />
      </View>
    );
  }
  _PressBackButton = () => {
    this.props.navigation.goBack ();
  };
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    height: 43.26,
    flexDirection: 'row',
    backgroundColor: '#35CBEE',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 6,
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

//make this component available to the app
export default Header;
