//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';

import ProjectThumbnail from '../components/Proj&Free/Project/ProjectThumbnail';
import FreelancerThumbnail from '../components/Proj&Free/Freelancer/FreelancerThumbnail';

const projectList = [
  {
    title: '프로젝트2',
    price: 20000,
    dueDate: '19.08.31',
    maxPeople: 4,
    organization: '영남대학교',
  },
];

const freelancerList = [
  {
    major: '산업디자인',
    organization: '영남대학교',
    grade: 3,
    intro: '저는 영남대학교의 산업 디자인과에 다니고 있습니다.',
  },
];

// create a component
class FavoriteList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} centerText="좋아요 목록" />
        <ScrollView>
          <Subtitle subtitle="프로젝트 리스트" />
          {projectList.map((projectList, index) => {
            return (
              <ProjectThumbnail
                title={projectList.title}
                price={projectList.price}
                dueDate={projectList.dueDate}
                maxPeople={projectList.maxPeople}
                organization={projectList.organization}
                key={index}
                navigation={this.props.navigation}
              />
            );
          })}
          <Subtitle subtitle="프리랜서 리스트" />
          {freelancerList.map((freelancerList, index) => {
            return (
              <FreelancerThumbnail
                major={freelancerList.major}
                organization={freelancerList.organization}
                grade={freelancerList.grade}
                intro={freelancerList.intro}
                key={index}
                navigation={this.props.navigation}
              />
            );
          })}
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
});

//make this component available to the app
export default FavoriteList;
