import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';
import ProjectThumbnail from '../components/project/ProjectThumbnail';
import FreelancerThumbnail from '../components/freelancer/FreelancerThumbnail';

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

export default class SearchResult extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} />

        <ScrollView>
          <Subtitle subtitle="검색 결과 - 프로젝트" />
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
          <View style={styles.tapMore}>
            <TouchableOpacity
              onPress={this._handlePressProjectMore}
              style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
            >
              <Text style={styles.tapMoreText}>더 보기</Text>
              <Image
                source={require('../../assets/images/Freelancer/FreelancerThumbnail/SearchMoreIcon.png')}
                style={styles.tapMoreIcon}
              />
            </TouchableOpacity>
          </View>
          <Subtitle subtitle="검색결과 - 프리랜서" />
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
          <View style={styles.tapMore}>
            <TouchableOpacity
              style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}
              onPress={this._handlePressFreelancerMore}
            >
              <Text style={styles.tapMoreText}>더 보기</Text>
              <Image
                source={require('../../assets/images/Freelancer/FreelancerThumbnail/SearchMoreIcon.png')}
                style={styles.tapMoreIcon}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Text />
      </View>
    );
  }

  _handlePressProjectMore = () => {
    this.props.navigation.navigate('ProjectList');
  };
  _handlePressFreelancerMore = () => {
    this.props.navigation.navigate('FreelancerList');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tapMore: {
    height: 35,
    alignItems: 'flex-end',
  },
  tapMoreText: {
    textAlign: 'right',
    textAlignVertical: 'center',
    fontSize: 10,
    marginRight: 8,
  },
  tapMoreIcon: {
    marginLeft: 3,
    width: 5.31,
    height: 8.69,
    marginRight: 10,
  },
});
