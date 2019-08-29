import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import HeaderBar from '../components/mainView/HeaderBar';
import MainScrollArea from '../components/mainView/MainScrollArea';
import StatusBarSize from '../components/common/StatusBar';

export default class MainScrollView extends Component {
  render () {
    return (
      <View style={styles.root}>
        <HeaderBar
          style={styles.headerBar}
          navigation={this.props.navigation}
        />
        <View style={styles.rect} />
        <StatusBar style={styles.statusBar} />
        <MainScrollArea
          style={styles.mainScrollArea}
          navigation={this.props.navigation}
        />
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
    top: 20,
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
  mainScrollArea: {
    top: 64,
    left: 0,
    width: 375.24,
    height: 603,
    position: 'absolute',
  },
});
