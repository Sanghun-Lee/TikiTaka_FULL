import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import PictureAndGrade from '../Proj&Free/Freelancer/PictureAndGrade';
import Contents from '../Proj&Free/Freelancer/Contents';
import Subtitle from '../common/Subtitle';
import List from '../Proj&Free/common/List';

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

export default class Freelancer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.nickname}>{freelancer.nickname}</Text>
        <Text style={styles.organization}>
          {freelancer.organization} / 학년 : {freelancer.grade}
        </Text>
        <Subtitle subtitle="한 줄 소개" />
        <Text style={styles.intro}>{freelancer.intro}</Text>
        <Subtitle subtitle="주 활동 카테고리" />
        {freelancer.categoryList.map((categoryList, index) => {
          return <List first={categoryList} key={index} />;
        })}
        <Subtitle subtitle="학력" />
        {freelancer.educationList.map((educationList, index) => {
          return <List first={educationList.place} second={educationList.grade} key={index} />;
        })}
        <Subtitle subtitle="자격증 리스트" />
        {freelancer.lisenceList.map((lisenceList, index) => {
          return <List first={lisenceList.lisence} second={lisenceList.getDate} key={index} />;
        })}
      </ScrollView>
    );
  }
}

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
    margin: 20,
  },
});
