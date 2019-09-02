//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import FreelancerPicture from '../components/common/SwiperFlatList';
import Subtitle from '../components/common/Subtitle';
import PictureAndGrade from '../components/freelancer/PictureAndGrade';
import Contents from '../components/freelancer/Contents';

// create a component
class FreelancerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <FreelancerPicture />
          <Subtitle subtitle="사용자 이름" />
          <View style={{height: 130}}>
            <PictureAndGrade />
          </View>
          <Subtitle subtitle="" />
          <View style={{height: 400}}>
            <Contents />
          </View>
          <Subtitle subtitle="" />
          <View style={{height: 200}}>
            <Text>수락 버튼과 즐겨찾기 버튼, 메시지 보내기 버튼이 있는 곳</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default FreelancerScreen;
