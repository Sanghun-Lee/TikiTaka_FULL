//import liraries
import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/FavoriteList/Header';
import Subtitle from '../components/common/Subtitle';
import ProjectThumbnail from '../components/project/ProjectThumbnail';
import NewProjectButton from '../components/MyProject/BottomButton';

const projectList = [
  {
    title: '프로젝트2',
    imgSrc: require ('../../assets/images/Project/ProjectThumbnail/ProjectImage.png'),
    price: 20000,
    endDueDate: '19.08.31',
    Recruitment: 4,
    major: 'C, C++',
  },
];

// create a component
class MyProject extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header navigation={this.props.navigation} title="내 프로젝트" />
        <ScrollView>
          <Subtitle subtitle="내 프로젝트 목록" />
          {projectList.map ((projectList, index) => {
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
        </ScrollView>
        <NewProjectButton
          title="새 프로젝트 만들기"
          IconName="ios-create"
          onPress={() => alert ('새 프로젝트 만들기')}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default MyProject;
