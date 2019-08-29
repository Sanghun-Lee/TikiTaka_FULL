import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    postScreen: PropTypes.string.isRequired,
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>헤더 화면</Text>
      </View>
    );
  }
}

_handleSearchButton = () => {
  this.props.navigation.navigate ('Search');
};
_handlePressBackButton = () => {
  this.props.navigation.navigate (this.props.postScreen);
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
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
    flexDirection: 'row',
    marginLeft: 13,
  },
  searchIconImage: {
    height: 20,
    width: 20,
  },
});
