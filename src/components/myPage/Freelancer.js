import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import PictureAndGrade from '../freelancer/PictureAndGrade';
import Contents from '../freelancer/Contents';
import Subtitle from '../common/Subtitle';

export default class Freelancer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Subtitle subtitle="" />
        <View style={{ height: 130 }}>
          <PictureAndGrade />
        </View>
        <Subtitle subtitle="" />
        <View>
          <Contents />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
