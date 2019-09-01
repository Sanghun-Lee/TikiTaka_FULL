//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import ProjectPicture from '../components/common/SwiperFlatList';
import Subtitle from '../components/common/Subtitle';

// create a component
class ProjectScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <ScrollView>
          <ProjectPicture />
          <Subtitle subtitle="프로젝트 참여인원" />
          <View style={{height: 250, backgroundColor: '#bbb'}}>
            <Text>프로젝트 참여 인원들</Text>
          </View>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <View style={{height: 500, backgroundColor: 'skyblue'}}>
            <Text>프로젝트 상세 내용</Text>
            <Text>프로젝트 신청하기 버튼, 좋아요 버튼</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
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
export default ProjectScreen;
