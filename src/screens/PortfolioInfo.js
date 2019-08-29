import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import HeaderBar from '../components/freelancerInfo/HeaderBar';
import BottomActionBar from '../components/freelancerInfo/BottomActionBar';
import PortpolioScrollarea
  from '../components/freelancerInfo/PortpolioScrollarea';

export default class PortfolioInfo extends Component {
  render () {
    return (
      <View style={styles.root}>
        <PortpolioScrollarea style={styles.portpolioScrollarea} />
        <HeaderBar
          style={styles.headerBar}
          navigation={this.props.navigation}
        />
        <View style={styles.rect} />
        <StatusBar style={styles.statusBar} />
        <BottomActionBar style={styles.bottomActionBar} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  root: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
  },
  headerBar: {
    top: 21.05,
    left: '0%',
    width: 375,
    height: 44,
    position: 'absolute',
  },
  rect: {
    top: -0.06,
    left: 0.26,
    width: 374.98,
    height: 21.72,
    backgroundColor: '#1ec8ff',
    position: 'absolute',
  },
  statusBar: {},
  bottomActionBar: {
    top: 585.15,
    left: '0.05%',
    width: 374.63,
    height: 81.85,
    position: 'absolute',
  },
  portpolioScrollarea: {
    top: 65.05,
    left: 0,
    width: 375.24,
    height: 520.1,
    position: 'absolute',
  },
});
