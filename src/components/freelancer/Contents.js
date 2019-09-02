//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Contents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>학년 : 4학년</Text>
        <Text>대학 : 영남대학교</Text>
        <Text>소속 : 티키타카 동아리</Text>
        <Text>전공 : 국어국문학과</Text>
        <Text>부전공 : 없음</Text>
        <Text>연락처 : 010-1234-5678</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 70,
  },
});

//make this component available to the app
export default Contents;
