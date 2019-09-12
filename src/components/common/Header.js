import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Ionicons } from '@expo/vector-icons';

export default class Header extends Component {
  static propTypes = {
    Left: PropTypes.string,
    LeftOnPress: PropTypes.func,
    centerText: PropTypes.string,
    Right: PropTypes.string,
    RightOnPress: PropTypes.func,
  };

  static defaultProps = {
    centerText: '티키타카',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* 왼쪽 아이콘 */}
        {this.props.Left === undefined ? (
          <TouchableOpacity style={styles.IconView} onPress={this._PressBackButton}>
            <Ionicons name="ios-arrow-back" size={28} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.IconView} onPress={this.props.LeftOnPress}>
            <Ionicons name={this.props.Left} size={28} color="white" />
          </TouchableOpacity>
        )}
        {/* 중앙에 올 텍스트 */}
        <Text style={styles.headerText}>{this.props.centerText}</Text>
        {/* 오른쪽 아이콘 (있으면 넣는다) */}
        {this.props.Right !== undefined ? (
          <TouchableOpacity style={styles.IconView} onPress={this.props.RightOnPress}>
            <Ionicons name={this.props.Right} size={28} color="white" />
          </TouchableOpacity>
        ) : (
          <View style={{ flex: 1 }} />
        )}
      </View>
    );
  }

  _PressBackButton = () => {
    this.props.navigation.goBack();
  };
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#35CBEE',
    flexDirection: 'row',
    height: 43.26,
  },
  headerText: {
    flex: 6,
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  IconView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
