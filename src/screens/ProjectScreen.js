//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import ProjectPicture from '../components/common/SwiperFlatList';
import Subtitle from '../components/common/Subtitle';

import Party from '../components/Proj&Free/Project/Party';
import Contents from '../components/Proj&Free/Project/Contents';

import MessageButton from '../components/Proj&Free/common/MessageButton';
import Favorite from '../components/Proj&Free/common/FavoriteButton';
// create a component
class ProjectScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="프로젝트 상세화면" />
        <ScrollView>
          <ProjectPicture />
          <Subtitle subtitle="프로젝트 참여인원" />
          <ScrollView horizontal={true}>
            <Party navigation={this.props.navigation} />
          </ScrollView>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <Contents />
          <Subtitle subtitle="" />
          <View style={{ height: 100, flexDirection: 'row' }}>
            <View style={[styles.center, { flex: 5 }]}>
              <MessageButton text="메시지 보내기" onPress={() => alert('Message Button')} />
            </View>
            <View style={[styles.center, { flex: 1 }]}>
              <Favorite />
            </View>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ProjectScreen;
