//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';

import Contents from '../components/Proj&Free/Freelancer/Contents';

import Button from '../components/Proj&Free/common/MessageButton';
import Favorite from '../components/Proj&Free/common/FavoriteButton';

const freelancer = {
  userId: 'aaa@aaa.com',
  nickname: 'hun',
  intro: 'hello nice to meet you',
  grade: 4,
  organization: '영남대학교',
  categoryList: ['코딩', '디자인'],
  educationList: [
    {
      place: '경상고',
      grade: 3,
    },
    {
      place: '영남대학교',
      grade: 4,
    },
  ],
  lisenceList: [
    {
      lisence: '정보처리기사',
      getDate: '2019-08-01',
    },
  ],
};

// create a component
class FreelancerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프리랜서 상세 화면"
        />
        <ScrollView>
          <Text style={styles.nickname}>{freelancer.nickname}</Text>
          <Text style={styles.organization}>
            {freelancer.organization} / {freelancer.grade}
          </Text>
          <Subtitle subtitle="한 줄 소개" />
          <Text style={styles.intro}>{freelancer.intro}</Text>
          <Subtitle subtitle="주 활동 카테고리" />

          <Subtitle subtitle="학력" />

          <Subtitle subtitle="자격증 리스트" />

          <View style={{ height: 100, flexDirection: 'row' }}>
            <View style={[styles.center, { flex: 5 }]}>
              <Button text="메시지 보내기" onPress={this._PressMessageButton} />
            </View>
            <View style={[styles.center, { flex: 1 }]}>
              <Favorite />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  _PressMessageButton = () => {
    alert('메시지 보내기');
  };
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
  nickname: {
    fontSize: 30,
    fontWeight: '800',
    margin: 20,
  },
  organization: {
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 20,
    marginBottom: 20,
  },
  intro: {
    fontSize: 20,
    margin: 10,
  },
});

//make this component available to the app
export default FreelancerScreen;
