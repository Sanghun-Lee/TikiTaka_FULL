//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import StatusBar from '../../components/common/StatusBar';
import Header from '../../components/FavoriteList/Header';

// create a component
class CreateNewProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header title="새 프로젝트 생성" />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default CreateNewProject;
