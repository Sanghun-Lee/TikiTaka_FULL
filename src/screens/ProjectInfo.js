import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import HeaderBar from '../components/projectInfo/HeaderBar';
import ProjectInfoScroll from '../components/projectInfo/ProjectInfoScroll';
import BottomActionBar from '../components/projectInfo/BottomActionBar';

export default class ProjectInfo extends Component {
  render () {
    return (
      <View style={styles.root}>
        <ProjectInfoScroll style={styles.projectInfoScroll} />
        <HeaderBar
          style={styles.headerBar}
          navigation={this.props.navigation}
        />
        <StatusBar animated={true} style={styles.statusBar} />
        <View style={styles.rect} />
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
  statusBar: {},
  projectInfoScroll: {
    top: 65.05,
    left: 0.03,
    width: 374.97,
    height: 520.1,
    position: 'absolute',
  },
  bottomActionBar: {
    top: 585.15,
    left: '0.05%',
    width: 374.63,
    height: 81.85,
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
});
