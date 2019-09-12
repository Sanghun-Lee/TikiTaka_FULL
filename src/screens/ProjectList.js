//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';

import StatusBar from '../components/common/StatusBar';
import Header from '../components/common/Header';
import Subtitle from '../components/common/Subtitle';

import ProjectThumbnail from '../components/Proj&Free/Project/ProjectThumbnail';
import FilterButton from '../components/common/BottomButton';

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

// create a component
class ProjectList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <Header
          navigation={this.props.navigation}
          centerText="프로젝트 리스트"
          Right="ios-search"
          RightOnPress={this._PressSearchIcon}
        />
        <Subtitle subtitle="프로젝트" />
        <ScrollView>
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
        </ScrollView>
        <FilterButton
          title="필터 적용"
          IconName="ios-options"
          onPress={() => alert('button Pressed')}
        />
      </View>
    );
  }
  _PressSearchIcon = () => {
    this.props.navigation.navigate('Search');
  };
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ProjectList;
