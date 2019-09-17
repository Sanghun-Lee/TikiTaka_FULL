import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

import SearchValue from './src/components/inputForm/TextBox';
import Picker from './src/components/inputForm/PickerModal';
import Calendar from './src/components/inputForm/Calendar';

const gradeList = [
  { id: 1, Name: '1학년', Value: '1' },
  { id: 2, Name: '2학년', Value: '2' },
  { id: 3, Name: '3학년', Value: '3' },
  { id: 4, Name: '4학년', Value: '4' },
  { id: 5, Name: '5학년', Value: '5' },
  { id: 6, Name: '6학년', Value: '6' },
];

export default class temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: {},
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Calendar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
