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
    imgSrc: require('../../assets/images/Project/ProjectThumbnail/ProjectImage.png'),
    price: 20000,
    endDueDate: '19.08.31',
    Recruitment: 4,
    major: 'C, C++',
  },
];

const freelancerList = [
  {
    major: '산업디자인',
    collage: '영남대학교',
    rating: 4,
    evaluation: 13,
    grade: 3,
    imgSrc: require('../../assets/images/Freelancer/FreelancerThumbnail/FreelancerImage.png'),
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
                imgSrc={projectList.imgSrc}
                title={projectList.title}
                price={projectList.price}
                endDueDate={projectList.endDueDate}
                Recruitment={projectList.Recruitment}
                major={projectList.major}
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
                collage={freelancerList.collage}
                grade={freelancerList.grade}
                rating={freelancerList.rating}
                evaluation={freelancerList.evaluation}
                imgSrc={freelancerList.imgSrc}
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
