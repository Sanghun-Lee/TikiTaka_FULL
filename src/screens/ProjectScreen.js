//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import ProjectPicture from '../components/common/SwiperFlatList';
import Subtitle from '../components/common/Subtitle';

import Party from '../components/project/Party';
import Contents from '../components/project/Contents';
import Button from '../components/common/projFree/Button';
import Favorite from '../components/common/projFree/FavortieButton';
// create a component
class ProjectScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <ProjectPicture />
          <Subtitle subtitle="프로젝트 참여인원" />
          <ScrollView horizontal={true}>
            <Party navigation={this.props.navigation} />
          </ScrollView>
          <Subtitle subtitle="프로젝트 상세 정보" />
          <Contents />
          <Subtitle subtitle="" />
          <View style={{height: 100, flexDirection: 'row'}}>
            <View style={[styles.center, {flex: 5}]}>
              <Button
                text="메시지 보내기"
                onPress={() => alert('Message Button')}
              />
            </View>
            <View style={[styles.center, {flex: 1}]}>
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
