import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NotFreelancer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>먼저 프리랜서로 등록해 주세요 ㅠ</Text>
      </View>
    );
  }
}

export default NotFreelancer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
