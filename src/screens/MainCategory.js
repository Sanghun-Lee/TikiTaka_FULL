import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Findfreelancer from '../components/mainCategory/Findfreelancer';
import Findproject from '../components/mainCategory/Findproject';
import HeaderBar from '../components/mainView/HeaderBar';

export default class MainCategory extends Component {
  render () {
    return (
      <View style={styles.root}>
        <Findfreelancer
          style={styles.findfreelancer}
          navigation={this.props.navigation}
        />
        <Findproject
          style={styles.findproject}
          navigation={this.props.navigation}
        />
        <HeaderBar
          style={styles.headerBar}
          navigation={this.props.navigation}
        />
        <StatusBar style={styles.statusBar} />
        <View style={styles.rect} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  root: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  findfreelancer: {
    top: 56,
    left: 175,
    width: 200,
    height: 611,
    position: 'absolute',
  },
  findproject: {
    top: 56,
    left: 0,
    width: 201,
    height: 611,
    position: 'absolute',
  },
  headerBar: {
    top: 21.05,
    left: '0%',
    width: 375,
    height: 44,
    position: 'absolute',
  },
  statusBar: {},
  rect: {
    top: -0.06,
    left: 0.26,
    width: 374.98,
    height: 21.72,
    backgroundColor: '#1ec8ff',
    position: 'absolute',
  },
});
